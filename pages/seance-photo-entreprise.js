import Layout from "../components/Layout";
import Image from "next/image";

export default function SeancePhotoEntreprise() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
          Séance Photo Entreprise
        </h1>
        <p className="text-lg text-accent-black text-center mb-12">
        Des portraits élégants et professionnels qui reflètent votre sérieux, votre confiance et l’image de votre entreprise.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081010/IMG_9090_iqbu5l.jpg"
            alt="Séance Photo Entreprise"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <div className="flex flex-col gap-6">
           <img
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081009/IMG_8992_slvjq7.jpg"
            alt="Séance Photo Entreprise"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
           />
           <img
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081007/IMG_8980_cftk6r.jpg"
            alt="Séance Photo Entreprise"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
           />
         </div>
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081004/IMG_9569_ev20bh.jpg"
            alt="Séance Photo Entreprise"
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
