import { Users, ChefHat, Pizza, Wine, Star, Quote } from 'lucide-react';
import { reviews } from '../data/menuData';

const features = [
  {
    icon: Users,
    title: 'Family Owned & Operated',
    description: 'Run with love by the same family since day one',
  },
  {
    icon: ChefHat,
    title: 'Homemade Everything',
    description: 'From our pasta to our sauces, made fresh in-house daily',
  },
  {
    icon: Pizza,
    title: 'New York Style Pizza',
    description: 'Hand-tossed, crispy crust, four sizes \u2014 the real deal',
  },
  {
    icon: Wine,
    title: 'BYOB Welcome',
    description: 'Bring your favorite bottle and enjoy it with dinner',
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

function RatingBadge({ label, value }: { label: string; value: number }) {
  return (
    <span className="font-body text-xs text-espresso-300">
      {label}: {value}/5
    </span>
  );
}

export default function AboutPage() {
  return (
    <div>
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/Tavis_Food_Images/Tavis_Restaurant.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-700/80 via-espresso-600/70 to-espresso-700/90" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-cream-100 text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 italic">
            Our Story
          </h1>
          <p className="font-body text-cream-300 text-lg font-light">
            A Family Tradition on Cedar Creek Lake
          </p>
        </div>
      </div>

      <section className="parchment-bg texture-overlay py-20 sm:py-28">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <span className="font-body text-terracotta-400 text-xs tracking-[0.3em] uppercase">
                About Us
              </span>
              <h2 className="font-display text-espresso-500 text-3xl sm:text-4xl font-bold mt-2 mb-6">
                More Than a Restaurant
              </h2>
              <div className="space-y-4 font-body text-espresso-400 text-base leading-[1.9]">
                <p>
                  Tavi's Italian Restaurant is more than a place to eat — it's a place to belong.
                  Nestled on Cedar Creek Parkway in Seven Points, Texas, we've been welcoming families,
                  friends, and neighbors to our table with the same warmth and care that goes into every
                  dish we serve.
                </p>
                <p>
                  Our recipes are rooted in Italian tradition — handmade pastas, slow-simmered sauces,
                  and New York style pizza made fresh to order. Whether you're joining us for a weeknight
                  dinner, picking up a pizza through our drive-thru, or celebrating a special occasion,
                  you'll always be treated like family. That's not just a saying here — it's who we are.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="inline-flex items-center gap-2 bg-terracotta-500/10 text-terracotta-500 px-4 py-2 rounded-sm">
                  <Wine size={16} />
                  <span className="font-body text-sm font-semibold">BYOB Welcome</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-olive-500/10 text-olive-500 px-4 py-2 rounded-sm">
                  <span className="font-body text-sm font-semibold">Free Wi-Fi</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-sm overflow-hidden border border-cream-400/40 shadow-lg">
                <img
                  src="/Tavis_Food_Images/Bruchetta.jpg"
                  alt="Bruschetta at Tavi's Italian Restaurant"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stone-bg py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-terracotta-400 text-xs tracking-[0.3em] uppercase">
              Why Choose Us
            </span>
            <h2 className="font-display text-espresso-500 text-3xl sm:text-4xl font-bold mt-2 mb-4">
              What Makes Us Special
            </h2>
            <div className="section-divider">
              <svg width="20" height="20" viewBox="0 0 20 20" className="text-olive-500" fill="currentColor">
                <path d="M10 0L12.2 7.6H20L13.8 12.4L16.2 20L10 15.2L3.8 20L6.2 12.4L0 7.6H7.8L10 0Z" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group bg-cream-100 rounded-sm p-8 text-center border border-cream-400/40 hover:border-terracotta-300/40 transition-all duration-500 hover:shadow-lg hover:shadow-terracotta-500/5"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta-500/10 text-terracotta-500 mb-4 group-hover:bg-terracotta-500/20 transition-colors duration-500">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-espresso-500 text-lg font-semibold mb-2">
                  {title}
                </h3>
                <p className="font-body text-espresso-300 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="parchment-bg texture-overlay py-20 sm:py-28">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-body text-terracotta-400 text-xs tracking-[0.3em] uppercase">
              Our Guests
            </span>
            <h2 className="font-display text-espresso-500 text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 italic">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-4 my-6">
              <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-cream-500" />
              <StarRating />
              <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-cream-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review) => (
              <div
                key={review.name}
                className="group stone-bg border border-cream-400/40 rounded-sm p-8 hover:border-terracotta-300/30 transition-all duration-500 hover:shadow-lg hover:shadow-terracotta-500/5"
              >
                <Quote size={28} className="text-terracotta-400/30 mb-4 group-hover:text-terracotta-400/50 transition-colors duration-500" />
                <p className="font-body text-espresso-400 text-sm leading-[1.9] mb-6 italic">
                  "{review.text}"
                </p>
                <div className="border-t border-cream-400/40 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-espresso-500 font-semibold">{review.name}</span>
                    <StarRating />
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {review.ratings.food && <RatingBadge label="Food" value={review.ratings.food} />}
                    {review.ratings.service && <RatingBadge label="Service" value={review.ratings.service} />}
                    {review.ratings.atmosphere && <RatingBadge label="Atmosphere" value={review.ratings.atmosphere} />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {reviews.slice(3).map((review) => (
              <div
                key={review.name}
                className="group stone-bg border border-cream-400/40 rounded-sm p-8 hover:border-terracotta-300/30 transition-all duration-500 hover:shadow-lg hover:shadow-terracotta-500/5"
              >
                <Quote size={28} className="text-terracotta-400/30 mb-4 group-hover:text-terracotta-400/50 transition-colors duration-500" />
                <p className="font-body text-espresso-400 text-sm leading-[1.9] mb-6 italic">
                  "{review.text}"
                </p>
                <div className="border-t border-cream-400/40 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-espresso-500 font-semibold">{review.name}</span>
                    <StarRating />
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {review.ratings.food && <RatingBadge label="Food" value={review.ratings.food} />}
                    {review.ratings.service && <RatingBadge label="Service" value={review.ratings.service} />}
                    {review.ratings.atmosphere && <RatingBadge label="Atmosphere" value={review.ratings.atmosphere} />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://share.google/2oZ1a8OZ70Vr0dCfn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-terracotta-500 hover:bg-terracotta-400 text-cream-100 px-8 py-4 rounded-sm font-body text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-700/30"
            >
              Leave Us a Review on Google
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
