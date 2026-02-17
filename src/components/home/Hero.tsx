export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-palette-cream via-palette-light to-palette-cream pt-28 text-stone-800"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(182,174,159,0.25),transparent_70%)]" />
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-palette-sub/20 blur-3xl" />
        <div className="absolute -bottom-40 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-palette-dark/10 blur-3xl" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0,rgba(251,243,209,0.15)_45%,rgba(251,243,209,0.5)_100%)]" />
      </div>

      <div className="container mx-auto  px-6">
        <div className="flex min-h-[calc(100vh-7rem)] items-center py-12 sm:py-16">
          <div className="grid w-full items-center justify-center gap-12 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                Book a turf that fits your schedule.
              </h1>
              <p className="mt-4 text-pretty text-base text-stone-600 sm:text-lg">
                Pick your date and time, check availability, and lock it in.
              </p>

              <div className="mt-10">
                <div className="rounded-3xl border border-palette-sub bg-white/80 p-2 shadow-lg shadow-stone-900/5 backdrop-blur-sm">
                  <form className="grid gap-4 rounded-[1.35rem] bg-palette-cream/30 p-4 sm:grid-cols-4 sm:items-end sm:p-5">
                    <label className="grid gap-2 text-left">
                      <span className="text-xs font-medium tracking-wide text-stone-600">
                        Date
                      </span>
                      <input
                        type="date"
                        className="h-11 w-full rounded-2xl border border-palette-sub bg-white px-4 text-sm text-stone-800 outline-none transition focus:border-palette-dark focus:ring-4 focus:ring-palette-dark/15"
                      />
                    </label>

                    <label className="grid gap-2 text-left">
                      <span className="text-xs font-medium tracking-wide text-stone-600">
                        Start time
                      </span>
                      <input
                        type="time"
                        className="h-11 w-full rounded-2xl border border-palette-sub bg-white px-4 text-sm text-stone-800 outline-none transition focus:border-palette-dark focus:ring-4 focus:ring-palette-dark/15"
                      />
                    </label>

                    <label className="grid gap-2 text-left">
                      <span className="text-xs font-medium tracking-wide text-stone-600">
                        Duration
                      </span>
                      <select className="h-11 w-full appearance-none rounded-2xl border border-palette-sub bg-white px-4 text-sm text-stone-800 outline-none transition focus:border-palette-dark focus:ring-4 focus:ring-palette-dark/15">
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
                      className="h-11 rounded-2xl bg-palette-dark px-5 text-sm font-semibold text-white shadow-md shadow-stone-900/10 transition hover:bg-stone-700 focus:outline-none focus:ring-4 focus:ring-palette-dark/25"
                    >
                      Check for availability
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right-side visual: turf field preview */}
            <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-palette-sub bg-white/80 p-2 shadow-lg shadow-stone-900/5 backdrop-blur-sm">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-palette-sub/60 via-palette-light to-palette-cream">
                  {/* Pitch stripes */}
                  <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(0,0,0,0.08)_0,rgba(0,0,0,0.08)_1px,transparent_1px,transparent_72px)] [background-size:72px_100%]" />
                  <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_bottom,rgba(0,0,0,0.06)_0,rgba(0,0,0,0.06)_1px,transparent_1px,transparent_56px)] [background-size:100%_56px]" />

                  {/* Field lines */}
                  <div className="absolute inset-8 rounded-2xl border border-palette-dark/30" />
                  <div className="absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-palette-dark/30" />
                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-palette-dark/30" />
                  <div className="absolute left-8 top-1/2 h-24 w-32 -translate-y-1/2 rounded-xl border border-palette-dark/30" />
                  <div className="absolute right-8 top-1/2 h-24 w-32 -translate-y-1/2 rounded-xl border border-palette-dark/30" />

                  {/* Glow + vignette */}
                  <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-palette-dark/10 blur-3xl" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(182,174,159,0.15),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(197,199,188,0.20),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0,rgba(251,243,209,0.25)_55%,rgba(251,243,209,0.50)_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
