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
    name: "Urban Kicks B",
    location: "City Center",
    price: 45,
    size: "5-a-side",
    features: ["Floodlights", "Water Facility"],
    rating: 4.5,
    reviews: 86,
  },
  {
    id: 3,
    name: "Green Valley C",
    location: "South Park",
    price: 55,
    size: "7-a-side",
    features: ["Floodlights", "Parking", "Cafe", "WiFi"],
    rating: 4.9,
    reviews: 210,
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
    name: "SportZone F",
    location: "North Hills",
    price: 48,
    size: "5-a-side",
    features: ["Floodlights", "Parking"],
    rating: 4.4,
    reviews: 67,
  },
  {
    id: 7,
    name: "Elite Pitch G",
    location: "Tech Park",
    price: 70,
    size: "9-a-side",
    features: ["Floodlights", "Changing Room", "Parking", "Cafe", "Pro Shop"],
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 8,
    name: "Rookie Ground H",
    location: "East Gardens",
    price: 35,
    size: "5-a-side",
    features: ["Daylight Only", "Water Facility"],
    rating: 4.2,
    reviews: 45,
  },
];

export default function TurfsPage() {
  return (
    <div className="bg-palette-light min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-palette-cream via-white to-palette-light">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-palette-sub/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-palette-dark/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-stone-800 sm:text-6xl">
              Find Your <span className="text-stone-600 relative inline-block">
                Perfect Pitch
                <span className="absolute bottom-0 left-0 w-full h-2 bg-palette-dark/40 -z-10 transform -rotate-1 rounded-full"></span>
              </span>
            </h1>
            <p className="mt-6 text-lg text-stone-600">
              Browse top-rated facilities near you. Filter by size, price, and amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <div className="sticky top-20 z-30 w-full border-y border-palette-sub/30 bg-white/90 backdrop-blur-xl shadow-lg">
        <div className="container mx-auto flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <select className="rounded-lg border border-palette-sub bg-white px-3 py-2 text-sm text-stone-700 focus:border-palette-dark focus:outline-none focus:ring-2 focus:ring-palette-dark/20 hover:bg-palette-cream transition-colors cursor-pointer">
              <option>Any Size</option>
              <option>5-a-side</option>
              <option>7-a-side</option>
              <option>9-a-side</option>
              <option>11-a-side</option>
            </select>
            <select className="rounded-lg border border-palette-sub bg-white px-3 py-2 text-sm text-stone-700 focus:border-palette-dark focus:outline-none focus:ring-2 focus:ring-palette-dark/20 hover:bg-palette-cream transition-colors cursor-pointer">
              <option>Any Location</option>
              <option>Downtown</option>
              <option>North</option>
              <option>South</option>
              <option>West</option>
            </select>
            <select className="rounded-lg border border-palette-sub bg-white px-3 py-2 text-sm text-stone-700 focus:border-palette-dark focus:outline-none focus:ring-2 focus:ring-palette-dark/20 hover:bg-palette-cream transition-colors cursor-pointer">
              <option>Price Range</option>
              <option>$0 - $30</option>
              <option>$30 - $50</option>
              <option>$50+</option>
            </select>
          </div>
          <p className="text-sm font-semibold text-stone-600 bg-palette-cream px-3 py-1.5 rounded-full">Showing {TURFS.length} turfs</p>
        </div>
      </div>

      {/* Grid Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-palette-light to-palette-cream">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TURFS.map((turf) => (
              <div
                key={turf.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-palette-sub/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-stone-900/10 hover:border-palette-dark"
              >
                {/* Image placeholder */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-palette-sub/40 to-palette-light">
                  <div className="absolute inset-0 bg-gradient-to-tr from-palette-dark/10 to-palette-sub/30" />
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-bold text-lg">
                    {turf.name}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-palette-dark/0 transition-colors duration-300 group-hover:bg-palette-dark/10" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-stone-800 group-hover:text-stone-600 transition-colors">
                      {turf.name}
                    </h3>
                    <span className="rounded-md bg-palette-dark text-white px-2 py-1 text-xs font-semibold">
                      {turf.size}
                    </span>
                  </div>

                  <p className="mb-4 text-sm text-stone-500 flex items-center gap-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {turf.location}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {turf.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-palette-cream px-2.5 py-0.5 text-[10px] font-medium text-stone-600 border border-palette-sub/30"
                      >
                        {feature}
                      </span>
                    ))}
                    {turf.features.length > 3 && (
                      <span className="rounded-full px-2.5 py-0.5 text-[10px] font-medium text-stone-500">
                         +{turf.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex items-end justify-between border-t border-palette-sub/20 pt-4">
                    <div>
                      <div className="flex items-center gap-1 text-palette-dark mb-1">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-bold">{turf.rating}</span>
                        <span className="text-xs text-stone-400">({turf.reviews})</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-stone-800">${turf.price}</span>
                        <span className="text-xs text-stone-500">/hr</span>
                      </div>
                    </div>
                    <Link
                      href={`/checkout?id=${turf.id}`}
                      className="rounded-xl bg-palette-dark px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-palette-sub focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palette-dark transition-colors"
                    >
                      Book
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
