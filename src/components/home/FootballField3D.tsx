'use client'

import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'

/* =========================
   Helpers / Types
========================= */
type Vec3 = [number, number, number]

/* =========================
   Light Tower (proper looking)
========================= */
const FloodLightTower: React.FC<{
  position: Vec3
  aimAt: Vec3
  height?: number
}> = ({ position, aimAt, height = 8 }) => {
  const lightRef = useRef<THREE.SpotLight | null>(null)
  const targetRef = useRef<THREE.Object3D | null>(null)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!lightRef.current) return
    // gentle, subtle stadium pulse
    lightRef.current.intensity = 3.2 + Math.sin(t * 0.6) * 0.25
  })

  return (
    <group position={position}>
      {/* Pole */}
      <mesh position={[0, height / 2, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.18, height, 14]} />
        <meshStandardMaterial color="#1a1f2a" metalness={0.6} roughness={0.35} />
      </mesh>

      {/* Lamp arm */}
      <mesh position={[0.35, height - 0.6, 0]} rotation={[0, 0, -0.35]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 1.2, 12]} />
        <meshStandardMaterial color="#2b3446" metalness={0.7} roughness={0.28} />
      </mesh>

      {/* Lamp head */}
      <group position={[0.85, height - 0.95, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.9, 0.5, 0.55]} />
          <meshStandardMaterial color="#0f121a" metalness={0.35} roughness={0.5} />
        </mesh>

        {/* Emissive front panel (glow) */}
        <mesh position={[0.46, 0, 0]}>
          <planeGeometry args={[0.55, 0.32]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={2.2}
            transparent
            opacity={0.95}
          />
        </mesh>

        {/* A little bloom-like glow via point light */}
        <pointLight position={[0.55, 0, 0]} intensity={0.9} distance={7} color="#fff3d6" />
      </group>

      {/* Target object (so spotlight aims correctly) */}
      <object3D ref={targetRef} position={new THREE.Vector3(...aimAt).sub(new THREE.Vector3(...position))} />

      {/* Spotlight */}
      <spotLight
        ref={(r) => {
          lightRef.current = r
          if (r && targetRef.current) r.target = targetRef.current
        }}
        position={[0.95, height - 0.95, 0]}
        angle={0.55}
        penumbra={0.55}
        intensity={3.2}
        distance={35}
        decay={1.6}
        color="#fff1d6"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  )
}

/* =========================
   Turf + Boards + Fence/Net
========================= */
const MiniTurf: React.FC = () => {
  // dimensions (mini turf like reference)
  const W = 14
  const L = 9
  const wallH = 1.25
  const fenceH = 2.35

  const fencePanels = useMemo(() => {
    // 4 sides: each panel is a plane; we add poles too
    return [
      { pos: [0, fenceH / 2 + wallH, -L / 2], rot: [0, 0, 0], w: W, h: fenceH }, // back
      { pos: [0, fenceH / 2 + wallH, L / 2], rot: [0, Math.PI, 0], w: W, h: fenceH }, // front
      { pos: [-W / 2, fenceH / 2 + wallH, 0], rot: [0, Math.PI / 2, 0], w: L, h: fenceH }, // left
      { pos: [W / 2, fenceH / 2 + wallH, 0], rot: [0, -Math.PI / 2, 0], w: L, h: fenceH }, // right
    ] as Array<{ pos: Vec3; rot: Vec3; w: number; h: number }>
  }, [])

  // poles along edges
  const poles = useMemo(() => {
    const arr: Array<{ pos: Vec3 }> = []
    const step = 2.2

    // along width edges
    for (let x = -W / 2; x <= W / 2 + 0.001; x += step) {
      arr.push({ pos: [x, wallH + fenceH / 2, -L / 2] })
      arr.push({ pos: [x, wallH + fenceH / 2, L / 2] })
    }
    // along length edges
    for (let z = -L / 2; z <= L / 2 + 0.001; z += step) {
      arr.push({ pos: [-W / 2, wallH + fenceH / 2, z] })
      arr.push({ pos: [W / 2, wallH + fenceH / 2, z] })
    }
    return arr
  }, [])

  return (
    <group>
      {/* Base slab (wood-ish) */}
      <mesh position={[0, -0.22, 0]} receiveShadow>
        <boxGeometry args={[W + 0.9, 0.45, L + 0.9]} />
        <meshStandardMaterial color="#6b4b2f" roughness={0.85} />
      </mesh>

      {/* Turf */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[W, L]} />
        <meshStandardMaterial color="#1f8a3b" roughness={0.95} />
      </mesh>

      {/* Simple turf stripe bands */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.002, -L / 2 + (i + 0.5) * (L / 8)]}
          receiveShadow
        >
          <planeGeometry args={[W, L / 8]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#239a43' : '#1f8a3b'} roughness={0.98} />
        </mesh>
      ))}

      {/* White boundary lines */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.004, 0]}>
        <ringGeometry args={[Math.min(W, L) * 0.17, Math.min(W, L) * 0.175, 64]} />
        <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} />
      </mesh>

      {/* Outer border line */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.0038, 0]}>
        <planeGeometry args={[W - 0.3, L - 0.3]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.18} />
      </mesh>

      {/* Boards (lower wall) */}
      {fencePanels.map((p, i) => (
        <mesh key={`board-${i}`} position={p.pos} rotation={p.rot as any} castShadow receiveShadow>
          <planeGeometry args={[p.w, wallH]} />
          <meshStandardMaterial color="#cfd7df" roughness={0.65} metalness={0.05} />
        </mesh>
      ))}

      {/* Net/fence (wireframe transparent) */}
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

      {/* Poles */}
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
   Scene (lights + turf)
========================= */
const TurfScene: React.FC = () => {
  // Aim at center-ish
  const aim: Vec3 = [0, 0.2, 0]

  return (
    <>
      {/* Background */}
      <color attach="background" args={['#070b14']} />

      {/* Camera */}
      <PerspectiveCamera makeDefault position={[14, 10.5, 14]} fov={40} />

      {/* Controls (limited + smooth) */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={14}
        maxDistance={26}
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={Math.PI / 4}
        enableDamping
        dampingFactor={0.08}
      />

      {/* Global lighting */}
      <ambientLight intensity={0.35} />
      <directionalLight position={[8, 10, 6]} intensity={0.6} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />

      {/* Towers (corners) */}
      <FloodLightTower position={[-8.2, 0, -6]} aimAt={aim} height={8.2} />
      <FloodLightTower position={[8.2, 0, -6]} aimAt={aim} height={8.2} />
      <FloodLightTower position={[-8.2, 0, 6]} aimAt={aim} height={8.2} />
      <FloodLightTower position={[8.2, 0, 6]} aimAt={aim} height={8.2} />

      {/* Turf */}
      <MiniTurf />

      {/* Nice environment reflections */}
      <Environment preset="city" />
    </>
  )
}

/* =========================
   Right-side Panel Layout
========================= */
const TurfRightPanel: React.FC<{
  title?: string
  subtitle?: string
}> = ({ title = 'Turf Preview', subtitle = 'Interactive 3D mini turf (right panel)' }) => {
  return (
    <div className="w-full">
      {/* Two-column layout: content left, 3D preview right */}
      <div className="flex w-full gap-6 items-stretch">
        {/* LEFT: Your page content */}
        <div className="flex-1 min-w-0">
          {/* Put your existing page content here, or delete this block */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 text-white/70">{subtitle}</p>

            <div className="mt-5 text-white/70 leading-relaxed">
              Add your booking details / pricing / CTA on the left. The 3D stays on the right.
            </div>
          </div>
        </div>

        {/* RIGHT: 3D panel (NOT full page) */}
        <div className="w-[520px] max-w-full rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl">
          <div className="h-[520px] w-full">
            <Canvas shadows dpr={[1, 2]}>
              <TurfScene />
            </Canvas>
          </div>

          {/* Small footer label (optional) */}
          <div className="px-4 py-3 bg-white/5 text-white/70 text-sm">
            Drag to rotate • Scroll to zoom
          </div>
        </div>
      </div>

      {/* Mobile: stack */}
      <div className="mt-6 block lg:hidden">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 shadow-2xl">
          <div className="h-[360px] w-full">
            <Canvas shadows dpr={[1, 2]}>
              <TurfScene />
            </Canvas>
          </div>
          <div className="px-4 py-3 bg-white/5 text-white/70 text-sm">Drag to rotate • Scroll to zoom</div>
        </div>
      </div>
    </div>
  )
}

export default TurfRightPanel;
