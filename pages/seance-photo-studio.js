import React, { useState } from "react";
import ImageModal from "../components/ImageModal"; // adapte le chemin si nécessaire

export default function SeancePhotoStudio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724160/IMG-20251029-WA0195_k6zhhb.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724160/IMG-20251029-WA0193_aic1ur.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724159/IMG-20251029-WA0191_ihkbd2.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724151/IMG-20251029-WA0186_bbk7kl.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724136/IMG-20251029-WA0172_h66ljv.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724129/IMG-20251029-WA0168_ozif8v.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724127/IMG-20251029-WA0162_uhfnsu.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724127/IMG-20251029-WA0164_wtycvj.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724124/IMG-20251029-WA0112_a49utr.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081015/CAP_5033_e3rfep.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556509/IMG-20250417-WA0045_nfsnbi.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556504/IMG-20250417-WA0046_pxlc46.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556503/IMG-20250417-WA0043_ptpljv.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556502/IMG-20250417-WA0040_fiemp9.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081018/bbyu_r2pgsq.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556485/IMG-20250417-WA0082_pa9rqb.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556485/IMG-20241223-WA0015_lav18n.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556485/IMG-20250417-WA0089_soovpt.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081039/ado__m_iyf400.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081031/1652093102075_lr0fnf.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081037/ado_t0fimr.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081033/1652093102064_pzczjr.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081028/1652093102096_fsxtiv.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081037/dk-Modifi%C3%A9e_thlt5j.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081030/1652093102087_omdaa1.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081030/1652093102082_ujvcms.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081029/1652093102091_mosvtj.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081033/1652095226168_f6svgd.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556486/IMG-20250417-WA0091_rn1rid.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761645419/IMG_20251028_114729_108_1594850694_tkifqv.jpg",
    // Ajoute le reste de tes URLs ici
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
        Séance Photo Studio
      </h1>
      <p className="text-lg text-accent-black text-center mb-12">
        Dans un cadre professionnel et artistique, chaque lumière révèle la beauté et la personnalité qui vous distinguent.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Séance Photo Studio ${index + 1}`}
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
