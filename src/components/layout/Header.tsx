"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = ["Home", "Turfs", "About", "Contact"] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto  px-4 sm:px-6">
        <div
          className={`rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-slate-950/75 shadow-lg shadow-black/20 backdrop-blur-xl"
              : "border-white/10 bg-slate-950/45 backdrop-blur-xl"
          }`}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="Turf Nation home"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-300 shadow-[0_0_0_1px_rgba(255,255,255,0.10)]">
                <span className="text-base font-bold tracking-wide text-slate-950">
                  TN
                </span>
              </div>
              <div className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                Turf <span className="text-white/70">Nation</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-7 md:flex">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group relative text-sm font-semibold text-white/75 transition-colors hover:text-white"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-emerald-300 to-sky-300 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Desktop Auth */}
            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/login"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-4 text-sm font-semibold text-white/90 transition hover:bg-white/[0.07] focus:outline-none focus:ring-4 focus:ring-emerald-400/20"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 px-4 text-sm font-semibold text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.10)] transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/25"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] p-2 text-white/90 transition hover:bg-white/[0.07] hover:text-white md:hidden"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`overflow-hidden transition-all duration-500 md:hidden ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="space-y-2 px-4 pb-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/[0.07] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="/login"
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-sm font-semibold text-white/90 transition hover:bg-white/[0.07]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 text-sm font-semibold text-slate-950 transition hover:brightness-110"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

