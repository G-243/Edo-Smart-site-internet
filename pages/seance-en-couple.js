import React, { useState } from "react";
import ImageModal from "../components/ImageModal"; // adapte le chemin

export default function SeanceEnCouple() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556486/IMG-20250417-WA0084_ezdv0f.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556508/IMG-20250417-WA0031_hbrzxy.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556507/IMG-20250417-WA0030_g1eijm.jpg",
    // ajoute d'autres liens ici
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
        Séance en Couple
      </h1>
      <p className="text-lg text-accent-black text-center mb-12">
        Une séance photo pour capturer votre complicité et vos plus beaux instants à deux.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt="Séance en Couple"
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
