
import Image from "next/image";

export default function SeancePhotoConference() {
  return (
      <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
          Séance Photo Conférence
        </h1>
        <p className="text-lg text-accent-black text-center mb-12">
        Immortalisez vos événements professionnels avec élégance et précision, chaque instant compte.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080977/_PWC9107_dfg7dp.jpg"
            alt="Séance Photo Conference"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080976/AMZ_6547_azfmt9.jpg"
            alt="Séance Photo Conference"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080975/AMZ_6605_btc0h9.jpg"
            alt="Séance Photo Conference"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080974/AMZ_6388-2_eky5rx.jpg"
            alt="Séance Photo Conference"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080972/AMZ_6428-2_wpgtdc.jpg"
            alt="Séance Photo Conference"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080972/AMZ_6426-2_xs7rmd.jpg"
            alt="Séance Photo Conference"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080971/AMZ_6594_p3jsmd.jpg"
            alt="Séance Photo Conference"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080970/AMZ_6509_dpidxx.jpg"
            alt="Séance Photo Conference"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080966/AMZ_6561_vpi26b.jpg"
            alt="Séance Photo Conference"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080964/AMZ_6439_q02gip.jpg"
            alt="Séance Photo Conference"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080962/AMZ_6435_w0cytv.jpg"
            alt="Séance Photo Conference"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <div className="flex flex-col gap-6">
           <img
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080963/AMZ_6445_xgwbfq.jpg"
            alt="Séance Photo Conference"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
           />
           <img
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080961/AMZ_6446-2_jxdhdj.jpg"
            alt="Séance Photo Conference"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
           />
         </div>
          {/* Ajoute d'autres photos ici */}
        </div>
      </section>
  );
}
