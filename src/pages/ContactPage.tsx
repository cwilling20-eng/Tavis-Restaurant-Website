import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Wifi, Wine, UtensilsCrossed, Facebook, Send, Car } from 'lucide-react';

const hours = [
  { day: 'Monday', time: 'Closed', closed: true },
  { day: 'Tuesday', time: '11am \u2013 9pm', closed: false },
  { day: 'Wednesday', time: '11am \u2013 9pm', closed: false },
  { day: 'Thursday', time: '11am \u2013 9pm', closed: false },
  { day: 'Friday', time: '11am \u2013 10pm', closed: false },
  { day: 'Saturday', time: '11am \u2013 10pm', closed: false },
  { day: 'Sunday', time: '11am \u2013 9pm', closed: false },
];

const services = [
  { icon: UtensilsCrossed, label: 'Dine-In' },
  { icon: Car, label: 'Drive-Thru' },
  { icon: Navigation, label: 'Takeout' },
];

const amenities = [
  { icon: Wine, label: 'BYOB Welcome' },
  { icon: Wifi, label: 'Free Wi-Fi' },
  { label: 'Outdoor Seating' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\n${formData.message}`
    );
    window.location.href = `mailto:info@tavisitalian.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/Tavis_Food_Images/Tavis_Italian_Restaurant.jpg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-700/80 via-espresso-600/70 to-espresso-700/90" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-cream-100 text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 italic">
            Visit Us
          </h1>
          <p className="font-body text-cream-300 text-lg font-light">
            We'd Love to See You
          </p>
        </div>
      </div>

      <section className="parchment-bg texture-overlay py-20 sm:py-28">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="stone-bg rounded-sm border border-cream-400/40 p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-8">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-terracotta-500/10 flex items-center justify-center text-terracotta-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-espresso-500 text-lg font-semibold mb-1">
                      Address
                    </h3>
                    <p className="font-body text-espresso-400 leading-relaxed">
                      701 E Cedar Creek Pkwy<br />
                      Seven Points, TX 75143
                    </p>
                    <a
                      href="https://www.google.com/maps/dir//701+E+Cedar+Creek+Pkwy,+Seven+Points,+TX+75143"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-body text-terracotta-500 hover:text-terracotta-400 text-sm mt-2 transition-colors duration-300"
                    >
                      <Navigation size={14} />
                      Get Directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-8">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-terracotta-500/10 flex items-center justify-center text-terracotta-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-espresso-500 text-lg font-semibold mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:9034320330"
                      className="font-display text-terracotta-500 hover:text-terracotta-400 text-2xl font-bold transition-colors duration-300"
                    >
                      (903) 432-0330
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-terracotta-500/10 flex items-center justify-center text-terracotta-500">
                    <Clock size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-espresso-500 text-lg font-semibold mb-3">
                      Hours
                    </h3>
                    <div className="space-y-1.5">
                      {hours.map((h) => (
                        <div
                          key={h.day}
                          className={`flex justify-between items-center font-body text-sm ${
                            h.closed ? 'text-terracotta-400' : 'text-espresso-400'
                          }`}
                        >
                          <span className="font-semibold">{h.day}</span>
                          <span>{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {services.map(({ icon: Icon, label }) => (
                  <div key={label} className="stone-bg rounded-sm border border-cream-400/40 p-4 text-center">
                    <Icon size={20} className="text-terracotta-500 mx-auto mb-2" strokeWidth={1.5} />
                    <span className="font-body text-espresso-400 text-xs tracking-wide">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {amenities.map(({ icon: Icon, label }) => (
                  <div key={label} className="inline-flex items-center gap-2 bg-olive-500/10 text-olive-600 px-4 py-2 rounded-sm">
                    {Icon && <Icon size={16} />}
                    <span className="font-body text-sm font-semibold">{label}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://www.facebook.com/TavisRestaurant"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-espresso-400 hover:text-terracotta-500 transition-colors duration-300"
              >
                <Facebook size={18} />
                <span className="text-sm">Follow us on Facebook</span>
              </a>
            </div>

            <div className="space-y-8">
              <div className="rounded-sm overflow-hidden border border-cream-400/40 shadow-lg h-[350px] sm:h-[400px]">
                <iframe
                  title="Tavi's Italian Restaurant Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.5!2d-96.2166!3d32.3192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea0c5e7df0a49%3A0x4a4bde5e36c8d1e0!2s701%20E%20Cedar%20Creek%20Pkwy%2C%20Seven%20Points%2C%20TX%2075143!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="stone-bg rounded-sm border border-cream-400/40 p-6 sm:p-8">
                <h3 className="font-display text-espresso-500 text-xl font-semibold mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="font-body text-espresso-400 text-sm mb-1 block">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-cream-100 border border-cream-400/60 rounded-sm font-body text-espresso-500 text-sm focus:outline-none focus:border-terracotta-400 focus:ring-1 focus:ring-terracotta-400/30 transition-all duration-300"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="font-body text-espresso-400 text-sm mb-1 block">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-cream-100 border border-cream-400/60 rounded-sm font-body text-espresso-500 text-sm focus:outline-none focus:border-terracotta-400 focus:ring-1 focus:ring-terracotta-400/30 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="font-body text-espresso-400 text-sm mb-1 block">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-cream-100 border border-cream-400/60 rounded-sm font-body text-espresso-500 text-sm focus:outline-none focus:border-terracotta-400 focus:ring-1 focus:ring-terracotta-400/30 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="font-body text-espresso-400 text-sm mb-1 block">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-cream-100 border border-cream-400/60 rounded-sm font-body text-espresso-500 text-sm focus:outline-none focus:border-terracotta-400 focus:ring-1 focus:ring-terracotta-400/30 transition-all duration-300 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-400 text-cream-100 px-6 py-3 rounded-sm font-body text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-terracotta-700/30"
                  >
                    <Send size={15} />
                    {submitted ? 'Opening Email...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
