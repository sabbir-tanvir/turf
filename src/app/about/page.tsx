import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Turf Nation",
  description: "Learn more about Turf Nation and our mission to provide the best turf booking experience.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 pt-28">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(16,185,129,0.35),transparent_70%)]" />
          <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>

        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              About Turf Nation
            </h1>
            <p className="mt-6 text-lg text-white/70">
              We're on a mission to make premium turf spaces accessible to everyone who loves the beautiful game.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-slate-900/50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
              <p className="mt-4 text-white/70">
                Founded in 2020, Turf Nation started with a simple idea: making it easy for football enthusiasts to find and book quality turf spaces. What began as a small local operation has grown into the leading turf booking platform in the region.
              </p>
              <p className="mt-4 text-white/70">
                Today, we partner with over 50 premium turf facilities, serving thousands of happy customers who trust us for their sporting needs. Our commitment to quality, transparency, and customer satisfaction remains unchanged.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              <p className="mt-4 text-white/70">
                To revolutionize the way people book and experience turf spaces by providing a seamless, transparent, and reliable platform that connects players with premium facilities.
              </p>
              <p className="mt-4 text-white/70">
                We believe everyone deserves access to quality sports facilities, and we're committed to making that a reality through innovation and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">Our Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-400/10">
                <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Quality</h3>
              <p className="text-sm text-white/60">
                We partner only with facilities that meet our high standards
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-400/10">
                <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Speed</h3>
              <p className="text-sm text-white/60">
                Book in seconds with our streamlined platform
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-400/10">
                <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Community</h3>
              <p className="text-sm text-white/60">
                Building a community of passionate players
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-400/10">
                <svg className="h-8 w-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Support</h3>
              <p className="text-sm text-white/60">
                24/7 customer support for your peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-slate-900/50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">Meet Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "John Doe", role: "Founder & CEO" },
              { name: "Jane Smith", role: "Head of Operations" },
              { name: "Mike Johnson", role: "Tech Lead" },
              { name: "Sarah Williams", role: "Customer Success" },
            ].map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl"
              >
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-300" />
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-white/60">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
