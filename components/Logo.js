import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="group cursor-pointer transition-transform duration-300 hover:scale-105">
      <div className="relative w-74 md:w-[15rem] h-24 md:h-44">
        <Image
          src="https://res.cloudinary.com/ds4x7wbbv/image/upload/c_fill,w_300,h_100/v1761562801/IMG-20231102-WA0004_ve63nd-removebg-preview_eh3ttm.png"
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

