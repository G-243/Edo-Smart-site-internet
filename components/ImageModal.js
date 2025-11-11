// components/ImageModal.js
import React from "react";

export default function ImageModal({ imageSrc, onClose }) {
  if (!imageSrc) return null;

  return (
    <div className="custom-lightbox" onClick={onClose}>
      <div className="custom-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Aperçu" className="custom-lightbox-img" />
        <button className="custom-lightbox-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
}
