export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-900/50 py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Turf Nation
            </h2>
            <p className="mt-6 text-lg text-white/70">
              We are dedicated to providing the best turf booking experience for football enthusiasts. Our mission is to make premium quality turfs accessible to everyone.
            </p>
            <p className="mt-4 text-lg text-white/70">
              With state-of-the-art facilities, easy booking system, and competitive pricing, we ensure you have the best playing experience every time.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-emerald-400">50+</div>
                <div className="mt-1 text-sm text-white/60">Turfs Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">10k+</div>
                <div className="mt-1 text-sm text-white/60">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">24/7</div>
                <div className="mt-1 text-sm text-white/60">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10">
                <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Easy Booking</h3>
              <p className="mt-2 text-sm text-white/60">
                Book your turf in just a few clicks. Check real-time availability and secure your slot instantly.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10">
                <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Premium Facilities</h3>
              <p className="mt-2 text-sm text-white/60">
                All our turfs come with top-notch facilities including changing rooms, parking, and refreshments.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10">
                <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Best Pricing</h3>
              <p className="mt-2 text-sm text-white/60">
                Competitive rates with no hidden charges. Get the best value for your money with our transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
