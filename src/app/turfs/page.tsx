import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Browse Turfs - Turf Nation",
  description: "Browse and book from our collection of premium turf facilities.",
};

const TURFS = [
  {
    id: 1,
    name: "Premium Turf A",
    location: "Downtown Arena",
    price: 50,
    size: "5-a-side",
    features: ["Floodlights", "Changing Room", "Parking", "Water Facility"],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Elite Turf B",
    location: "Sports Complex",
    price: 75,
    size: "7-a-side",
    features: ["Floodlights", "Scoreboard", "Parking", "Cafeteria"],
    rating: 4.9,
    reviews: 98,
  },
  {
    id: 3,
    name: "Professional Turf C",
    location: "City Stadium",
    price: 100,
    size: "11-a-side",
    features: ["Premium Grass", "Changing Room", "Cafeteria", "VIP Lounge"],
    rating: 5.0,
    reviews: 67,
  },
  {
    id: 4,
    name: "Standard Turf D",
    location: "Community Center",
    price: 40,
    size: "5-a-side",
    features: ["Floodlights", "Parking", "Water Facility"],
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 5,
    name: "Metro Turf E",
    location: "West Side",
    price: 60,
    size: "7-a-side",
    features: ["Floodlights", "Changing Room", "Parking"],
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 6,
    name: "Arena Turf F",
    location: "North Zone",
    price: 55,
    size: "5-a-side",
    features: ["Floodlights", "Scoreboard", "Water Facility"],
    rating: 4.8,
    reviews: 103,
  },
  {
    id: 7,
    name: "Champion Turf G",
    location: "East District",
    price: 85,
    size: "7-a-side",
    features: ["Premium Grass", "Changing Room", "Parking", "Cafeteria"],
    rating: 4.9,
    reviews: 76,
  },
  {
    id: 8,
    name: "Victory Turf H",
    location: "South Plaza",
    price: 45,
    size: "5-a-side",
    features: ["Floodlights", "Parking", "Water Facility"],
    rating: 4.5,
    reviews: 142,
  },
];

export default function TurfsPage() {
  return (
    <div className="bg-slate-950 pt-28">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(16,185,129,0.35),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Browse Our Turfs
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Find the perfect turf for your next game. All facilities come with premium amenities.
            </p>
          </div>

          {/* Filters */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="flex flex-wrap gap-4">
              <select className="h-12 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition [color-scheme:dark] focus:border-emerald-400/50">
                <option className="bg-slate-950" value="">All Sizes</option>
                <option className="bg-slate-950" value="5">5-a-side</option>
                <option className="bg-slate-950" value="7">7-a-side</option>
                <option className="bg-slate-950" value="11">11-a-side</option>
              </select>

              <select className="h-12 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition [color-scheme:dark] focus:border-emerald-400/50">
                <option className="bg-slate-950" value="">All Locations</option>
                <option className="bg-slate-950" value="downtown">Downtown</option>
                <option className="bg-slate-950" value="north">North Zone</option>
                <option className="bg-slate-950" value="south">South Plaza</option>
                <option className="bg-slate-950" value="east">East District</option>
                <option className="bg-slate-950" value="west">West Side</option>
              </select>

              <select className="h-12 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition [color-scheme:dark] focus:border-emerald-400/50">
                <option className="bg-slate-950" value="">Price: All</option>
                <option className="bg-slate-950" value="low">Under $50</option>
                <option className="bg-slate-950" value="mid">$50 - $75</option>
                <option className="bg-slate-950" value="high">Above $75</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Turfs Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

                  <p className="mb-2 text-sm text-white/60">{turf.location}</p>

                  {/* Rating */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex items-center text-emerald-400">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm font-medium">{turf.rating}</span>
                    </div>
                    <span className="text-xs text-white/50">({turf.reviews} reviews)</span>
                  </div>

                  {/* Features */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {turf.features.slice(0, 3).map((feature) => (
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
        </div>
      </section>
    </div>
  );
}
