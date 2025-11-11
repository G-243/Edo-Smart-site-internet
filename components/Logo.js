import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="group cursor-pointer transition-transform duration-300 hover:scale-105">
      <div className="relative w-48 md:w-30 h-16 md:h-28">
        <Image
          src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761648041/1761647853532_h4glnk.png"
          alt="Smart DRC Photography Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Logo;

