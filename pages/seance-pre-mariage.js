import Layout from "../components/Layout";
import Image from "next/image";

export default function SeancePreMariage() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
          Séance Pré-Mariage
        </h1>
        <p className="text-lg text-accent-black text-center mb-12">
        Immortalisez les moments précieux avec élégance et émotion.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081021/DSC_4185_iflkzv.jpg"
            alt="Séance Pré-Mariage"
            width={800}
            height={800}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081021/DSC_4186_la4zwv.jpg"
            alt="Séance Pré-Mariage"
            width={800}
            height={800}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081020/DSC_4149_chip5x.jpg"
            alt="Séance Pré-Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081019/DSC_4146_ujuicb.jpg"
            alt="Séance Pré-Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080998/_MG_0664_zk5ryb.jpg"
            alt="Séance Pré-Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />

           <div className="flex flex-col gap-6">
           <img
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080991/_MG_0661_aucehx.jpg"
            alt="Séance Pré-Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
           />
           <img
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080996/_MG_0686_zrixwf.jpg"
            alt="Séance Pré-Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
           />
         </div>
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080992/_MG_0665_tv34tk.jpg"
            alt="Séance Pré-Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080995/_MG_0663_hmfsyz.jpg"
            alt="Séance Pré-Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080991/_MG_0703_l203xm.jpg"
            alt="Séance Pré-Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
                    <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080995/_MG_0662_fyfke4.jpg"
            alt="Séance Pré-Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />

          {/* Ajoute d'autres photos ici */}
        </div>
      </section>
    </Layout>
  );
}
