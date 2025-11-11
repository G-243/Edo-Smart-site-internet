import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const photos = [
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556509/IMG-20250417-WA0045_nfsnbi.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556504/IMG-20250417-WA0046_pxlc46.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556497/IMG-20250417-WA0048_wevvv2.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724161/IMG-20251029-WA0200_jrkgg6.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724160/IMG-20251029-WA0193_aic1ur.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724159/IMG-20251029-WA0191_ihkbd2.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724155/IMG-20251029-WA0189_inwxuh.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724153/IMG-20251029-WA0187_tlcujj.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724145/IMG-20251029-WA0180_eqlzhv.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724135/IMG-20251029-WA0169_g6fmtw.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724128/IMG-20251029-WA0156_ilddr9.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724127/IMG-20251029-WA0164_wtycvj.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724126/IMG-20251029-WA0160_eiy89h.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081037/ado_t0fimr.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081033/1652093102064_pzczjr.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081030/1652093102087_omdaa1.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081030/1652093102082_ujvcms.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081011/1W9A9302_-_Copie_a8iutq.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081010/IMG_9090_iqbu5l.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724128/IMG-20251029-WA0167_nsptjj.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081037/dk-Modifi%C3%A9e_thlt5j.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081035/_MG_1381_eq8ru2.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081032/_MG_1338_xrkawa.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081026/_MG_9642_nu5wpa.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081024/DSC_0038-2_udwkc0.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081019/DSC_4146_ujuicb.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081018/DSC_0167_zbieft.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080965/DSC_3319_drwtmx.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080963/AMZ_6445_xgwbfq.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556514/557A1911_rhds88.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556508/IMG-20250417-WA0031_hbrzxy.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556508/IMG-20250417-WA0033_j0c9qi.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556502/IMG-20250417-WA0038_jx3cra.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556500/IMG-20250417-WA0052_iq7lth.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556497/IMG-20250417-WA0050_udzdww.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556486/IMG-20250417-WA0091_rn1rid.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556494/IMG-20250417-WA0071_zospns.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081006/smart_light_Drc_photography_2_zeyc5y.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081003/smart_light_photography-0048_tpfibg.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081004/IMG_9569_ev20bh.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081010/DSC_0464_csvvup.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081014/1W9A9604_-_Copie_wjjgbv.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080995/_MG_0662_fyfke4.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080987/_I0A7694_koifij.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556487/IMG-20250417-WA0075_cbodev.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080982/557A2175_ndh390.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080972/AMZ_6428-2_wpgtdc.jpg",
  "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081019/DSC_4146_ujuicb.jpg",
  // Ajoute autant d’images que tu veux ici
];

export default function MenuCard() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const imgRef = useRef(null);

  // Zoom à la molette
  const handleWheel = (e) => {
    e.preventDefault();
    const img = imgRef.current;
    if (!img) return;

    let scale = isZoomed ? 1.5 : 1;
    scale += e.deltaY < 0 ? 0.15 : -0.15;
    if (scale < 1) scale = 1;
    if (scale > 2.5) scale = 2.5;
    img.style.transform = `scale(${scale})`;
  };

  // Déplacement du curseur pendant le zoom
  const handleMouseMove = (e) => {
    if (!imgRef.current || !isZoomed) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCursor({ x, y });
  };

  const handleImageClick = () => setIsZoomed(!isZoomed);

  const handleNext = () => {
    const currentIndex = photos.indexOf(selectedImage);
    setSelectedImage(photos[(currentIndex + 1) % photos.length]);
    setIsZoomed(false);
  };

  const handlePrev = () => {
    const currentIndex = photos.indexOf(selectedImage);
    setSelectedImage(photos[(currentIndex - 1 + photos.length) % photos.length]);
    setIsZoomed(false);
  };

  // Bloquer le scroll quand la modale est ouverte
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
  }, [selectedImage]);

  return (
    <section className="text-white py-16 px-6 pt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-yellow-500">
          Galerie
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Photo ${index + 1}`}
                width={600}
                height={400}
                className="object-cover object-top w-full h-64 transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative w-full max-h-[90vh] overflow-hidden cursor-zoom-in"
                onMouseMove={handleMouseMove}
                onClick={handleImageClick}
                onWheel={handleWheel}
                ref={imgRef}
              >
                <img
                  src={selectedImage}
                  alt="Zoomed"
                  className={`w-full h-auto max-h-[90vh] object-contain transition-transform duration-300 ${
                    isZoomed ? "scale-150 cursor-zoom-out" : "scale-100"
                  }`}
                  style={isZoomed ? { transformOrigin: `${cursor.x}% ${cursor.y}%` } : {}}
                />
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/80 text-black p-2 rounded-full text-lg font-bold hover:bg-yellow-400 transition"
              >
                ✕
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-4 text-4xl text-white"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 text-4xl text-white"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}