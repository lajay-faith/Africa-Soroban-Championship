"use client";

import { useState } from "react";
import { sendContactMessage } from "@/lib/api";
import { Mail, Phone, Globe } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await sendContactMessage(form);
      if (res.success) setSubmitted(true);
      else setError("Something went wrong. Please try again.");
    } catch {
      setError("Could not connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-asc-light">
      <section className="hero-gradient text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Contact <span className="gold-text">Us</span>
        </h1>
        <p className="text-lg max-w-xl mx-auto text-gray-200">
          Have questions? We'd love to hear from you.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-gray-600">
            Whether you're a school, sponsor, parent, or student — reach out and we'll
            connect you with the right team.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-asc-green" size={20} />
              <span>info@africasorobanchampionship.org</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-asc-green" size={20} />
              <span>partnerships@africasorobanchampionship.org</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Globe className="text-asc-green" size={20} />
              <span>africasorobanchampionship.org</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-asc-green mb-2">Message Sent!</h3>
              <p className="text-gray-600">We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asc-green"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asc-green"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asc-green resize-none"
                />
              </div>
              {error && <p className="text-asc-red text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-asc-green text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
