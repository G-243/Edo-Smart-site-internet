import Layout from "../components/Layout";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function SeanceEnExterieur() {
  return (
      <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
          Séance en Extérieur
        </h1>
        <p className="text-lg text-accent-black text-center mb-12">
          Profitez d’une séance photo naturelle et lumineuse dans les plus beaux endroits de la ville.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724153/IMG-20251029-WA0187_tlcujj.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724140/IMG-20251029-WA0175_zsxpsk.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724136/IMG-20251029-WA0171_wo3cmf.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724126/IMG-20251029-WA0159_htr8px.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724125/IMG-20251029-WA0132_rzy9kd.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724124/IMG-20251029-WA0118_sweod2.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724124/IMG-20251029-WA0111_ebvpod.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556508/IMG-20250417-WA0033_j0c9qi.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556503/IMG-20250417-WA0041_hg3fus.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556497/IMG-20250417-WA0048_wevvv2.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556494/IMG-20250417-WA0058_oksuid.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556491/IMG-20250417-WA0061_idzpyd.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556486/IMG-20250417-WA0085_vkolng.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556485/IMG-20250417-WA0088_i46bqn.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081035/_MG_1381_eq8ru2.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081033/_MG_1404_i1wo5n.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081033/_MG_1335_pf7fd0.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081033/_MG_1406_iebypt.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081032/_MG_1338_xrkawa.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081025/DSC_0135_mt3vr1.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081024/DSC_0038-2_udwkc0.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081024/DSC_0614_q3vqal.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081022/20_grkx1g.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081022/DSC_0615_okjvxr.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081019/DSC_0215_jczt5d.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081018/DSC_0167_zbieft.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081017/DSC_0193_capital_r4cpiz.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081010/DSC_0464_csvvup.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081003/smart_light_photography-0048_tpfibg.jpg"
            alt="Séance en Extérieur"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          {/* Ajoute d'autres photos ici */}
        </div>
      </section>
  );
}
