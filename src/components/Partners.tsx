import Link from "next/link";

const partnerTypes = [
  { emoji: "🏢", title: "Title Sponsors", desc: "Naming rights & maximum visibility" },
  { emoji: "🎓", title: "Education Partners", desc: "Schools, NGOs & education bodies" },
  { emoji: "💻", title: "Technology Partners", desc: "Digital platforms & tools" },
  { emoji: "📺", title: "Media Partners", desc: "Coverage & broadcasting" },
];

export default function Partners() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-asc-green font-semibold uppercase text-sm tracking-widest mb-2">
          Partnerships
        </p>
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Partner With <span className="text-asc-green">ASC</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          Gain CSR impact, brand visibility across multiple African countries, and
          long-term partnership opportunities in a scalable education model.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {partnerTypes.map((p) => (
            <div key={p.title} className="bg-asc-light rounded-2xl p-5">
              <p className="text-3xl mb-2">{p.emoji}</p>
              <p className="font-bold">{p.title}</p>
              <p className="text-gray-500 text-sm mt-1">{p.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/partners"
          className="bg-asc-green text-white px-8 py-4 rounded-full font-bold hover:bg-green-800 transition"
        >
          View Partnership Opportunities
        </Link>
      </div>
    </section>
  );
}
