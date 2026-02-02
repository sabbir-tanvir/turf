import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import Hero from "../components/home/Hero";

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export default function HomePage() {
  return (
    <div
      className={`${display.variable} ${body.variable} bg-[#f3f0e8] text-[#1a1a1a]`}
    >
      <Hero />

      <section id="offers" className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#7c6f5a]">
              What we offer
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl">
              Play hard, rest easy.
            </h2>
            <p className="mt-4 text-base text-[#4b3f2d]">
              Dhaka&apos;s premier sports facility designed for casual matches and
              competitive play. We pair world-class turf with thoughtful
              amenities so your squad can focus on the game.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "FIFA-certified 60mm turf",
                description:
                  "High-grip synthetic grass with pro-grade bounce and comfort.",
              },
              {
                title: "Short-pitch cricket arena",
                description:
                  "Ideal for practice sessions, leagues, and friendly matches.",
              },
              {
                title: "Premium lighting",
                description:
                  "Play late with evenly distributed stadium-grade lighting.",
              },
              {
                title: "On-site staff",
                description:
                  "Support for quick check-ins, gear, and match flow.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#d8cbb3] bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#6c5a43]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="amenities"
        className="mx-auto w-full max-w-6xl px-6 pb-16"
      >
        <div className="rounded-[32px] border border-[#d8cbb3] bg-[#1a1a1a] p-10 text-[#f3f0e8]">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#f7b35c]">
                Additional amenities
              </p>
              <h2 className="mt-4 font-[var(--font-display)] text-4xl">
                Comfort beyond the game.
              </h2>
              <p className="mt-4 text-sm text-[#e0d7c6]">
                A social experience built around sports. Stay energized and
                relaxed before and after your match.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Healthy cafe",
                  description:
                    "Fresh snacks, nutritious meals, and premium coffee.",
                },
                {
                  title: "Parking facility",
                  description:
                    "Spacious parking so your crew arrives stress-free.",
                },
                {
                  title: "Locker rooms",
                  description:
                    "Secure storage with quick access for teams.",
                },
                {
                  title: "Spectator zone",
                  description:
                    "Comfortable seating and clear sight lines.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#d8cbb3]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#7c6f5a]">
              Gallery of play
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl">
              Moments on turf.
            </h2>
          </div>
          <button className="rounded-full border border-[#1a1a1a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
            View all
          </button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[0, 1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl border border-[#d8cbb3] bg-[linear-gradient(140deg,_#1a1a1a,_#4b3f2d)] text-white ${
                index === 0 ? "md:col-span-2 md:row-span-2 h-72 md:h-full" : "h-48"
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)]" />
              <div className="relative flex h-full flex-col justify-end p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[#f7b35c]">
                  Turf {index + 1}
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Championship-ready surface
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-[#d8cbb3] bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#7c6f5a]">
              Support and resources
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#4b3f2d]">
              <li>Contact Us</li>
              <li>Refund and Cancellation</li>
              <li>Amenities and Facilities</li>
              <li>Photo Gallery</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#7c6f5a]">
              Information
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#4b3f2d]">
              <li>About Us</li>
              <li>My Account</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#7c6f5a]">
              How to reach us
            </p>
            <p className="mt-4 text-sm font-semibold text-[#1a1a1a]">
              +880 1814-460000
            </p>
            <p className="mt-2 text-sm text-[#4b3f2d]">info.turfnationbd@gmail.com</p>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#7c6f5a]">
              Location
            </p>
            <p className="mt-2 text-sm text-[#4b3f2d]">
              A, 115, 116 Bir Uttam Mir Shawkat Sarak, Dhaka 1208
            </p>
          </div>
        </div>
        <div className="border-t border-[#d8cbb3]">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-[#6c5a43] md:flex-row">
            <p>Copyright 2026 Turf Nation. All rights reserved.</p>
            <div className="flex gap-4 uppercase tracking-[0.2em]">
              <span>Facebook</span>
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



