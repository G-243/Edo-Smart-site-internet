
import Image from "next/image";

export default function SeancePhotoDefense() {
  return (
      <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
          Séance Photo Défense
        </h1>
        <p className="text-lg text-accent-black text-center mb-12">
        Célébrez votre réussite avec des clichés pleins de fierté, d’élégance et d’émotion.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556505/IMG-20250417-WA0047_muxfn1.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080987/_I0A7694_koifij.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080986/_I0A7688_fviqzx.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080986/_I0A7675-1_ungxoi.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080982/557A2175_ndh390.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080981/557A2145_poj9bb.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080979/_I0A7676_n92hzm.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080979/_I0A7670_vkpbkk.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080976/557A1865_unh2q1.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080964/557A1911_c4vkrn.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080976/_I0A7661_nu1gpg.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <div className="flex flex-col gap-6">
           <img
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080979/_I0A7667_ebxosa.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
           />
           <img
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080965/DSC_3319_drwtmx.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
           />
         </div>
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080977/_I0A7666_h5biaz.jpg"
            alt="Séance Photo Defense"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          {/* Ajoute d'autres photos ici */}
        </div>
      </section>
  );
}
