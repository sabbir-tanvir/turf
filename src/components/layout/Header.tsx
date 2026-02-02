"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center animate-pulse-glow">
              <span className="text-white font-bold text-xl">TN</span>
            </div>
            <h1 className="text-2xl font-bold text-white">
              <span className="gradient-text">Turf</span> Nation
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 animate-fade-in">
            {["Home", "Turfs", "About", "Contact"].map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-[#00d4aa] font-medium transition-all duration-300 hover:scale-110 relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00d4aa] to-[#6c5ce7] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4 animate-slide-in-right">
            <button className="px-5 py-2 text-white font-medium hover:text-[#00d4aa] transition-all duration-300 hover:scale-105">
              Login
            </button>
            <button className="px-6 py-2.5 gradient-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#00d4aa]/30 transition-all duration-300 hover:scale-105 btn-shine">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="glass rounded-2xl p-4 space-y-3">
            {["Home", "Turfs", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white/80 hover:text-[#00d4aa] font-medium py-2 px-4 rounded-lg hover:bg-white/10 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/20 flex gap-3">
              <button className="flex-1 py-2 text-white font-medium border border-white/30 rounded-lg">
                Login
              </button>
              <button className="flex-1 py-2 gradient-primary text-white font-semibold rounded-lg">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
