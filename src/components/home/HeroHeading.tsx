export default function HeroHeading() {
  return (
    <div className="relative z-10 max-w-xl text-right">
      <p className="text-xs uppercase tracking-[0.6em] text-[#cfe2cc]">
        Get Ready To
      </p>
      <h1 className="mt-3 font-[var(--font-display)] text-4xl uppercase leading-tight tracking-[0.2em] md:text-5xl">
        Experience your next destination for
        <span className="block text-[#9be29a]">sports and beyond</span>
      </h1>
      <div className="mt-6 flex items-center justify-end gap-3">
        <span className="h-[2px] w-12 bg-white/70" />
        <span className="text-xs uppercase tracking-[0.4em] text-white/70">
          Bookings open soon
        </span>
      </div>
    </div>
  );
}
