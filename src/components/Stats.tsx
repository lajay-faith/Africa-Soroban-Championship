const stats = [
  { value: "5–14", label: "Target Age Range", suffix: " yrs" },
  { value: "3", label: "Pilot Countries", suffix: "+" },
  { value: "10", label: "Countries in 3 Years", suffix: "+" },
  { value: "4", label: "Competition Levels", suffix: "" },
];

export default function Stats() {
  return (
    <section className="bg-asc-dark text-white py-14 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl md:text-5xl font-black text-asc-gold">
              {s.value}
              <span className="text-2xl">{s.suffix}</span>
            </p>
            <p className="text-gray-400 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
