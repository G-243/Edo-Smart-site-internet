import React, { useState } from "react";
import ImageModal from "../components/ImageModal"; // adapte le chemin si nécessaire

export default function SeancePhotoConference() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080977/_PWC9107_dfg7dp.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080976/AMZ_6547_azfmt9.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080975/AMZ_6605_btc0h9.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080974/AMZ_6388-2_eky5rx.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080972/AMZ_6428-2_wpgtdc.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080972/AMZ_6426-2_xs7rmd.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080971/AMZ_6594_p3jsmd.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080970/AMZ_6509_dpidxx.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080966/AMZ_6561_vpi26b.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080964/AMZ_6439_q02gip.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080962/AMZ_6435_w0cytv.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080963/AMZ_6445_xgwbfq.jpg",
    "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080961/AMZ_6446-2_jxdhdj.jpg",
    // ajoute d'autres images ici
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
        Séance Photo Conférence
      </h1>
      <p className="text-lg text-accent-black text-center mb-12">
        Immortalisez vos événements professionnels avec élégance et précision, chaque instant compte.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Séance Photo Conférence ${index + 1}`}
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
