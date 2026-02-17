"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="bg-slate-950 py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="mt-10 space-y-6">
              {/* Contact Info */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10">
                  <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="mt-1 text-sm text-white/60">info@turfnation.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10">
                  <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <p className="mt-1 text-sm text-white/60">+1 (234) 567-890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10">
                  <svg className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Office</h3>
                  <p className="mt-1 text-sm text-white/60">
                    123 Sports Avenue, City Center<br />New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/15"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/15"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/70">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/15"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400/50 focus:ring-4 focus:ring-emerald-400/15"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-emerald-400 to-teal-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
