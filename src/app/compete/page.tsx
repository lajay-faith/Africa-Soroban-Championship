import { Trophy, School, MapPin, Globe } from "lucide-react";
import Link from "next/link";

const levels = [
  {
    icon: School,
    level: "Level 1",
    title: "School Championship",
    description: "Students compete within their school. Top performers advance to the regional round.",
    color: "bg-green-50 border-asc-green text-asc-green",
  },
  {
    icon: MapPin,
    level: "Level 2",
    title: "Regional Championship",
    description: "School champions compete at the regional level across districts and provinces.",
    color: "bg-yellow-50 border-asc-gold text-yellow-600",
  },
  {
    icon: Trophy,
    level: "Level 3",
    title: "National Championship",
    description: "Regional winners represent their areas at the national finals.",
    color: "bg-red-50 border-asc-red text-asc-red",
  },
  {
    icon: Globe,
    level: "Level 4",
    title: "Continental Grand Finale",
    description: "National champions from across Africa compete at the Africa Grand Finale.",
    color: "bg-purple-50 border-purple-500 text-purple-600",
  },
];

const categories = [
  { age: "5–7 years", category: "Junior Sprouts" },
  { age: "8–10 years", category: "Rising Stars" },
  { age: "11–12 years", category: "Champions" },
  { age: "13–14 years", category: "Elite" },
];

export default function CompetePage() {
  return (
    <div className="min-h-screen bg-asc-light">
      <section className="hero-gradient text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          The <span className="gold-text">Competition</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">
          Four levels of competition — from your school to the entire continent.
        </p>
      </section>

      {/* Competition Levels */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Competition Levels</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {levels.map((l) => (
            <div key={l.level} className={`rounded-2xl p-6 border-l-4 shadow-sm bg-white ${l.color.split(" ")[2]}`}>
              <div className="flex items-center gap-3 mb-3">
                <l.icon className={l.color.split(" ")[2]} size={28} />
                <div>
                  <span className="text-xs font-semibold uppercase text-gray-400">{l.level}</span>
                  <h3 className="text-xl font-bold">{l.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{l.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Age Categories */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Age Categories</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((c) => (
              <div key={c.category} className="bg-asc-light rounded-xl p-5 flex justify-between items-center">
                <div>
                  <p className="font-bold text-lg">{c.category}</p>
                  <p className="text-gray-500 text-sm">{c.age}</p>
                </div>
                <Trophy className="text-asc-gold" size={28} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to compete?</h2>
        <p className="text-gray-600 mb-8">Register your school or student today.</p>
        <Link
          href="/register"
          className="bg-asc-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-800 transition"
        >
          Register Now
        </Link>
      </section>
    </div>
  );
}
