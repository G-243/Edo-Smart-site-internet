import React, { useState } from "react";
import ImageModal from "../components/ImageModal"; // adapte le chemin si nécessaire

export default function SeancePhotoDot() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724162/IMG-20251029-WA0196_fmcajp.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724161/IMG-20251029-WA0199_tyl0v8.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724161/IMG-20251029-WA0200_jrkgg6.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724160/IMG-20251029-WA0197_amr0er.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724158/IMG-20251029-WA0190_elnhxs.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724154/IMG-20251029-WA0188_qyvxul.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724150/IMG-20251029-WA0185_f1r9wy.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724149/IMG-20251029-WA0184_mcfwfm.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724148/IMG-20251029-WA0183_louut1.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724126/IMG-20251029-WA0160_eiy89h.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556506/IMG-20250417-WA0049_avbktu.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556500/IMG-20250417-WA0053_vxa5ew.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556499/IMG-20250417-WA0051_lh8ogz.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556497/IMG-20250417-WA0050_udzdww.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556494/IMG-20250417-WA0071_zospns.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556493/IMG-20250417-WA0070_m4qiqg.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556488/IMG-20250417-WA0078_iywqq0.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081026/_MG_9642_nu5wpa.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081025/_MG_9648_mqna8o.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081016/DSC_0259_wtrzcd.jpg",
    // ajoute d'autres images ici
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
        Séance Photo Dot
      </h1>
      <p className="text-lg text-accent-black text-center mb-12">
        Immortalisez ce moment unique où amour et tradition s’unissent dans la joie.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Séance Photo Dot ${index + 1}`}
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
