import Head from 'next/head';
import Navigation from '../components/Navigation';
import MenuCard from '../components/MenuCard';

const Portfolio = () => {
  const PortfolioItems = [

  ];

  return (
    <>
      <Head>
        <title> Nos Réalisations </title>
        <meta name="description" content="Découvrez notre Porfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link 
          href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" 
          rel="stylesheet" 
        />
      </Head>

      <div className="min-h-screen">
        <Navigation />
        
        {/* Menu Hero Section */}
        <div className="relative h-[100vh] w-full">
  <video
    src="https://res.cloudinary.com/ds4x7wbbv/video/upload/v1761556552/Smart_caeivu.mp4"
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
  {/* Texte centré */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center text-white z-10 px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Nos Réalisations</h1>
    </div>
  </div>
</div>

        {/* Galerie Portfolio */}
<section className="py-20 px-4 bg-light-white">
  <div className="container mx-auto max-w-7xl">
    <MenuCard />
  </div>
</section>


      </div>
    </>
  );
};

export default Portfolio;

