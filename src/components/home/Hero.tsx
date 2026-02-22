export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-palette-moss via-palette-gray to-palette-moss pt-28 text-stone-800"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(106,115,55,0.25),transparent_70%)]" />
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-palette-green/20 blur-3xl" />
        <div className="absolute -bottom-40 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-palette-moss-dark/15 blur-3xl" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0,rgba(146,154,104,0.15)_45%,rgba(146,154,104,0.5)_100%)]" />
        
        {/* Decorative floating shapes */}
        <div className="absolute top-1/4 left-10 h-16 w-16 rounded-full bg-palette-green/20 blur-2xl" />
        <div className="absolute top-1/3 right-20 h-24 w-24 rounded-full bg-palette-moss-dark/15 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-20 w-20 rounded-full bg-palette-gray/30 blur-2xl" />
        
        {/* Geometric decorative elements */}
        <div className="absolute top-20 right-1/4 h-32 w-32 rotate-45 rounded-3xl border-2 border-palette-green/20" />
        <div className="absolute bottom-32 left-1/3 h-24 w-24 -rotate-12 rounded-2xl border-2 border-palette-moss/15" />
        
        {/* Abstract circles */}
        <div className="absolute top-1/2 left-[15%] h-3 w-3 rounded-full bg-palette-moss-dark/30" />
        <div className="absolute top-[35%] right-[20%] h-2 w-2 rounded-full bg-palette-green/40" />
        <div className="absolute bottom-[30%] right-[35%] h-4 w-4 rounded-full bg-palette-moss-dark/20" />
        
        {/* Decorative lines */}
        <div className="absolute top-1/3 left-0 h-px w-32 bg-gradient-to-r from-transparent via-palette-green/30 to-transparent" />
        <div className="absolute bottom-1/3 right-0 h-px w-40 bg-gradient-to-l from-transparent via-palette-moss-dark/25 to-transparent" />
      </div>

      <div className="container mx-auto  px-6">
        <div className="flex min-h-[calc(100vh-7rem)] items-center py-12 sm:py-16">
          <div className="grid w-full items-center justify-center gap-12 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
              {/* Decorative badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-palette-green bg-white/80 px-4 py-2 text-sm font-medium text-stone-700 shadow-sm backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-palette-moss-dark/60">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-palette-moss-dark/60"></span>
                </span>
                Available 24/7 • Easy Booking
              </div>
              
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                Book a turf that fits your schedule.
              </h1>
              <p className="mt-4 text-pretty text-base text-stone-600 sm:text-lg">
                Pick your date and time, check availability, and lock it in.
              </p>

              <div className="mt-10">
                <div className="rounded-3xl border border-palette-green bg-white/90 p-2 shadow-lg shadow-stone-900/5 backdrop-blur-sm">
                  <form className="grid gap-4 rounded-[1.35rem] bg-palette-gray/20 p-4 sm:grid-cols-4 sm:items-end sm:p-5">
                    <label className="grid gap-2 text-left">
                      <span className="text-xs font-medium tracking-wide text-stone-600">
                        Date
                      </span>
                      <input
                        type="date"
                        className="h-11 w-full rounded-2xl border border-palette-moss bg-white px-4 text-sm text-stone-800 outline-none transition focus:border-palette-moss-dark focus:ring-4 focus:ring-palette-moss-dark/15"
                      />
                    </label>

                    <label className="grid gap-2 text-left">
                      <span className="text-xs font-medium tracking-wide text-stone-600">
                        Start time
                      </span>
                      <input
                        type="time"
                        className="h-11 w-full rounded-2xl border border-palette-moss bg-white px-4 text-sm text-stone-800 outline-none transition focus:border-palette-moss-dark focus:ring-4 focus:ring-palette-moss-dark/15"
                      />
                    </label>

                    <label className="grid gap-2 text-left">
                      <span className="text-xs font-medium tracking-wide text-stone-600">
                        Duration
                      </span>
                      <select className="h-11 w-full appearance-none rounded-2xl border border-palette-moss bg-white px-4 text-sm text-stone-800 outline-none transition focus:border-palette-moss-dark focus:ring-4 focus:ring-palette-moss-dark/15">
                        <option value="60">
                          60 minutes
                        </option>
                        <option value="90">
                          90 minutes
                        </option>
                        <option value="120">
                          120 minutes
                        </option>
                      </select>
                    </label>

                    <button
                      type="button"
                      className="h-11 rounded-2xl bg-palette-moss-dark px-5 text-sm font-semibold text-white shadow-md shadow-stone-900/10 transition hover:bg-palette-brown focus:outline-none focus:ring-4 focus:ring-palette-moss-dark/25"
                    >
                      Check for availability
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right-side visual: turf field preview */}
            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
              {/* Decorative floating stats */}
              <div className="absolute -top-4 -right-4 z-10 rounded-2xl border border-palette-green bg-white/95 px-4 py-3 shadow-lg shadow-stone-900/10 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-palette-moss-dark/10">
                    <svg className="h-5 w-5 text-palette-moss-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-800">50+ Turfs</div>
                    <div className="text-xs text-stone-600">Premium Quality</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative badge bottom */}
              <div className="absolute -bottom-4 -left-4 z-10 rounded-2xl border border-palette-green bg-white/95 px-4 py-3 shadow-lg shadow-stone-900/10 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-palette-moss-dark/10">
                    <svg className="h-5 w-5 text-palette-moss-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-stone-800">24/7 Available</div>
                    <div className="text-xs text-stone-600">Book Anytime</div>
                  </div>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-3xl border border-palette-green bg-white/90 p-2 shadow-lg shadow-stone-900/5 backdrop-blur-sm">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-palette-green/70 via-palette-moss to-palette-gray">
                  {/* Pitch stripes */}
                  <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(0,0,0,0.08)_0,rgba(0,0,0,0.08)_1px,transparent_1px,transparent_72px)] [background-size:72px_100%]" />
                  <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_bottom,rgba(0,0,0,0.06)_0,rgba(0,0,0,0.06)_1px,transparent_1px,transparent_56px)] [background-size:100%_56px]" />

                  {/* Field lines */}
                  <div className="absolute inset-8 rounded-2xl border-2 border-white/40" />
                  <div className="absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-white/40" />
                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/40" />
                  <div className="absolute left-8 top-1/2 h-24 w-32 -translate-y-1/2 rounded-xl border-2 border-white/40" />
                  <div className="absolute right-8 top-1/2 h-24 w-32 -translate-y-1/2 rounded-xl border-2 border-white/40" />

                  {/* Glow + vignette */}
                  <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-palette-moss-dark/15 blur-3xl" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(106,115,55,0.2),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(146,154,104,0.25),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0,rgba(75,83,32,0.15)_55%,rgba(43,49,10,0.25)_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
