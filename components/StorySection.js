import Image from 'next/image';
import Link from "next/link";

const StorySection = () => {
  return (
    <section id="story" className="py-20 px-12 bg-[#022133]">
      <div className="container mx-auto max-w-7xl ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-1 bg-[#B96B25]"></div>
              <span className="text-white font-semibold uppercase tracking-wider">
                Notre Histoire
              </span>
            </div>
            <h2 className="text-2xl md:text-2xl font-bold text-white">
            Nous créons des images authentiques et intemporelles, révélant les émotions depuis nos débuts.
            </h2>
            <p className="text-lg text-white leading-relaxed">
            Chez Smart Light DRC Photography, chaque cliché est pensé, composé et sublimé avec soin. Qu’il s’agisse d’un mariage, d’un portrait, d’un événement familial ou d’un projet professionnel, notre objectif reste le même : transformer chaque moment en souvenir intemporel.
            </p>
            <p className="text-lg text-white leading-relaxed">
            Au fil des années, notre approche s’est enrichie d’une sensibilité artistique unique et d’un savoir-faire technique rigoureux. Nous utilisons la lumière, les couleurs et les angles pour révéler l’essence de chaque sujet et capturer les émotions les plus authentiques.
            </p>
            <p className="text-lg text-white leading-relaxed">
            Aujourd’hui, Smart Light DRC Photography est plus qu’un simple studio : c’est un espace où la créativité, l’émotion et la passion se rencontrent pour donner naissance à des souvenirs uniques. Notre mission est simple : faire en sorte que chaque photo raconte une histoire, la vôtre.
            </p>
            
            <div className="pt-4"> 
             <Link href="/apropos">
              <button className="group relative px-8 py-3 bg-[#B96B25] text-white font-semibold rounded-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                <span className="relative z-10">En savoir plus</span>
                <div className="absolute inset-0 bg-accent-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </Link>
            </div>
          </div>
        
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-accent-yellow rotate-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
            <div className="relative h-[600px] overflow-hidden rounded-md">
              <Image
                src="https://res.cloudinary.com/ds4x7wbbv/image/upload/v1761556503/IMG-20250417-WA0043_ptpljv.jpg"
                alt="Chef working"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;

