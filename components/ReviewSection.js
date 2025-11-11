const ReviewSection = () => {
  const reviews = [
    {
      name: 'Madame Luna',
      text: "Sans aucun doute le meilleur photographe de la ville ! Son travail capture parfaitement l’émotion de chaque instant. Les images sont incroyables, chaque détail est sublimé.",
      rating: 5,
    },
    {
      name: 'Madame Deborah',
      text: "L’expérience avec Smart Light DRC est tout simplement merveilleuse. L’équipe est incroyablement professionnelle et sympathique. C’est notre studio photo préféré pour immortaliser nos moments en famille. Je le recommande vivement !",
      rating: 5,
    },
    {
      name: 'Monsieur Patrick',
      text: "Des souvenirs immortalisés avec un professionnalisme remarquable. Les photos capturent parfaitement les émotions et la lumière de chaque instant. Excellent rapport qualité-prix. Je reviendrai sans hésiter pour d’autres séances !",
      rating: 5,
    },
    {
      name: 'Monsieur Gracy',
      text: "Sans aucun doute la meilleure expérience photographique que j’aie jamais vécue. L’équipe de Smart Light DRC sait capturer chaque instant avec une sensibilité unique. Un véritable joyau pour immortaliser vos souvenirs.",
      rating: 5,
    },
    {
      name: 'Madame Rey',
      text: "Un service exceptionnel et une expérience photographique délicieuse. Chaque séance avec Smart Light DRC est un vrai plaisir. Mon moment préféré est la session en extérieur.",
      rating: 5,
    },
    {
      name: 'Monsieur Herman',
      text: "Des photos fantastiques réalisées avec un véritable souci du détail. L’équipe de Smart Light DRC accorde une grande importance à la qualité et à la composition de chaque image. Le service est également très professionnel et accessible.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 px-4 bg-light-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-custom-grey mb-4">
          Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600">
          Des expériences réelles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#022133] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-[orange]"
            >
              <div className="mb-4">
                <div className="flex gap-1 text-[orange] text-xl">
                  {'★'.repeat(review.rating)}
                </div>
              </div>
              <p className="text-white text-lg leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-[orange] font-semibold text-lg">
                  — {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;

