// pages/Services.js
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

const servicesSlides = [
  {
    image: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556497/IMG-20250417-WA0048_wevvv2.jpg",
    title: "Séance en Extérieur",
    slug: "seance-en-exterieur",
  },
  {
    image: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556486/IMG-20250417-WA0084_ezdv0f.jpg",
    title: "Séance en couple",
    slug: "seance-en-couple",
  },
  {
    image: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080961/DSC_4149_rowvia.jpg",
    title: "Seance Pré-Mariage",
    slug: "seance-pre-mariage",
  },
  {
    image: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080991/AMZ_2535_botqjx.jpg",
    title: "Séance Post Mariage",
    slug: "seance-post-mariage",
  },
  {
    image: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556500/IMG-20250417-WA0052_iq7lth.jpg",
    title: "Séance Photo Pré-Dot",
    slug: "seance-pre-dot",
  },
  {
    image: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724161/IMG-20251029-WA0199_tyl0v8.jpg",
    title: "Séance Photo Dot",
    slug: "seance-photo-dot",
  },
  {
    image: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080987/_I0A7694_koifij.jpg",
    title: "Séance Photo Défense",
  },
  {
    image: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724129/IMG-20251029-WA0168_ozif8v.jpg",
    title: "Séance Photo Studio",
  },
  {
    image: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081004/IMG_9569_ev20bh.jpg",
    title: "Séance Photo Entreprise",
  },
  {
    image: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724142/IMG-20251029-WA0177_p0orrb.jpg",
    title: "Séance Photo Collation",
  },
  {
    image: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556487/IMG-20250417-WA0077_k8gq9p.jpg",
    title: "Séance Photo Anniversaire",
  },
  {
    image: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760081011/1W9A9302_-_Copie_a8iutq.jpg",
    title: "Mariage",
  },
  {
    image: "",
    title: "Seance en Famille",
  },
  {
    image: "https://res.cloudinary.com/ds4x7wbbv/image/upload/v1760080971/AMZ_6594_p3jsmd.jpg",
    title: "Seance Photo Conférence",
  },
  {
    image: "",
    title: "Demande en Mariage",
  },
];


const slugify = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Services() {
  return (
      <section className="max-w-6xl mx-auto px-6 py-12 pt-32">
        <h1 className="text-4xl font-bold mb-8 text-center text-yellow-500">
          Nos Services
        </h1>

        <p className="text-accent-black text-center mb-12 leading-relaxed">
          Découvrez nos différentes prestations : séances en extérieur, en couple,
          post-mariage, studio et bien plus encore.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {servicesSlides.map((service, index) => {
            // ✅ On ouvre des accolades ici, on peut maintenant déclarer une variable
            const slug = slugify(service.title);

            return (
              <Link
                href={`/${slug}`}
                key={index}
                className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg group block"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
  );
}

