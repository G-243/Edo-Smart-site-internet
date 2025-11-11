import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full overflow-hidden relative bg-[#011826] text-light-white py-12 px-6">
        <div
  className="absolute inset-0 opacity-5 pointer-events-none"
  style={{
    backgroundImage: 'url("https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761655143/istockphoto-1396069049-612x612_zs4cf4.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
></div>
<div className="relative z-10"></div>
      {/* --- Conteneur principal du footer --- */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
       
        {/* --- Colonne 1 : Logo et texte --- */}
        <div className="flex flex-col w-full h-12"> 
          <div className="mb-2">
            <Logo /> {/* Logo bien collé à gauche */}
          </div>
          
        <div className="mt-2 w-full">
          <p className="block w-full text-sm text-gray-300 leading-relaxed text-justify">
          Né à Lubumbashi, inspiré par l’Afrique. Smart Light DRC, c’est la créativité congolaise au service de l’excellence visuelle.
          </p>
        </div>
        </div>
       
        {/* --- Colonne 2 : Pages --- */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="text-2xl font-bold mb-6 text-[#B96B25]">Pages</h3>
          <ul className="list-disc list-inside space-y-2 marker:text-[#B96B25] flex flex-col text-left">
            <li><a href="/" className="text-center text-gray-300 hover:text-accent-yellow transition-colors">Home</a></li>
            <li><a href="#story" className="text-center text-gray-300 hover:text-accent-yellow transition-colors">Our Story</a></li>
            <li><a href="/Portfolio" className="text-center text-gray-300 hover:text-accent-yellow transition-colors">Portfolio</a></li>
            <li><a href="/Avis" className="text-center text-gray-300 hover:text-accent-yellow transition-colors">Avis</a></li>
            <li><a href="/contact" className="text-center text-gray-300 hover:text-accent-yellow transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* --- Colonne 3 : Qui sommes-nous --- */}
        <div className="flex-1 min-w-[260px]">
          <h3 className="text-2xl font-bold mb-4 text-[#B96B25]">Qui sommes-nous ?</h3>
          <p className="text-justify text-gray-300 mb-4 leading-relaxed">
            <span className="font-semibold text-white">Smart Light DRC Photography</span>, dirigé par <span className="italic">Edovic Mukalayi</span>,
            capture vos plus beaux moments avec passion et créativité.
          </p>
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#B96B25] mx-auto">
            <img
              src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761645419/IMG_20251028_114729_108_1594850694_tkifqv.jpg"
              alt="Photographe Edovic Mukalayi"
              className="object-cover w-full h-full"
              style={{
                animation: "spin 20s linear infinite"
              }}
            />
          </div>
        </div>

        {/* --- Colonne 4 : Contact --- */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-2xl font-bold mb-6 text-[#B96B25]">Contactez-nous</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-300">
              <MapPin size={20} className="text-[#B96B25]" />
              <span>Kenya, Lubumbashi, RDC</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Phone size={20} className="text-[#B96B25]" />
              <span>+243 841 029 002</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Mail size={20} className="text-[#B96B25]" />
              <span>Edomk12@gmail.com</span>
            </li>
          </ul>

          {/* Icônes sociales */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://web.facebook.com/profile.php?id=100064382816586"
              className="text-gray-300 hover:text-accent-yellow transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/smart_light_drc_photography?utm_source=ig_web_button_share_sheet&igsh=MWVuYWhrcjR1cDNiZw=="
              className="text-gray-300 hover:text-accent-yellow transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* --- Copyright séparé --- */}
      <div className="border-t border-gray-700 pt-6 mt-12 text-center text-gray-400 text-sm">
        © {currentYear} Smart DRC Photography. Tous droits réservés. Conçu par{" "}
        <a
          href="https://wa.me/243978300552"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-accent-yellow"
        >
          Gloria Kizowa ❤️
        </a>{" "}
        en RDC.
      </div>
    </footer>
  );
};

export default Footer;
