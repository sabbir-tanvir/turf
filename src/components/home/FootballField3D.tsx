'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'

type Vec3 = [number, number, number]

/* =========================
   Helpers / Volumetric Beam with Fade
========================= */
const FadingBeamMaterial: React.FC<{ color: string }> = ({ color }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  
  const uniforms = useMemo(() => ({
    uColor: { value: new THREE.Color(color) },
    uOpacity: { value: 0.12 },
  }), [color])

  return (
    <shaderMaterial
      ref={materialRef}
      uniforms={uniforms}
      vertexShader={`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `}
      fragmentShader={`
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        void main() {
          // vUv.y goes from 0 (narrow/source) to 1 (wide/tip)
          // Fade out strongly towards the tip
          float fade = 1.0 - smoothstep(0.0, 0.85, vUv.y);
          // Also fade at the very source for softness
          float sourceBlend = smoothstep(0.0, 0.08, vUv.y);
          float alpha = fade * sourceBlend * uOpacity;
          // Radial fade from center to edges
          float radial = 1.0 - abs(vUv.x - 0.5) * 2.0;
          alpha *= radial * radial;
          gl_FragColor = vec4(uColor, alpha);
        }
      `}
      transparent
      side={THREE.DoubleSide}
      blending={THREE.AdditiveBlending}
      depthWrite={false}
    />
  )
}

const VolumetricBeam = ({ length = 12, angle = 0.45, color = '#fff1d6' }) => {
  const tipRadius = Math.tan(angle) * length
  return (
    <mesh position={[0, 0, length / 2]} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[tipRadius, 0.08, length, 32, 16, true]} />
      <FadingBeamMaterial color={color} />
    </mesh>
  )
}

/* =========================
   Light Tower
========================= */
const FloodLightTower: React.FC<{
  position: Vec3
  aimAt: Vec3
  height?: number
}> = ({ position, aimAt, height = 8 }) => {
  const lightRef = useRef<THREE.SpotLight | null>(null)
  const headRef = useRef<THREE.Group>(null)
  const groupRef = useRef<THREE.Group>(null)

  const aimX = aimAt[0], aimY = aimAt[1], aimZ = aimAt[2]

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!lightRef.current) return
    // Gentle pulse
    lightRef.current.intensity = 18 + Math.sin(t * 0.8) * 2
  })

  // Ensure the tower group rotates to face center, and head looks at target
  useEffect(() => {
    if (groupRef.current) {
      // Look at center point on ground (only Y rotation)
      const target = new THREE.Vector3(aimX, 0, aimZ)
      groupRef.current.lookAt(target)
    }
    if (headRef.current) {
      headRef.current.updateMatrixWorld(true)
      headRef.current.lookAt(aimX, aimY, aimZ)
    }
  }, [aimX, aimY, aimZ])

  return (
    <group ref={groupRef} position={position}>
      {/* Pole */}
      <mesh position={[0, height / 2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.12, 0.18, height, 14]} />
        <meshStandardMaterial color="#1a1f2a" metalness={0.6} roughness={0.35} />
      </mesh>

      {/* Lamp arm - pointing towards the field center now thanks to group lookAt */}
      <mesh position={[0, height - 0.6, 0.35]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.7, 12]} />
        <meshStandardMaterial color="#2b3446" metalness={0.7} roughness={0.28} />
      </mesh>

      {/* Lamp head - dynamically orienting to target */}
      <group ref={headRef} position={[0, height - 0.9, 0.8]}>
        <mesh castShadow>
          <boxGeometry args={[0.9, 0.5, 0.55]} />
          <meshStandardMaterial color="#0f121a" metalness={0.35} roughness={0.5} />
        </mesh>

        {/* Emissive front panel (glow) facing +Z */}
        <mesh position={[0, 0, 0.28]}>
          <planeGeometry args={[0.8, 0.4]} />
          <meshStandardMaterial
            color="#fff8e8"
            emissive="#fff3d6"
            emissiveIntensity={2.5}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Small warm halo around the lamp head - short range */}
        <pointLight 
          position={[0, 0, 0.4]} 
          intensity={3} 
          distance={3.5} 
          decay={2} 
          color="#ffe8c0" 
        />

        {/* Volumetric beam - short, fades out before reaching the ground */}
        <VolumetricBeam length={10} angle={0.4} color="#fff5e0" />

        {/* Target object for the spotlight positioned directly ahead on local +Z */}
        <object3D position={[0, 0, 1]} ref={(r) => { if (lightRef.current && r) lightRef.current.target = r }} />

        {/* Spotlight - shorter distance and higher decay so light fades before going under field */}
        <spotLight
          ref={lightRef}
          position={[0, 0, 0.3]}
          angle={0.5}
          penumbra={0.8}
          intensity={18}
          distance={18}
          decay={2.2}
          color="#fff3e0"
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}
        />
      </group>
    </group>
  )
}

/* =========================
   Realistic Grass Structure
========================= */
const Grass: React.FC<{ width: number; length: number }> = ({ width, length }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 150000 // Substantial density for realistic look
  const initializedRef = useRef(false)

  useEffect(() => {
    if (!meshRef.current) return
    
    // Check if already initialized to prevent duplicate work
    if (initializedRef.current && meshRef.current.instanceMatrix.count === count) return
    
    const dummy = new THREE.Object3D()
    const color = new THREE.Color()

    for (let i = 0; i < count; i++) {
      // Random position within the field
      const x = (Math.random() - 0.5) * width
      const z = (Math.random() - 0.5) * length

      dummy.position.set(x, 0, z)
      
      // Random yaw rotation
      dummy.rotation.y = Math.random() * Math.PI * 2
      // Add slightly varying bends to the blades to simulate natural grass drooping
      dummy.rotation.x = (Math.random() - 0.5) * 0.3
      dummy.rotation.z = (Math.random() - 0.5) * 0.3

      // Varing blade heights
      const scale = 0.5 + Math.random() * 0.7
      dummy.scale.set(scale, scale, scale)
      
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)

      // Alternating stripe coloring (simulates freshly mowed pitch)
      const stripe = Math.floor((z + length / 2) / (length / 8))
      if (stripe % 2 === 0) {
        color.set('#205d29') // Dark green stripe
      } else {
        color.set('#276d33') // Light green stripe
      }

      // Sprinkle some small color noise for realism
      color.offsetHSL(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.1
      )
      meshRef.current.setColorAt(i, color)
    }

    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true
    initializedRef.current = true
  }, [width, length, count])

  // Simple plane with origin translated to the bottom edge
  const bladeGeo = useMemo(() => {
    const geo = new THREE.PlaneGeometry(0.015, 0.15)
    geo.translate(0, 0.075, 0)
    return geo
  }, [])

  // Grass receives shadow but casting shadow on 150k objects is extremely heavy
  return (
    <instancedMesh ref={meshRef} args={[bladeGeo, undefined, count]} receiveShadow>
      <meshStandardMaterial roughness={0.9} side={THREE.DoubleSide} />
    </instancedMesh>
  )
}

/* =========================
   Turf + Boards + Fence/Net
========================= */
const MiniTurf: React.FC = () => {
  // Dimensions
  const W = 14
  const L = 9
  const wallH = 1.25
  const fenceH = 2.35

  const fencePanels = useMemo(() => {
    return [
      { pos: [0, fenceH / 2 + wallH, -L / 2], rot: [0, 0, 0], w: W, h: fenceH },
      { pos: [0, fenceH / 2 + wallH, L / 2], rot: [0, Math.PI, 0], w: W, h: fenceH },
      { pos: [-W / 2, fenceH / 2 + wallH, 0], rot: [0, Math.PI / 2, 0], w: L, h: fenceH },
      { pos: [W / 2, fenceH / 2 + wallH, 0], rot: [0, -Math.PI / 2, 0], w: L, h: fenceH },
    ] as Array<{ pos: Vec3; rot: Vec3; w: number; h: number }>
  }, [])

  // Support poles along the edges
  const poles = useMemo(() => {
    const arr: Array<{ pos: Vec3 }> = []
    const step = 2.2
    for (let x = -W / 2; x <= W / 2 + 0.001; x += step) {
      arr.push({ pos: [x, wallH + fenceH / 2, -L / 2] })
      arr.push({ pos: [x, wallH + fenceH / 2, L / 2] })
    }
    for (let z = -L / 2; z <= L / 2 + 0.001; z += step) {
      arr.push({ pos: [-W / 2, wallH + fenceH / 2, z] })
      arr.push({ pos: [W / 2, wallH + fenceH / 2, z] })
    }
    return arr
  }, [])

  return (
    <group>
      {/* Base wood-ish slab */}
      <mesh position={[0, -0.22, 0]} receiveShadow>
        <boxGeometry args={[W + 0.9, 0.45, L + 0.9]} />
        <meshStandardMaterial color="#6b4b2f" roughness={0.85} />
      </mesh>

      {/* Deep colored ground beneath the grass */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[W, L]} />
        <meshStandardMaterial color="#18421c" roughness={0.95} />
      </mesh>

      {/* High-fidelity instanced grass replacing the flat stripes */}
      <Grass width={W} length={L} />

      {/* White center ring and border slightly raised to show over the blades */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.12, 0]}>
        <ringGeometry args={[Math.min(W, L) * 0.17, Math.min(W, L) * 0.175, 64]} />
        <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} transparent opacity={0.85} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.12, 0]}>
        <planeGeometry args={[W - 0.3, L - 0.3]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.5} />
      </mesh>

      {/* Surrounding boards */}
      {fencePanels.map((p, i) => (
        <mesh key={`board-${i}`} position={p.pos} rotation={p.rot as any} castShadow receiveShadow>
          <planeGeometry args={[p.w, wallH]} />
          <meshStandardMaterial color="#cfd7df" roughness={0.65} metalness={0.05} />
        </mesh>
      ))}

      {/* Transparent net/fence */}
      {fencePanels.map((p, i) => (
        <mesh
          key={`fence-${i}`}
          position={[p.pos[0], p.pos[1] + wallH / 2, p.pos[2]]}
          rotation={p.rot as any}
          castShadow
        >
          <planeGeometry args={[p.w, p.h]} />
          <meshStandardMaterial color="#e9eef3" transparent opacity={0.3} wireframe />
        </mesh>
      ))}

      {/* Perimeter Poles */}
      {poles.map((pl, i) => (
        <mesh key={`pole-${i}`} position={pl.pos} castShadow>
          <cylinderGeometry args={[0.06, 0.06, fenceH + 0.2, 10]} />
          <meshStandardMaterial color="#aab3bf" metalness={0.4} roughness={0.45} />
        </mesh>
      ))}
    </group>
  )
}

/* =========================
   Master Scene
========================= */
const TurfScene: React.FC<{ zoomEnabled?: boolean }> = ({ zoomEnabled = false }) => {
  // Center of the field to aim spotlights at
  const aim: Vec3 = [0, 0.2, 0]

  return (
    <>
      <color attach="background" args={['#020617']} />
      <PerspectiveCamera makeDefault position={[12, 12, 14]} fov={45} />

      <OrbitControls
        enablePan={false}
        enableZoom={zoomEnabled}
        minDistance={8}
        maxDistance={28}
        maxPolarAngle={Math.PI / 2.05}
        minPolarAngle={Math.PI / 6}
        enableDamping
        dampingFactor={0.08}
        autoRotate
        autoRotateSpeed={0.5}
      />

      {/* Base global atmosphere lighting */}
      <ambientLight intensity={0.18} color="#c8d8f0" />
      
      {/* Gentle warm overhead to simulate the combined floodlight wash on the field */}
      <directionalLight 
        position={[0, 14, 0]} 
        intensity={0.45} 
        color="#fff5e6"
      />
      <directionalLight 
        position={[8, 15, 6]} 
        intensity={0.35} 
        castShadow 
        shadow-mapSize-width={2048} 
        shadow-mapSize-height={2048} 
        shadow-bias={-0.0001}
        color="#e8eaf0"
      />

      {/* 4 Corner Floodlight Towers */}
      <FloodLightTower position={[-8.2, 0, -6]} aimAt={aim} height={8.2} />
      <FloodLightTower position={[8.2, 0, -6]} aimAt={aim} height={8.2} />
      <FloodLightTower position={[-8.2, 0, 6]} aimAt={aim} height={8.2} />
      <FloodLightTower position={[8.2, 0, 6]} aimAt={aim} height={8.2} />

      <MiniTurf />
      <Environment preset="city" />
      <fog attach="fog" args={['#050812', 15, 45]} />
    </>
  )
}

/* =========================
   Full Screen Layout
========================= */
const TurfRightPanel: React.FC<{
  title?: string
  subtitle?: string
}> = ({ title = 'Turf Preview', subtitle = 'Interactive 3D mini turf (full screen)' }) => {
  const [ctrlPressed, setCtrlPressed] = useState(false)

  // Listen for control keys to enable zoom
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) setCtrlPressed(true)
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (!e.ctrlKey && !e.metaKey) setCtrlPressed(false)
    }

    const handleBlur = () => setCtrlPressed(false)

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('blur', handleBlur)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('blur', handleBlur)
    }
  }, [])

  return (
    <div className="relative h-screen w-screen overflow-hidden  bg-slate-950 font-sans">
      <div className="h-full w-full ">
        {/* Anti-aliasing and pixel ratio adjusted for quality */}
        <Canvas shadows dpr={[1, 2]}>
          <TurfScene zoomEnabled={ctrlPressed} />
        </Canvas>
      </div>

      {/* Overlay UI */}


      <div className="absolute bottom-0 left-0 right-0 px-6 py-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex justify-center pointer-events-none">
        <div className="bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 shadow-2xl text-white/90 text-sm font-medium transition-all duration-300">
          {ctrlPressed
            ? 'Drag to rotate • Ctrl/Cmd + Scroll to zoom (Zoom Active)'
            : 'Drag to rotate • Hold Ctrl/Cmd + Scroll to zoom'}
        </div>
      </div>
    </div>
  )
}

export default TurfRightPanel;
