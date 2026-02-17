"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email Us",
    detail: "support@turfnation.com",
    description: "Send us an email anytime",
    link: "mailto:support@turfnation.com",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Call Us",
    detail: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm",
    link: "tel:+15551234567",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Visit Us",
    detail: "123 Sports Avenue",
    description: "Downtown, City 12345",
    link: "#",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Working Hours",
    detail: "24/7 Booking",
    description: "Support: 8am - 6pm",
    link: "#",
  },
];

const faqs = [
  {
    question: "How do I book a turf?",
    answer: "Browse our turfs, select your preferred facility, choose a time slot, and complete the booking with instant confirmation.",
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel up to 24 hours before your scheduled time for a full refund.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and digital payment methods.",
  },
  {
    question: "Is there a membership program?",
    answer: "Yes! Join our membership program for exclusive discounts and priority booking.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-palette-cream via-palette-light to-palette-cream">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24 text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-stone-800 sm:text-6xl">
              Get in <span className="text-stone-600 relative inline-block">
                Touch
                <span className="absolute bottom-0 left-0 w-full h-2 bg-palette-dark/40 -z-10 transform -rotate-1 rounded-full"></span>
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
        
        {/* Abstract Background pattern */}
        <div className="absolute inset-x-0 -z-10 top-0 transform-gpu overflow-hidden opacity-25" aria-hidden="true">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-palette-sub/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-palette-dark/30 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 -mt-10 mb-24 relative z-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.link}
              className="group relative flex flex-col items-center p-6 rounded-2xl bg-white border border-palette-sub/30 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:border-palette-dark"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-palette-dark text-white group-hover:bg-palette-sub transition-colors duration-300 shadow-lg">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-1">{info.title}</h3>
              <p className="text-sm font-semibold text-stone-600 mb-1">{info.detail}</p>
              <p className="text-xs text-stone-500 text-center">{info.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form & Info Split */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-palette-sub/20">
            <h2 className="text-2xl font-bold text-stone-800 mb-2 flex items-center gap-3">
              <span className="w-10 h-1 bg-palette-dark rounded-full block"></span>
              Send Message
            </h2>
            <p className="text-stone-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-palette-sub bg-palette-cream/30 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-palette-dark focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-palette-sub bg-palette-cream/30 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-palette-dark focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-palette-sub bg-palette-cream/30 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-palette-dark focus:border-transparent transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-stone-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-palette-sub bg-palette-cream/30 text-stone-800 focus:outline-none focus:ring-2 focus:ring-palette-dark focus:border-transparent transition-all cursor-pointer"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-palette-sub bg-palette-cream/30 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-palette-dark focus:border-transparent transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-palette-dark text-white font-semibold py-4 px-6 rounded-xl hover:bg-palette-sub transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-2 flex items-center gap-3">
                <span className="w-10 h-1 bg-palette-dark rounded-full block"></span>
                Frequently Asked
              </h2>
              <p className="text-stone-600">Quick answers to common questions.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-palette-cream/50 rounded-2xl p-6 border border-palette-sub/30 hover:border-palette-dark transition-all duration-300 hover:shadow-lg group"
                >
                  <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-stone-600 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-palette-dark rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
              <p className="text-white/80 mb-4">Can't find the answer you're looking for? Please chat with our friendly team.</p>
              <a
                href="mailto:support@turfnation.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-palette-dark font-semibold py-3 px-6 rounded-xl hover:bg-palette-cream transition-colors duration-300"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Start Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Find Us</h2>
            <p className="text-stone-600">Visit our office or any of our partner facilities</p>
          </div>
          <div className="aspect-[16/9] max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <div className="w-full h-full bg-gradient-to-br from-palette-sub/40 to-palette-light flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="text-stone-500 font-medium">Map integration goes here</p>
                <p className="text-stone-400 text-sm mt-1">123 Sports Avenue, Downtown, City 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
