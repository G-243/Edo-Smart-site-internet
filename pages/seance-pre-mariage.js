import React, { useState } from "react";
import ImageModal from "../components/ImageModal"; // adapte le chemin si nécessaire

export default function SeancePreMariage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081021/DSC_4185_iflkzv.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081021/DSC_4186_la4zwv.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081020/DSC_4149_chip5x.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081019/DSC_4146_ujuicb.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080998/_MG_0664_zk5ryb.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080992/_MG_0665_tv34tk.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080995/_MG_0663_hmfsyz.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080991/_MG_0661_aucehx.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080996/_MG_0686_zrixwf.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080991/_MG_0703_l203xm.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080995/_MG_0662_fyfke4.jpg",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
        Séance Pré-Mariage
      </h1>
      <p className="text-lg text-accent-black text-center mb-12">
        Immortalisez les moments précieux avec élégance et émotion.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Séance Pré-Mariage ${index + 1}`}
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
