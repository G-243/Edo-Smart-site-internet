import React, { useState } from "react";
import ImageModal from "../components/ImageModal"; // adapte le chemin si nécessaire

export default function SeancePhotoCollation() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724160/IMG-20251029-WA0198_rnkpqi.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724159/IMG-20251029-WA0192_gvvcrk.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724159/IMG-20251029-WA0194_fpecds.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724155/IMG-20251029-WA0189_inwxuh.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724146/IMG-20251029-WA0181_yeyeex.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724145/IMG-20251029-WA0180_eqlzhv.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724143/IMG-20251029-WA0179_yqcqkz.jpg",
    // ajoute toutes les autres images ici
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
        Séance Photo Collation
      </h1>
      <p className="text-lg text-accent-black text-center mb-12">
        Immortalisez votre moment de réussite avec des clichés remplis de fierté, d’émotion et de célébration.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Séance Photo Collation ${index + 1}`}
            className="rounded-lg shadow-lg object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(photo)}
          />
        ))}
      </div>

      {/* Modal */}
      <ImageModal
        src={selectedImage}
        alt="Photo agrandie"
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
