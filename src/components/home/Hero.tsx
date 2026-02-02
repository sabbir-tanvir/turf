import HeroHeading from "./HeroHeading";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#0e1410] text-white">
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-0 h-full w-[60%] -skew-x-[14deg] bg-[linear-gradient(135deg,_#0f0f0f_0%,_#151515_55%,_#2a2a2a_100%)] opacity-95" />
        <div className="absolute left-[32%] top-0 h-full w-[28%] -skew-x-[14deg] bg-[linear-gradient(135deg,_#0f1e2b_0%,_#1f3c4d_60%,_#385b6c_100%)] opacity-90" />
        <div className="absolute left-[56%] top-0 h-full w-[40%] -skew-x-[14deg] bg-[linear-gradient(135deg,_#0e0d0b_0%,_#2a1f17_55%,_#3b2b1d_100%)] opacity-95" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.7),_transparent_35%,_transparent_70%,_rgba(0,0,0,0.65))]" />
      </div>

      <div className="relative border-b border-[#1f2a1f] bg-[#195f2f]">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d6e8d5]">
            Turf Nation
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#7dd67a] bg-[#1c3a1d] shadow-[0_0_30px_rgba(125,214,122,0.5)]" />
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-[#9be29a] bg-[#143015] text-center text-xs font-semibold uppercase tracking-[0.2em]">
              Turf
              <br />
              Nation
            </div>
          </div>
          <button className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white">
            Menu
            <span className="flex flex-col gap-1">
              <span className="h-[2px] w-5 bg-white" />
              <span className="h-[2px] w-5 bg-white" />
            </span>
          </button>
        </header>
      </div>

      <section className="relative mx-auto flex min-h-[520px] w-full max-w-6xl items-center justify-end px-6 pb-24 pt-14">
        <div className="absolute left-8 top-1/2 hidden h-[320px] w-[520px] -translate-y-1/2 md:block">
          <p className="rotate-[-70deg] text-4xl font-[var(--font-display)] uppercase tracking-[0.25em] text-white/80">
            Football
          </p>
          <p className="absolute right-0 top-12 rotate-[-70deg] text-xl font-[var(--font-display)] uppercase tracking-[0.35em] text-white/70">
            Billiard
          </p>
          <p className="absolute -bottom-10 left-6 rotate-[-70deg] text-xl font-[var(--font-display)] uppercase tracking-[0.35em] text-white/60">
            Cricket
          </p>
        </div>

        <HeroHeading />
      </section>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16">
        <div className="rounded-[22px] border-2 border-[#f06620] bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
          <form className="grid gap-4 md:grid-cols-[1.1fr_1.1fr_auto]">
            <label className="flex items-center gap-3 rounded-2xl border border-[#e6e6e6] bg-white px-4 py-3 text-sm font-semibold text-[#1a1a1a]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d9d9] text-base">
                ⚽
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6e6e6e]">
                  What are you playing?
                </p>
                <p className="text-base font-semibold">Pick a game</p>
              </div>
            </label>
            <label className="flex items-center gap-3 rounded-2xl border border-[#e6e6e6] bg-white px-4 py-3 text-sm font-semibold text-[#1a1a1a]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d9d9] text-base">
                📅
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6e6e6e]">
                  When are you playing?
                </p>
                <p className="text-base font-semibold">Pick a date</p>
              </div>
            </label>
            <button className="flex h-full items-center justify-center gap-2 rounded-2xl bg-[#1b6b35] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_20px_rgba(27,107,53,0.35)]">
              <span className="text-lg">🔍</span>
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
