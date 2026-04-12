"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/compete", label: "Compete" },
  { href: "/partners", label: "Partners" },
  { href: "/register", label: "Register" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-asc-dark text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-black text-xl">
          <span className="text-asc-gold">🧮</span>
          <span>
            <span className="text-asc-gold">ASC</span>
            <span className="hidden sm:inline text-white font-medium text-sm ml-2 opacity-70">
              Africa Soroban Championship
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium hover:text-asc-gold transition"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/register"
            className="bg-asc-green text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-green-700 transition"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-asc-dark border-t border-gray-800 px-6 pb-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium hover:text-asc-gold transition"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
