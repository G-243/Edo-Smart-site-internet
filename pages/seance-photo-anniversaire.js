
import Image from "next/image";

export default function SeancePhotoAnniv() {
  return (
      <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
          Séance Photo Anniversaire
        </h1>
        <p className="text-lg text-accent-black text-center mb-12">
        Capturez la joie, les sourires et les instants uniques qui font de votre anniversaire un souvenir inoubliable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556495/IMG-20250417-WA0059_jh4qtw.jpg"
            alt="Séance Photo Anniversaire"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556487/IMG-20250417-WA0077_k8gq9p.jpg"
            alt="Séance Photo Anniversaire"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          {/* Ajoute d'autres photos ici */}
        </div>
      </section>
  );
}
