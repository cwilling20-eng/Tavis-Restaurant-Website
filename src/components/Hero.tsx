import { Link } from 'react-router-dom';
import { Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Tavis_Food_Images/Tavis_Italian_Restaurant.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-700/80 via-espresso-600/70 to-espresso-700/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso-700/30 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img
            src="/Tavis_Logo.jpg"
            alt="Tavi's Italian Restaurant"
            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain rounded-full border-4 border-cream-300/20 shadow-2xl"
          />
        </div>

        <div className="inline-block mb-6">
          <span className="font-body text-gold-400 text-xs sm:text-sm tracking-[0.3em] uppercase">
            Family Owned & Operated
          </span>
        </div>

        <h1 className="font-display text-cream-100 text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Tavi's Italian Restaurant
        </h1>

        <div className="tricolor-stripe max-w-[200px] mx-auto mb-6 rounded-full" />

        <p className="font-body text-cream-300 text-lg sm:text-xl mb-4 font-light leading-relaxed max-w-2xl mx-auto">
          Authentic Italian Cuisine & New York Style Pizza on Cedar Creek Lake
        </p>

        <div className="inline-flex items-center gap-2 bg-terracotta-500/80 backdrop-blur-sm text-cream-100 px-5 py-2 rounded-sm mb-10">
          <span className="font-display text-sm italic tracking-wide">BYOB</span>
          <span className="text-cream-300/60 mx-1">|</span>
          <span className="font-body text-xs tracking-widest uppercase">Bring Your Own Bottle</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/menu"
            className="group bg-terracotta-500 hover:bg-terracotta-400 text-cream-100 px-8 py-4 rounded-sm font-body text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-700/30 w-full sm:w-auto text-center"
          >
            View Our Menu
          </Link>
          <a
            href="tel:9034320330"
            className="group inline-flex items-center justify-center gap-2 border-2 border-cream-300/30 hover:border-gold-400/60 text-cream-100 px-8 py-4 rounded-sm font-body text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-cream-100/5 w-full sm:w-auto"
          >
            <Phone size={16} className="group-hover:animate-pulse" />
            (903) 432-0330
          </a>
        </div>
      </div>

      <button
        onClick={() => {
          const el = document.getElementById('welcome');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-300/50 hover:text-cream-100 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
