import Link from "next/link";
import Image from "next/image";

const TURFS = [
  {
    id: 1,
    name: "Premium Turf A",
    location: "Downtown Arena",
    price: 50,
    image: "/images/turf-1.jpg",
    features: ["Floodlights", "Changing Room", "Parking"],
    size: "5-a-side",
  },
  {
    id: 2,
    name: "Elite Turf B",
    location: "Sports Complex",
    price: 75,
    image: "/images/turf-2.jpg",
    features: ["Floodlights", "Scoreboard", "Parking"],
    size: "7-a-side",
  },
  {
    id: 3,
    name: "Professional Turf C",
    location: "City Stadium",
    price: 100,
    image: "/images/turf-3.jpg",
    features: ["Premium Grass", "Changing Room", "Cafeteria"],
    size: "11-a-side",
  },
  {
    id: 4,
    name: "Standard Turf D",
    location: "Community Center",
    price: 40,
    image: "/images/turf-4.jpg",
    features: ["Floodlights", "Parking", "Water Facility"],
    size: "5-a-side",
  },
];

export default function TurfsSection() {
  return (
    <section id="turfs" className="bg-slate-950 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Premium Turfs
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Choose from our selection of world-class turf facilities
          </p>
        </div>

        {/* Turfs Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TURFS.map((turf) => (
            <div
              key={turf.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition hover:border-emerald-400/50"
            >
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-emerald-600/40 via-emerald-500/25 to-slate-950">
                <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_0,rgba(255,255,255,0.10)_1px,transparent_1px,transparent_48px)] [background-size:48px_100%]" />
                <div className="absolute inset-4 rounded-xl border border-white/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0,rgba(2,6,23,0.45)_55%,rgba(2,6,23,0.85)_100%)]" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {turf.name}
                  </h3>
                  <span className="rounded-lg bg-emerald-400/10 px-2 py-1 text-xs font-semibold text-emerald-400">
                    {turf.size}
                  </span>
                </div>

                <p className="mb-4 text-sm text-white/60">{turf.location}</p>

                {/* Features */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {turf.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-xs text-white/70"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & Booking */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-white">
                      ${turf.price}
                    </span>
                    <span className="text-sm text-white/60">/hour</span>
                  </div>
                  <Link
                    href={`/turfs/${turf.id}`}
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/turfs"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
          >
            View All Turfs
          </Link>
        </div>
      </div>
    </section>
  );
}
