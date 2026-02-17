import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Turf Nation",
  description: "Learn more about Turf Nation and our mission to provide the best turf booking experience.",
};

const stats = [
  { label: "Active Turfs", value: "50+" },
  { label: "Happy Players", value: "10k+" },
  { label: "Cities", value: "12+" },
  { label: "Bookings", value: "50k+" },
];

const values = [
  {
    title: "Quality First",
    description: "We rigorously vet every facility to ensure premium playing conditions.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Instant Access",
    description: "Real-time availability and booking confirmation in seconds.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Community Driven",
    description: "Building connections through the love of sports and competition.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Fair Play",
    description: "Transparent pricing and policies for both players and owners.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
];

const team = [
  { name: "Alex Morgan", role: "Founder & CEO", image: "bg-palette-dark" },
  { name: "Sarah Chen", role: "Head of Operations", image: "bg-palette-sub" },
  { name: "Marcus Johnson", role: "Tech Lead", image: "bg-palette-light" },
  { name: "Priya Patel", role: "Community Manager", image: "bg-palette-dark" },
];

export default function AboutPage() {
  return (
    <div className="bg-palette-light pb-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 text-center bg-gradient-to-b from-palette-cream to-palette-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-stone-800 sm:text-6xl">
              Building the future of <span className="text-stone-600 relative inline-block">
                sports access
                <span className="absolute bottom-0 left-0 w-full h-2 bg-palette-dark/40 -z-10 transform -rotate-1 rounded-full"></span>
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Turf Nation is on a mission to connect every player with their perfect pitch. 
              We believe sports should be accessible, organized, and fun for everyone.
            </p>
          </div>
        </div>
        
        {/* Abstract Background pattern */}
        <div className="absolute inset-x-0 -z-10 top-0 transform-gpu overflow-hidden opacity-30" aria-hidden="true">
             <div className="absolute top-0 right-0 w-96 h-96 bg-palette-sub/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute top-20 left-0 w-72 h-72 bg-palette-dark/30 rounded-full blur-3xl -translate-x-1/2"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 -mt-8 mb-24 relative z-10">
        <div className="grid grid-cols-2 gap-4 rounded-3xl bg-gradient-to-br from-white to-palette-cream p-8 shadow-2xl shadow-stone-900/10 md:grid-cols-4 border border-palette-sub/30">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-palette-sub/20 transition-colors duration-300">
              <dt className="text-sm font-bold leading-6 text-stone-500 uppercase tracking-wider">{stat.label}</dt>
              <dd className="order-first text-4xl font-extrabold tracking-tight text-stone-800">{stat.value}</dd>
            </div>
          ))}
        </div>
      </section>

      {/* Story & Mission Split */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-32 py-16 bg-palette-cream rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-palette-sub rounded-2xl opacity-40 transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
            <div className="absolute -inset-4 bg-palette-dark rounded-2xl opacity-25 transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500 delay-75"></div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-xl border border-palette-sub/30 flex items-center justify-center">
               <div className="text-stone-400 font-bold text-xl flex flex-col items-center gap-2">
                 <svg className="w-12 h-12 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                 Our Story Image
               </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl mb-6 flex items-center gap-3">
              <span className="w-12 h-1 bg-palette-dark rounded-full block"></span>
              Our Journey
            </h2>
            <div className="space-y-6 text-lg leading-8 text-stone-600">
              <p>
                Founded in 2024, Turf Nation started with a simple observation: finding a good place to play was harder than the game itself.
              </p>
              <p>
                What began as a spreadsheet of local grounds has grown into a comprehensive platform serving thousands of sports enthusiasts. We bridges the gap between facility owners and players, ensuring that every booking is seamless and reliable.
              </p>
              <p>
                Today, we're more than just a booking app. We're a community of passionate individuals dedicated to promoting an active lifestyle through technology and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-gradient-to-br from-palette-sub/30 via-palette-light to-palette-sub/20 py-24 sm:py-32 relative overflow-hidden isolate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-stone-500 uppercase tracking-wide">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
              Driven by values, focused on you
            </p>
          </div>
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="group relative flex flex-col items-start p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-palette-sub/20 hover:border-palette-dark hover:bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-stone-900/10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-palette-dark group-hover:bg-palette-sub transition-colors duration-300 text-white shadow-lg">
                    <div className="group-hover:text-white transition-colors duration-300">
                    {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold leading-7 text-stone-800 mb-3">{value.title}</h3>
                  <p className="leading-7 text-stone-500 font-medium">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-32 bg-gradient-to-b from-palette-light to-palette-cream rounded-3xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">Meet the Team</h2>
          <p className="mt-4 text-lg text-stone-500">The people behind the platform.</p>
        </div>
        <ul role="list" className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {team.map((person) => (
            <li key={person.name} className="group text-center">
              <div className={`relative mx-auto aspect-[1/1] w-48 rounded-full ${person.image} overflow-hidden mb-6 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl ring-4 ring-white/80 shadow-xl shadow-stone-900/10 flex items-center justify-center`}>
                 <span className="text-stone-800/40 font-bold text-lg mix-blend-overlay">Photo</span>
              </div>
              <h3 className="text-xl font-bold leading-8 tracking-tight text-stone-800">{person.name}</h3>
              <p className="text-base leading-7 text-stone-500 font-medium uppercase text-xs tracking-wider mt-1">{person.role}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
