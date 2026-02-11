export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-slate-950 pt-28 text-white"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(16,185,129,0.35),transparent_70%)]" />
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-40 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-sky-500/15 blur-3xl" />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,transparent_0,rgba(2,6,23,0.35)_45%,rgba(2,6,23,0.9)_100%)]" />
      </div>

      <div className="container mx-auto  px-6">
        <div className="flex min-h-[calc(100vh-7rem)] items-center py-12 sm:py-16">
          <div className="grid w-full items-center justify-center gap-12 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                Book a turf that fits your schedule.
              </h1>
              <p className="mt-4 text-pretty text-base text-white/70 sm:text-lg">
                Pick your date and time, check availability, and lock it in.
              </p>

              <div className="mt-10">
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl">
                  <form className="grid gap-4 rounded-[1.35rem] bg-white/[0.03] p-4 sm:grid-cols-4 sm:items-end sm:p-5">
                    <label className="grid gap-2 text-left">
                      <span className="text-xs font-medium tracking-wide text-white/70">
                        Date
                      </span>
                      <input
                        type="date"
                        className="h-11 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition [color-scheme:dark] focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/15"
                      />
                    </label>

                    <label className="grid gap-2 text-left">
                      <span className="text-xs font-medium tracking-wide text-white/70">
                        Start time
                      </span>
                      <input
                        type="time"
                        className="h-11 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition [color-scheme:dark] focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/15"
                      />
                    </label>

                    <label className="grid gap-2 text-left">
                      <span className="text-xs font-medium tracking-wide text-white/70">
                        Duration
                      </span>
                      <select className="h-11 w-full appearance-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition [color-scheme:dark] focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/15">
                        <option className="bg-slate-950" value="60">
                          60 minutes
                        </option>
                        <option className="bg-slate-950" value="90">
                          90 minutes
                        </option>
                        <option className="bg-slate-950" value="120">
                          120 minutes
                        </option>
                      </select>
                    </label>

                    <button
                      type="button"
                      className="h-11 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-300 px-5 text-sm font-semibold text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/25"
                    >
                      Check for availability
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right-side visual: turf field preview */}
            <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-emerald-600/40 via-emerald-500/25 to-slate-950">
                  {/* Pitch stripes ddddd */}
                  <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_0,rgba(255,255,255,0.10)_1px,transparent_1px,transparent_72px)] [background-size:72px_100%]" />
                  <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_bottom,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_56px)] [background-size:100%_56px]" />

                  {/* Field lines */}
                  <div className="absolute inset-8 rounded-2xl border border-white/20" />
                  <div className="absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-white/20" />
                  <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />
                  <div className="absolute left-8 top-1/2 h-24 w-32 -translate-y-1/2 rounded-xl border border-white/20" />
                  <div className="absolute right-8 top-1/2 h-24 w-32 -translate-y-1/2 rounded-xl border border-white/20" />

                  {/* Glow + vignette */}
                  <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.12),transparent_55%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0,rgba(2,6,23,0.45)_55%,rgba(2,6,23,0.85)_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
