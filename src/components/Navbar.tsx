import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-espresso-700/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-espresso-700/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/Tavis_Logo.jpg"
              alt="Tavi's Italian Restaurant"
              className="h-12 max-h-14 w-auto object-contain"
            />
            <span className="font-display text-cream-100 text-lg hidden sm:block tracking-wide">
              Tavi's
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative font-body text-sm tracking-widest uppercase transition-colors duration-300 pb-1 ${
                  location.pathname === link.to
                    ? 'text-gold-400'
                    : 'text-cream-200 hover:text-gold-400'
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:9034320330"
              className="hidden sm:inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-400 text-cream-100 px-5 py-2.5 rounded-sm font-body text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-700/30"
            >
              <Phone size={15} />
              Call Now
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-cream-200 hover:text-gold-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-[60] transition-all duration-500 shadow-lg ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: '#3B2F2F' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <img
            src="/Tavis_Logo.jpg"
            alt="Tavi's Italian Restaurant"
            className="h-20 w-auto object-contain mb-4"
          />
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-display text-2xl tracking-wide transition-colors duration-300 hover:text-gold-400"
              style={{ color: location.pathname === link.to ? '#D4B86A' : '#F5F0E8' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:9034320330"
            className="mt-4 inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-400 px-8 py-3 rounded-sm font-body tracking-wider uppercase transition-all duration-300"
            style={{ color: '#F5F0E8' }}
          >
            <Phone size={16} />
            (903) 432-0330
          </a>
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 hover:text-gold-400 transition-colors"
            style={{ color: '#EDE5D8' }}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
}
