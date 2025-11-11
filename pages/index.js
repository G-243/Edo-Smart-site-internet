import Head from 'next/head';
import Navigation from '../components/Navigation';
import HeroSlider from '../components/HeroSlider';
import StorySection from '../components/StorySection';
import ReviewSection from '../components/ReviewSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Light Drc Photography</title>
        <meta name="description" content="Smart Light DRC Photography, dirigé par Edovic Mukalayi, capture vos plus beaux moments avec passion et créativité." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link 
          href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" 
          rel="stylesheet" 
        />
      </Head>

      <div className="w-full overflow-x-hidden">
        <Navigation />
        <HeroSlider />
        <StorySection />
        <ReviewSection />
      </div>
    </>
  );
}

