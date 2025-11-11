import React, { useState } from "react";
import ImageModal from "../components/ImageModal"; // adapte le chemin si nécessaire

export default function SeancePhotoEntreprise() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081010/IMG_9090_iqbu5l.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081009/IMG_8992_slvjq7.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081007/IMG_8980_cftk6r.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081004/IMG_9569_ev20bh.jpg",
    // ajoute d'autres photos ici
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
        Séance Photo Entreprise
      </h1>
      <p className="text-lg text-accent-black text-center mb-12">
        Des portraits élégants et professionnels qui reflètent votre sérieux, votre confiance et l’image de votre entreprise.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Séance Photo Entreprise ${index + 1}`}
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
