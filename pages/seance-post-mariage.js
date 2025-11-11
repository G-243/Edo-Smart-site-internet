import Layout from "../components/Layout";
import Image from "next/image";

export default function SeancePostMariage() {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-6 py-20 pt-32">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
          Séance Post Mariage
        </h1>
        <p className="text-lg text-accent-black text-center mb-12">
        Revivez la magie de votre union à travers une séance pleine de tendresse et d’émotions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080991/AMZ_2535_botqjx.jpg"
            alt="Séance Post Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080991/AMZ_2536_esz0mf.jpg"
            alt="Séance Post Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
           <div className="flex flex-col gap-6">
           <img
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081014/1W9A9604_-_Copie_wjjgbv.jpg"
            alt="Séance Post Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
           />
           <img
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080995/AMZ_2528_byltq1.jpg"
            alt="Séance Post Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
           />
         </div>
           <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724128/IMG-20251029-WA0156_ilddr9.jpg"
            alt="Séance Post Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081012/1W9A9553_-_Copie_raclzy.jpg"
            alt="Séance Post Mariage"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
          <Image
            src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081015/1W9A9621_celgll.jpg"
            alt="Séance Post Mariage"
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
