// pages/APropos.js
import Image from "next/image";
import Link from 'next/link';

import { ShieldCheckIcon, LightBulbIcon, StarIcon } from '@heroicons/react/24/solid';

export default function APropos() {
  return (
      <section className="bg-black text-white">
        {/* --- HERO --- */}
        <div className="relative h-[150vh] flex items-center justify-center overflow-hidden">
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081033/1652095226168_f6svgd.jpg"
            alt="Studio Smart Light DRC"
            fill
            className="object-cover transform -translate-y-20 object-top opacity-30"
          />
          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#B96B25]">
              À propos de
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Smart Light DRC Photography.
            </p>
          </div>
        </div>

        {/* --- HISTOIRE --- */}
        <div className="max-w-6xl mx-auto px-10 py-15">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#B96B25]">Notre Histoire</h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Fondé par des passionnés de l’image, Smart Light DRC Photography est
                né d’un rêve simple : immortaliser la beauté et la vérité des instants
                humains. Depuis nos débuts, nous avons toujours cru que la photographie
                n’est pas qu’une technique, mais une émotion capturée, une lumière
                apprivoisée, un souvenir figé dans le temps.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Chaque séance, chaque portrait, chaque regard photographié raconte une
                histoire unique. Nous avons accompagné plusieurs mariages,
                d’événements et de projets personnels, avec la même passion et la même
                exigence : révéler l’âme derrière chaque image.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556485/IMG-20250417-WA0082_pa9rqb.jpg"
                alt="Notre équipe en action"
                fill
                className="object-cover transform -translate-y-12 opacity-70"
              />
            </div>
          </div>
        </div>

        {/* --- VALEURS --- */}
        <div className="bg-light-white text-black py-20 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#B96B25] mb-12">Nos Valeurs</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-3">
              <ShieldCheckIcon className="w-12 h-12 mx-auto text-[#34542C]" />
                <h3 className="text-xl font-semibold">Authenticité</h3>
                <p>
                  Nous croyons en la beauté du vrai. Aucune mise en scène forcée,
                  juste la sincérité des émotions.
                </p>
              </div>
              <div className="space-y-3">
              <LightBulbIcon className="w-12 h-12 mx-auto text-[#34542C]" />
                <h3 className="text-xl font-semibold">Créativité</h3>
                <p>
                  Chaque projet est une nouvelle toile où la lumière, les couleurs et
                  la composition se rencontrent.
                </p>
              </div>
              <div className="space-y-3">
              <StarIcon className="w-12 h-12 mx-auto text-[#34542C]" />
                <h3 className="text-xl font-semibold">Excellence</h3>
                <p>
                  Nous nous engageons à offrir une qualité d’image irréprochable,
                  empreinte de sensibilité et de rigueur artistique.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- APPEL À L’ACTION --- */}
        <div className="bg-light-white text-black text-center py-20 px-6">
          <h2 className="text-3xl font-bold mb-6 text-[#34542C]">
            Envie de collaborer avec nous ?
          </h2>
          <p className="mb-8">
            Discutons de votre projet, de vos idées, ou de votre prochaine séance.
          </p>
          <Link href="/contact">
          <button className="px-8 py-3 bg-[#B96B25] text-white font-semibold rounded-md hover:bg-[#a35e20] transition-colors duration-300">
            Nous contacter
          </button>
          </Link>
        </div>
      </section>
  );
}


