import { Mail } from "lucide-react";

const tiers = [
  {
    title: "Title Sponsor",
    perks: ["Naming rights to the championship", "Logo on all materials", "Speaking slot at Grand Finale", "Exclusive media coverage"],
    investment: "From $50,000",
    highlight: true,
  },
  {
    title: "Education Partner",
    perks: ["Co-branding on training materials", "Access to school network", "Impact reports & data", "CSR recognition"],
    investment: "From $20,000",
    highlight: false,
  },
  {
    title: "Technology Partner",
    perks: ["Digital platform integration", "Brand visibility online", "Innovation showcase", "Student data insights"],
    investment: "From $15,000",
    highlight: false,
  },
  {
    title: "Media Partner",
    perks: ["Exclusive broadcast rights", "Content creation access", "Event coverage", "Social media amplification"],
    investment: "In-kind / Custom",
    highlight: false,
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-asc-light">
      <section className="hero-gradient text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          Partner <span className="gold-text">With Us</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">
          Join a movement transforming numeracy education across Africa. Gain visibility,
          CSR impact, and access to a scalable education model.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Partnership Tiers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`rounded-2xl p-6 shadow-sm flex flex-col ${
                tier.highlight
                  ? "bg-asc-green text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {tier.highlight && (
                <span className="text-xs font-bold bg-asc-gold text-black px-3 py-1 rounded-full self-start mb-3">
                  FEATURED
                </span>
              )}
              <h3 className="text-xl font-bold mb-3">{tier.title}</h3>
              <ul className="space-y-2 text-sm flex-1 mb-4">
                {tier.perks.map((p, i) => (
                  <li key={i} className={`flex items-start gap-2 ${tier.highlight ? "text-green-100" : "text-gray-600"}`}>
                    <span className="mt-1">✓</span> {p}
                  </li>
                ))}
              </ul>
              <div className={`font-bold text-lg mt-auto ${tier.highlight ? "text-asc-gold" : "text-asc-green"}`}>
                {tier.investment}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <Mail className="mx-auto text-asc-green mb-4" size={40} />
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Interested in partnering? Reach out to our partnerships team to discuss opportunities.
          </p>
          <a
            href="mailto:partnerships@africasorobanchampionship.org"
            className="bg-asc-green text-white px-8 py-4 rounded-full font-bold hover:bg-green-800 transition inline-block"
          >
            Contact Partnerships Team
          </a>
        </div>
      </section>
    </div>
  );
}
