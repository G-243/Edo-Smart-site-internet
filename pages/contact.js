"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react"; // pour l’icône WhatsApp

export default function Contact() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("https://formspree.io/f/xnnlqgjl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Votre réservation a bien été envoyée !");
        setFormData({
          name: "",
          email: "",
          phone: "",
          sessionType: "",
          date: "",
          message: "",
        });
      } else {
        setStatus("❌ Une erreur est survenue. Réessayez plus tard.");
      }
    } catch (error) {
      setStatus("❌ Impossible d’envoyer le message.");
    }
  };

  return (
    <section className="relative bg-[#011826] text-white py-20 pt-32 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
          Réservez Votre Séance
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          Remplissez le formulaire ci-dessous pour réserver une séance photo.  
          Vous pouvez aussi discuter directement avec nous sur WhatsApp pour plus d’informations.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#022133] p-8 rounded-2xl shadow-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom complet"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-transparent border border-gray-600 focus:border-yellow-500 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-transparent border border-gray-600 focus:border-yellow-500 outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Numéro de téléphone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-transparent border border-gray-600 focus:border-yellow-500 outline-none"
          />
          <select
            name="sessionType"
            value={formData.sessionType}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-[#022133] border border-gray-600 focus:border-yellow-500 outline-none"
          >
            <option value="">Type de séance</option>
            <option value="Pré-Mariage">Séance Pré-Mariage</option>
            <option value="Mariage">Séance Mariage</option>
            <option value="Post-Mariage">Séance Post-Mariage</option>
            <option value="Entreprise">Séance Entreprise</option>
            <option value="Portrait">Portrait</option>
            <option value="Pré-Dot">Séance Pré-Dot</option>
            <option value="Autres">Autres...</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="p-3 rounded-md bg-transparent border border-gray-600 focus:border-yellow-500 outline-none col-span-1 md:col-span-2"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Dites-nous en plus sur votre séance (lieu, thème, préférences...)"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-md bg-transparent border border-gray-600 focus:border-yellow-500 outline-none col-span-1 md:col-span-2"
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md transition-all duration-300"
          >
            Envoyer la réservation
          </button>
        </form>

        {status && (
          <p className="text-center mt-6 text-yellow-400 font-medium">{status}</p>
        )}
      </div>

      {/* --- Bouton WhatsApp --- */}
      <a
        href="https://wa.me/243841029002"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  );
}
