import { Link } from 'react-router-dom';

const featureCards = [
  {
    heading: 'Family Owned',
    subtitle: 'Run with love since day one',
    image: '/Tavis_Food_Images/Tavis_Restaurant.jpg',
  },
  {
    heading: 'Homemade Recipes',
    subtitle: 'Fresh pasta & sauces made daily',
    image: '/Tavis_Food_Images/Lobster_Ravioli.jpg',
  },
  {
    heading: 'BYOB Welcome',
    subtitle: 'Bring your favorite bottle',
    image: '/Wine.png',
  },
];

function TricolorStripe() {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="h-px flex-1 bg-cream-400/40" />
      <div className="tricolor-stripe w-20 rounded-full" />
      <div className="h-px flex-1 bg-cream-400/40" />
    </div>
  );
}

export default function About() {
  return (
    <section id="welcome" className="parchment-bg texture-overlay py-20 sm:py-28">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="order-1 lg:order-1">
            <div className="relative rounded-sm overflow-hidden shadow-xl shadow-espresso-500/10">
              <img
                src="/Tavis_Staff.jpg"
                alt="Tavi's staff"
                className="w-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-700/30 to-transparent" />
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <span className="font-body text-terracotta-400 text-xs tracking-[0.3em] uppercase">
              Welcome to
            </span>
            <h2 className="font-display text-espresso-500 text-4xl sm:text-5xl lg:text-[3.4rem] font-bold mt-1 leading-tight">
              Tavi's
            </h2>

            <TricolorStripe />

            <p className="font-body text-espresso-400 text-lg leading-[1.9] text-left">
              Since opening our doors in Seven Points, Tavi's Italian Restaurant has been
              serving Cedar Creek Lake the kind of authentic Italian food that turns first-time
              visitors into family. Every dish is made with care using traditional recipes — from
              our hand-tossed New York style pizza to our homemade pastas and sauces. Come as a
              guest, leave as family.
            </p>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center font-body text-terracotta-500 hover:text-terracotta-400 text-sm tracking-wider underline underline-offset-4 decoration-terracotta-300/40 hover:decoration-terracotta-400 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featureCards.map((card) => (
            <div
              key={card.heading}
              className="group relative h-[300px] sm:h-[340px] rounded-lg overflow-hidden cursor-default"
            >
              <img
                src={card.image}
                alt={card.heading}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{ backgroundColor: 'rgba(43, 30, 22, 0.58)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(43, 30, 22, 0.38)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(43, 30, 22, 0.58)'; }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h3 className="font-display text-cream-100 text-2xl sm:text-3xl font-bold mb-2 drop-shadow-lg">
                  {card.heading}
                </h3>
                <p className="font-body text-cream-200/80 text-sm sm:text-base tracking-wide drop-shadow-md">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
