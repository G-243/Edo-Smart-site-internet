
import Image from "next/image";

export default function SeanceEnCouple() {
  return (
      <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
          Séance en Couple
        </h1>
        <p className="text-lg text-accent-black text-center mb-12">
        Une séance photo pour capturer votre complicité et vos plus beaux instants à deux.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556486/IMG-20250417-WA0084_ezdv0f.jpg"
            alt="Séance en Couple"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556508/IMG-20250417-WA0031_hbrzxy.jpg"
            alt="Séance en Couple"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556507/IMG-20250417-WA0030_g1eijm.jpg"
            alt="Séance en Couple"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          {/* Ajoute d'autres photos ici */}
        </div>
      </section>
  );
}
