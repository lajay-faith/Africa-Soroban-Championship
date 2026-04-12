import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-asc-dark text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-asc-gold font-semibold uppercase text-sm tracking-widest mb-3">
          Join the Movement
        </p>
        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Build a Numerically Empowered
          <br />
          <span className="text-asc-gold">Generation</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Whether you're a student, school, teacher, or investor — there's a place for you
          in the Africa Soroban Championship.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="bg-asc-gold text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition"
          >
            Register Now
          </Link>
          <Link
            href="/partners"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
