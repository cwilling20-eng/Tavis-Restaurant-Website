import { MapPin, Phone, Clock, Navigation, Wifi, Wine, UtensilsCrossed } from 'lucide-react';

const hours = [
  { day: 'Monday', time: 'Closed', closed: true },
  { day: 'Tuesday', time: '11am \u2013 9pm', closed: false },
  { day: 'Wednesday', time: '11am \u2013 9pm', closed: false },
  { day: 'Thursday', time: '11am \u2013 9pm', closed: false },
  { day: 'Friday', time: '11am \u2013 10pm', closed: false },
  { day: 'Saturday', time: '11am \u2013 10pm', closed: false },
  { day: 'Sunday', time: '11am \u2013 9pm', closed: false },
];

const amenities = [
  { icon: UtensilsCrossed, label: 'Dine-In' },
  { icon: Navigation, label: 'Drive-Thru' },
  { icon: Wine, label: 'BYOB Welcome' },
  { icon: Wifi, label: 'Free Wi-Fi' },
];

export default function Location() {
  return (
    <section id="contact" className="parchment-bg texture-overlay py-20 sm:py-28">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-body text-terracotta-400 text-xs tracking-[0.3em] uppercase">
            Come Visit Us
          </span>
          <h2 className="font-display text-espresso-500 text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 italic">
            Find Us
          </h2>
          <div className="section-divider">
            <MapPin size={20} className="text-olive-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="rounded-sm overflow-hidden border border-cream-400/40 shadow-lg h-[300px] sm:h-[400px]">
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
          </div>

          <div className="space-y-8">
            <div className="stone-bg rounded-sm border border-cream-400/40 p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
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

              <div className="flex items-start gap-4 mb-6">
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

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {amenities.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="stone-bg rounded-sm border border-cream-400/40 p-4 text-center"
                >
                  <Icon
                    size={20}
                    className="text-terracotta-500 mx-auto mb-2"
                    strokeWidth={1.5}
                  />
                  <span className="font-body text-espresso-400 text-xs tracking-wide">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
