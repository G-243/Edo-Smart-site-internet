import Layout from "../components/Layout";
import Image from "next/image";

export default function SeancePreDot() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
          Séance Pré-Dot
        </h1>
        <p className="text-lg text-accent-black text-center mb-12">
        Célébrez la richesse de vos traditions à travers des clichés empreints d’émotion et de beauté.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556500/IMG-20250417-WA0052_iq7lth.jpg"
            alt="Séance Pre-Dot"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556490/IMG-20250417-WA0079_b9tcyb.jpg"
            alt="Séance Pre-Dot"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          {/* Ajoute d'autres photos ici */}
        </div>
      </section>
    </Layout>
  );
}
