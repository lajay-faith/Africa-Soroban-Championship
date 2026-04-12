import { Target, Users, Globe, TrendingUp } from "lucide-react";

const objectives = [
  "Improve numeracy proficiency among African children",
  "Promote innovative math learning methods",
  "Identify and nurture young talent",
  "Build a continental network of math excellence",
  "Encourage STEM participation from an early age",
];

const phases = [
  {
    phase: "Phase 1",
    title: "Pilot (Year 1)",
    items: ["Launch in selected countries", "Train teachers", "Conduct school-level competitions"],
    color: "border-asc-green",
  },
  {
    phase: "Phase 2",
    title: "Scale (Years 2–3)",
    items: ["Expand to additional countries", "Introduce national championships"],
    color: "border-asc-gold",
  },
  {
    phase: "Phase 3",
    title: "Continental Integration",
    items: ["Host annual Africa Grand Finale", "Establish ASC as a flagship education event"],
    color: "border-asc-red",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-asc-light">
      {/* Header */}
      <section className="hero-gradient text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          About <span className="gold-text">ASC</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          The Africa Soroban Championship is a continent-wide educational initiative
          powered by the Stellar Soroban methodology.
        </p>
      </section>

      {/* Problem & Solution */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-asc-red">
          <h2 className="text-2xl font-bold mb-4 text-asc-red">The Problem</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Many students struggle with basic numeracy skills</li>
            <li>• Mathematics is perceived as difficult and intimidating</li>
            <li>• Limited access to innovative learning methods</li>
            <li>• Low engagement in STEM pathways</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-asc-green">
          <h2 className="text-2xl font-bold mb-4 text-asc-green">Our Solution</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Abacus-based (Soroban) learning for mental math</li>
            <li>• Gamified competitions to increase motivation</li>
            <li>• Teacher training programs for sustainability</li>
            <li>• Structured competition from school to continental level</li>
          </ul>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Project <span className="text-asc-green">Objectives</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-3 bg-asc-light rounded-xl p-4">
                <Target className="text-asc-green mt-1 shrink-0" size={20} />
                <p className="text-gray-800">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Program <span className="text-asc-green">Structure</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((p) => (
            <div key={p.phase} className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 ${p.color}`}>
              <span className="text-sm font-semibold text-gray-500 uppercase">{p.phase}</span>
              <h3 className="text-xl font-bold mt-1 mb-3">{p.title}</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                {p.items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
