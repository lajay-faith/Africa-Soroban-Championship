"use client";

import { useState } from "react";

type RegistrationType = "student" | "school" | "teacher" | "";

export default function RegisterPage() {
  const [type, setType] = useState<RegistrationType>("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-asc-light">
      <section className="hero-gradient text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          <span className="gold-text">Register</span> for ASC
        </h1>
        <p className="text-lg max-w-xl mx-auto text-gray-200">
          Join thousands of students and schools across Africa.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-16">
        {submitted ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-2 text-asc-green">Registration Received!</h2>
            <p className="text-gray-600">
              Thank you for registering. Our team will reach out to you shortly with next steps.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Registration Form</h2>

            {/* Type selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-700">I am registering as a:</label>
              <div className="flex gap-3 flex-wrap">
                {(["student", "school", "teacher"] as RegistrationType[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`px-5 py-2 rounded-full border-2 font-semibold capitalize transition ${
                      type === t
                        ? "bg-asc-green text-white border-asc-green"
                        : "border-gray-300 text-gray-600 hover:border-asc-green"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {type && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asc-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asc-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Country</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nigeria, Kenya, Ghana..."
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asc-green"
                  />
                </div>
                {type === "student" && (
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Age</label>
                    <input
                      type="number"
                      required
                      min={5}
                      max={14}
                      placeholder="Age (5–14)"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asc-green"
                    />
                  </div>
                )}
                {(type === "school" || type === "teacher") && (
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">School Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter school name"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asc-green"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+234 000 000 0000"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asc-green"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-asc-green text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition mt-2"
                >
                  Submit Registration
                </button>
              </form>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
