import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook } from 'lucide-react';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-espresso-700 text-cream-200">
      <div className="tricolor-stripe" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img
                src="/Tavis_Logo.jpg"
                alt="Tavi's Italian Restaurant"
                className="h-14 w-14 rounded-full object-cover border-2 border-cream-300/20"
              />
              <div>
                <h3 className="font-display text-cream-100 text-xl font-bold">
                  Tavi's
                </h3>
                <p className="font-body text-cream-400 text-xs italic">
                  Italian Restaurant
                </p>
              </div>
            </div>
            <p className="font-body text-cream-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Family Owned & Operated in Seven Points, Texas. Serving authentic Italian cuisine on Cedar Creek Lake.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-display text-cream-100 text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block font-body text-cream-400 hover:text-gold-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-display text-cream-100 text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:9034320330"
                className="flex items-center justify-center md:justify-start gap-2 font-body text-cream-300 hover:text-gold-400 transition-colors duration-300"
              >
                <Phone size={14} />
                (903) 432-0330
              </a>
              <a
                href="https://www.google.com/maps/dir//701+E+Cedar+Creek+Pkwy,+Seven+Points,+TX+75143"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 font-body text-cream-300 hover:text-gold-400 transition-colors duration-300 text-sm"
              >
                <MapPin size={14} className="shrink-0" />
                <span>701 E Cedar Creek Pkwy, Seven Points, TX 75143</span>
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-display text-cream-100 text-sm uppercase tracking-widest mb-4">
              Hours
            </h4>
            <div className="font-body text-cream-400 text-sm space-y-1">
              <p>Monday: Closed</p>
              <p>Sun - Thu: 11am - 9pm</p>
              <p>Fri - Sat: 11am - 10pm</p>
            </div>
            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="https://www.facebook.com/TavisRestaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cream-100/10 hover:bg-terracotta-500 text-cream-300 hover:text-cream-100 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="font-body text-cream-500 text-xs text-center tracking-wide">
            &copy; {new Date().getFullYear()} Tavi's Italian Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
