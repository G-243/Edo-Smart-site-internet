import React, { useState } from "react";
import ImageModal from "../components/ImageModal"; // adapte le chemin si nécessaire

export default function SeancePhotoDefense() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556505/IMG-20250417-WA0047_muxfn1.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080987/_I0A7694_koifij.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080986/_I0A7688_fviqzx.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080986/_I0A7675-1_ungxoi.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080982/557A2175_ndh390.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080981/557A2145_poj9bb.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080979/_I0A7676_n92hzm.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080979/_I0A7670_vkpbkk.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080976/557A1865_unh2q1.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080964/557A1911_c4vkrn.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080976/_I0A7661_nu1gpg.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080979/_I0A7667_ebxosa.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080965/DSC_3319_drwtmx.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080977/_I0A7666_h5biaz.jpg",
    // ajoute d'autres images ici
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
        Séance Photo Défense
      </h1>
      <p className="text-lg text-accent-black text-center mb-12">
        Célébrez votre réussite avec des clichés pleins de fierté, d’élégance et d’émotion.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Séance Photo Défense ${index + 1}`}
            className="rounded-lg shadow-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(photo)}
          />
        ))}
      </div>

      <ImageModal
        src={selectedImage}
        alt="Photo agrandie"
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
