import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-gradient text-white min-h-[90vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block bg-asc-gold text-black text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
          🌍 Continent-Wide Initiative
        </span>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          Africa <span className="text-asc-gold">Soroban</span>
          <br />
          Championship
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transforming numeracy education across Africa through abacus-based mental math
          training and competitive engagement — from school to continental level.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="bg-asc-gold text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition"
          >
            Register Now
          </Link>
          <Link
            href="/about"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>
        </div>

        {/* Flags strip */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 text-2xl opacity-70">
          {["🇳🇬", "🇰🇪", "🇬🇭", "🇿🇦", "🇪🇹", "🇹🇿", "🇺🇬", "🇸🇳", "🇨🇮", "🇲🇦"].map((flag) => (
            <span key={flag} className="text-3xl">{flag}</span>
          ))}
        </div>
        <p className="text-gray-400 text-sm mt-3">Expanding across Africa</p>
      </div>
    </section>
  );
}
