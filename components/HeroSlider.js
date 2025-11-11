'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724126/IMG-20251029-WA0159_htr8px.jpg',
      title: 'Séance en Exterieur',
      subtitle: 'Capturer des moments, créer des souvenirs',
      description: 'Chaque cliché révèle l’émotion, la lumière et la beauté de l’instant, pour des souvenirs uniques et intemporels',
    },
    {
      image: 'https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556506/IMG-20250417-WA0049_avbktu.jpg',
      title: 'Séance en couple',
      subtitle: "Capturer l'amour, créer des souvenirs",
      description: 'Chaque séance révèle la complicité, la tendresse et l’émotion unique de votre histoire à deux',
    },
    {
      image: 'https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761724128/IMG-20251029-WA0166_xsqm2r.jpg',
      title: 'Séance Post Mariage',
      subtitle: "Immortaliser votre histoire d'amour",
      description: 'Chaque image capture la complicité, l’émotion et la beauté unique de votre journée de mariage, pour des souvenirs éternels',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[1000px] w-full">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover object-top transform translate-y-5"
            sizes="400vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 z-10">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {index === currentSlide && (
                <>
                  <p className="text-accent-yellow text-lg md:text-xl mb-2 font-semibold">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    {slide.description}
                  </p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <button className="px-8 py-3 bg-[#B96B25] text-white font-semibold rounded-md hover:scale-102 transition-transform duration-300 shadow-lg hover:shadow-xl">
                      Reservez Maintenant
                    </button>
                    <button className="px-8 py-3 bg-white/10 text-white font-semibold rounded-md hover:scale-102 transition-transform duration-300 backdrop-blur border border-white/20">
                    <a href="/Portfolio" className="text-center text-gray-300 transition-colors">Portfolio</a>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-accent-yellow w-8'
                : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

