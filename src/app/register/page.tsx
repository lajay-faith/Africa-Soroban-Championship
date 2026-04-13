"use client";

import { useState } from "react";
import { registerParticipant } from "@/lib/api";

type RegistrationType = "student" | "school" | "teacher" | "";

export default function RegisterPage() {
  const [type, setType] = useState<RegistrationType>("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    country: "",
    age: "",
    schoolName: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const payload = {
        fullName: form.fullName,
        email: form.email,
        country: form.country,
        type: type as "student" | "school" | "teacher",
        ...(form.age && { age: Number(form.age) }),
        ...(form.schoolName && { schoolName: form.schoolName }),
        ...(form.phone && { phone: form.phone }),
      };
      const res = await registerParticipant(payload);
      if (res.success) {
        setSubmitted(true);
      } else {
        setError(res.errors?.[0]?.msg || "Something went wrong. Please try again.");
      }
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

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-700">I am registering as a:</label>
              <div className="flex gap-3 flex-wrap">
                {(["student", "school", "teacher"] as RegistrationType[]).map((t) => (
                  <button
                    key={t}
                    type="button"
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
                {[
                  { label: "Full Name", name: "fullName", type: "text", placeholder: "Enter full name" },
                  { label: "Email Address", name: "email", type: "email", placeholder: "email@example.com" },
                  { label: "Country", name: "country", type: "text", placeholder: "e.g. Nigeria, Kenya, Ghana..." },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">{f.label}</label>
                    <input
                      type={f.type}
                      name={f.name}
                      required
                      placeholder={f.placeholder}
                      value={form[f.name as keyof typeof form]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asc-green"
                    />
                  </div>
                ))}

                {type === "student" && (
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">Age</label>
                    <input
                      type="number"
                      name="age"
                      min={5}
                      max={14}
                      placeholder="Age (5–14)"
                      value={form.age}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asc-green"
                    />
                  </div>
                )}

                {(type === "school" || type === "teacher") && (
                  <div>
                    <label className="block text-sm font-semibold mb-1 text-gray-700">School Name</label>
                    <input
                      type="text"
                      name="schoolName"
                      placeholder="Enter school name"
                      value={form.schoolName}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asc-green"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold mb-1 text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+234 000 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-asc-green"
                  />
                </div>

                {error && <p className="text-asc-red text-sm font-medium">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-asc-green text-white py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition mt-2 disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Registration"}
                </button>
              </form>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
