import React, { useState } from "react";
import ImageModal from "../components/ImageModal"; // adapte le chemin

export default function SeancePhotoAnniv() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556495/IMG-20250417-WA0059_jh4qtw.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556487/IMG-20250417-WA0077_k8gq9p.jpg",
    // ajoute d'autres photos ici
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
        Séance Photo Anniversaire
      </h1>
      <p className="text-lg text-accent-black text-center mb-12">
        Capturez la joie, les sourires et les instants uniques qui font de votre anniversaire un souvenir inoubliable.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Séance Photo Anniversaire ${index + 1}`}
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
