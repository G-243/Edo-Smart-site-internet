import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function ImageModal({ src, alt, isOpen, onClose }) {
  // Fermer le modal avec la touche Échap
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div className="relative max-h-[90vh] max-w-[90vw] transform scale-0 animate-scaleIn">
        <img
          src={src}
          alt={alt}
          className="rounded-lg shadow-2xl object-contain max-h-[90vh] max-w-[90vw]"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl p-2 hover:text-yellow-500 transition-colors"
        >
          <X />
        </button>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
