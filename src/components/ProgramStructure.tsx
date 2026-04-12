import { School, MapPin, Trophy, Globe } from "lucide-react";

const levels = [
  { icon: School, label: "School Level", color: "text-asc-green" },
  { icon: MapPin, label: "Regional Level", color: "text-yellow-500" },
  { icon: Trophy, label: "National Level", color: "text-asc-red" },
  { icon: Globe, label: "Continental Finale", color: "text-purple-500" },
];

export default function ProgramStructure() {
  return (
    <section className="py-20 px-6 bg-asc-light">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-asc-green font-semibold uppercase text-sm tracking-widest mb-2">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
          From Your School to the <span className="text-asc-green">Continent</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {levels.map((l, i) => (
            <div key={l.label} className="flex items-center gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center w-44">
                <l.icon className={`mx-auto mb-2 ${l.color}`} size={36} />
                <p className="font-bold text-sm">{l.label}</p>
              </div>
              {i < levels.length - 1 && (
                <span className="text-2xl text-gray-300 hidden md:block">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-black text-asc-green mb-1">🧮</p>
            <p className="font-bold">Soroban Training Kits</p>
            <p className="text-gray-500 text-sm">Abacus + learning materials</p>
          </div>
          <div>
            <p className="text-3xl font-black text-asc-green mb-1">📋</p>
            <p className="font-bold">Teacher Certification</p>
            <p className="text-gray-500 text-sm">Structured training programs</p>
          </div>
          <div>
            <p className="text-3xl font-black text-asc-green mb-1">🏆</p>
            <p className="font-bold">Student Assessment</p>
            <p className="text-gray-500 text-sm">Pre/post evaluation tools</p>
          </div>
        </div>
      </div>
    </section>
  );
}
