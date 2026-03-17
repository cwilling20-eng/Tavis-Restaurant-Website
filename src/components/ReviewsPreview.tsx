import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';

const homeReviews = [
  {
    name: 'Steve Joplin',
    text: 'The food was excellent, the staff was awesome and the atmosphere was pleasant. I had the lobster ravioli and it was outstanding. We will definitely be back!',
    ratings: { food: 5, service: 5, atmosphere: 5 },
  },
  {
    name: 'Allison Doyle',
    text: "If I could give more stars I would. This place isn't just a restaurant, it's home. They are so welcoming and sweet.",
    ratings: { food: 5, service: 5, atmosphere: 5 },
  },
  {
    name: 'Karadi Kairn',
    text: 'Fantastic service \u2014 I felt like I was being waited on hand and foot! The owner is delightful with a bright smile and came out and greeted our table.',
    ratings: { food: 5, service: 5, atmosphere: 5 },
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="text-gold-500 fill-gold-500" />
      ))}
    </div>
  );
}

export default function ReviewsPreview() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-espresso-600" />
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Tavis_Food_Images/Tavis_Restaurant.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-700/50 via-transparent to-espresso-700/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-body text-gold-400 text-xs tracking-[0.3em] uppercase">
            From Our Guests
          </span>
          <h2 className="font-display text-cream-100 text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 italic">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-gold-500/40" />
            <StarRating />
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-gold-500/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homeReviews.map((review) => (
            <div
              key={review.name}
              className="group bg-espresso-500/40 backdrop-blur-sm border border-cream-300/10 rounded-sm p-8 hover:border-gold-500/20 transition-all duration-500 hover:bg-espresso-500/50"
            >
              <Quote
                size={28}
                className="text-terracotta-400/40 mb-4 group-hover:text-terracotta-400/60 transition-colors duration-500"
              />
              <p className="font-body text-cream-200 text-sm leading-[1.9] mb-6 italic">
                "{review.text}"
              </p>
              <div className="border-t border-cream-300/10 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display text-cream-100 font-semibold">
                    {review.name}
                  </span>
                  <StarRating />
                </div>
                <div className="flex gap-3 flex-wrap">
                  <span className="font-body text-xs text-cream-300/80">Food: {review.ratings.food}/5</span>
                  <span className="font-body text-xs text-cream-300/80">Service: {review.ratings.service}/5</span>
                  <span className="font-body text-xs text-cream-300/80">Atmosphere: {review.ratings.atmosphere}/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/about"
            className="font-body text-gold-400 hover:text-gold-500 text-sm tracking-wider underline underline-offset-4 decoration-gold-400/40 hover:decoration-gold-500 transition-all duration-300"
          >
            See More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
