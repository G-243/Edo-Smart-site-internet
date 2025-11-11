import React, { useState } from "react";
import ImageModal from "../components/ImageModal"; // adapte le chemin

export default function SeanceEnExterieur() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724153/IMG-20251029-WA0187_tlcujj.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724140/IMG-20251029-WA0175_zsxpsk.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724136/IMG-20251029-WA0171_wo3cmf.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724126/IMG-20251029-WA0159_htr8px.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724125/IMG-20251029-WA0132_rzy9kd.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724124/IMG-20251029-WA0118_sweod2.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724124/IMG-20251029-WA0111_ebvpod.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556508/IMG-20250417-WA0033_j0c9qi.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556503/IMG-20250417-WA0041_hg3fus.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556497/IMG-20250417-WA0048_wevvv2.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556494/IMG-20250417-WA0058_oksuid.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556491/IMG-20250417-WA0061_idzpyd.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556486/IMG-20250417-WA0085_vkolng.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556485/IMG-20250417-WA0088_i46bqn.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081035/_MG_1381_eq8ru2.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081033/_MG_1404_i1wo5n.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081033/_MG_1335_pf7fd0.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081033/_MG_1406_iebypt.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081032/_MG_1338_xrkawa.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081025/DSC_0135_mt3vr1.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081024/DSC_0038-2_udwkc0.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081024/DSC_0614_q3vqal.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081022/20_grkx1g.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081022/DSC_0615_okjvxr.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081019/DSC_0215_jczt5d.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081018/DSC_0167_zbieft.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081017/DSC_0193_capital_r4cpiz.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081010/DSC_0464_csvvup.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081003/smart_light_photography-0048_tpfibg.jpg",
    // ajoute d'autres photos ici si nécessaire
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
        Séance en Extérieur
      </h1>
      <p className="text-lg text-accent-black text-center mb-12">
        Profitez d’une séance photo naturelle et lumineuse dans les plus beaux endroits de la ville.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Séance en Extérieur ${index + 1}`}
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
