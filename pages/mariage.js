import Layout from "../components/Layout";
import Image from "next/image";

export default function Mariage() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
          Photos Mariage
        </h1>
        <p className="text-lg text-accent-black text-center mb-12">
        Immortalisez l’amour et la complicité de votre journée de mariage avec des images pleines d’émotion.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724128/IMG-20251029-WA0166_xsqm2r.jpg"
            alt="Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081011/1W9A9302_-_Copie_a8iutq.jpg"
            alt="Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080996/STR_9610_pbgmsi.jpg"
            alt="Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080995/STR_9396_thbvg4.jpg"
            alt="Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080994/STR_9611_xkrrem.jpg"
            alt="Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080994/STR_9323_q0brpx.jpg"
            alt="Mariage"
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
