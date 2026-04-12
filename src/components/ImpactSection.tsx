const kpis = [
  { emoji: "👩‍🎓", label: "Students Trained" },
  { emoji: "📈", label: "Test Score Improvement" },
  { emoji: "🏫", label: "Participating Schools" },
  { emoji: "⚖️", label: "Gender Inclusion Rate" },
  { emoji: "🏅", label: "Competition Participants" },
  { emoji: "👩‍🏫", label: "Teacher Training Completion" },
];

export default function ImpactSection() {
  return (
    <section className="bg-asc-green text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-asc-gold font-semibold uppercase text-sm tracking-widest mb-2">
          Impact
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
          Measurable Change Across Africa
        </h2>
        <p className="text-center text-green-200 max-w-xl mx-auto mb-12">
          Every metric we track reflects a child's improved future. Here's what we measure.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {kpis.map((k) => (
            <div key={k.label} className="bg-white/10 rounded-2xl p-5 text-center hover:bg-white/20 transition">
              <p className="text-3xl mb-2">{k.emoji}</p>
              <p className="font-semibold text-sm">{k.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
