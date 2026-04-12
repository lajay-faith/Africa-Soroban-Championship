import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-asc-dark text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <p className="text-white font-black text-xl mb-2">
            <span className="text-asc-gold">🧮 ASC</span>
          </p>
          <p className="text-sm leading-relaxed max-w-xs">
            Africa Soroban Championship — transforming numeracy education across Africa
            through competitive mental math.
          </p>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/compete" className="hover:text-white transition">Compete</Link></li>
            <li><Link href="/partners" className="hover:text-white transition">Partners</Link></li>
            <li><Link href="/register" className="hover:text-white transition">Register</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:info@africasorobanchampionship.org" className="hover:text-white transition">
                info@africasorobanchampionship.org
              </a>
            </li>
            <li>
              <a href="mailto:partnerships@africasorobanchampionship.org" className="hover:text-white transition">
                partnerships@...
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
        <p>© {new Date().getFullYear()} Africa Soroban Championship. All rights reserved.</p>
        <p className="text-gray-600">Empowering Africa, one calculation at a time.</p>
      </div>
    </footer>
  );
}
