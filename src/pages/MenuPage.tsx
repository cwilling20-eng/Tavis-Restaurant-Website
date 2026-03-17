import { useState, useEffect, useRef } from 'react';
import { menuCategories, pizzaMenu, pizzaToppings } from '../data/menuData';
import type { MenuItem } from '../data/menuData';

const categoryIds = [
  ...menuCategories.map((c) => c.name),
  'New York Style Pizza',
];

function PageBanner() {
  return (
    <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Tavis_Food_Images/Tavis_Pizza.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso-700/80 via-espresso-600/70 to-espresso-700/90" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-display text-cream-100 text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 italic">
          Our Menu
        </h1>
        <p className="font-body text-cream-300 text-lg font-light">
          Authentic Italian Cuisine Made Fresh Daily
        </p>
      </div>
    </div>
  );
}

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <div className="group py-3 border-b border-cream-400/30 last:border-b-0">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="font-display text-espresso-500 text-base font-semibold group-hover:text-terracotta-500 transition-colors duration-300">
            {item.name}
          </h4>
          {item.description && (
            <p className="font-body text-espresso-300 text-sm mt-0.5 leading-relaxed">
              {item.description}
            </p>
          )}
          {item.note && (
            <p className="font-body text-terracotta-400 text-xs mt-1 italic">
              {item.note}
            </p>
          )}
        </div>
        <div className="shrink-0 text-right">
          {item.price && (
            <span className="font-body text-terracotta-500 font-bold text-sm">
              {item.price}
            </span>
          )}
          {item.prices && (
            <div className="flex flex-col gap-0.5">
              {item.prices.map((p) => (
                <span key={p.label} className="font-body text-sm">
                  <span className="text-espresso-300">{p.label}</span>{' '}
                  <span className="text-terracotta-500 font-bold">{p.price}</span>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PizzaSection() {
  const sizes = ['12" Small', '14" Medium', '16" Large', '18" X-Large'];

  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="min-w-[600px] px-4 sm:px-0">
        <div className="grid grid-cols-[1fr_repeat(4,80px)] sm:grid-cols-[1fr_repeat(4,100px)] gap-2 mb-4">
          <div />
          {sizes.map((size) => (
            <div key={size} className="text-center font-body text-xs sm:text-sm text-espresso-400 font-bold uppercase tracking-wide">
              {size}
            </div>
          ))}
        </div>

        {pizzaMenu.map((pizza) => (
          <div
            key={pizza.name}
            className="grid grid-cols-[1fr_repeat(4,80px)] sm:grid-cols-[1fr_repeat(4,100px)] gap-2 py-3 border-b border-cream-400/30 group hover:bg-cream-200/30 transition-colors duration-300"
          >
            <div>
              <h4 className="font-display text-espresso-500 text-base font-semibold group-hover:text-terracotta-500 transition-colors duration-300">
                {pizza.name}
              </h4>
              {pizza.description && (
                <p className="font-body text-espresso-300 text-xs sm:text-sm mt-0.5">{pizza.description}</p>
              )}
            </div>
            {pizza.prices.map((price, i) => (
              <div key={i} className="text-center font-body text-terracotta-500 font-bold text-sm self-center">
                {price}
              </div>
            ))}
          </div>
        ))}

        <div className="mt-2 pt-2">
          {pizzaToppings.map((topping) => (
            <div
              key={topping.name}
              className="grid grid-cols-[1fr_repeat(4,80px)] sm:grid-cols-[1fr_repeat(4,100px)] gap-2 py-3 border-b border-cream-400/30 last:border-b-0"
            >
              <div>
                <h4 className="font-display text-espresso-500 text-sm font-semibold italic">
                  {topping.name}
                </h4>
                {topping.description && (
                  <p className="font-body text-espresso-300 text-xs mt-0.5">{topping.description}</p>
                )}
              </div>
              {topping.prices.map((price, i) => (
                <div key={i} className="text-center font-body text-terracotta-400 text-sm self-center">
                  {price}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(categoryIds[0]);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const name = entry.target.getAttribute('data-category');
            if (name) setActiveCategory(name);
          }
        }
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (name: string) => {
    const el = sectionRefs.current[name];
    if (el) {
      const offset = 130;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <PageBanner />

      <div className="parchment-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="stone-bg rounded-sm border border-cream-400/40 p-4 sm:p-6 text-center">
            <p className="font-display text-terracotta-500 text-sm sm:text-base italic">
              All entrees served with homemade rolls & house salad
            </p>
            <p className="font-body text-espresso-300 text-xs sm:text-sm mt-1">
              Upgrade to Alfredo sauce for $2.95 &middot; Upgrade to Caesar or Greek salad for $3.75
            </p>
          </div>
        </div>

        <div
          ref={navRef}
          className="sticky top-[64px] z-40 bg-cream-100/95 backdrop-blur-md border-b border-cream-400/40 shadow-sm"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto scrollbar-hide -mx-4 sm:mx-0">
              <div className="flex gap-1 px-4 sm:px-0 py-3 min-w-max">
                {categoryIds.map((name) => (
                  <button
                    key={name}
                    onClick={() => scrollToCategory(name)}
                    className={`shrink-0 px-3 py-2 rounded-sm font-body text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
                      activeCategory === name
                        ? 'bg-terracotta-500 text-cream-100 shadow-md shadow-terracotta-700/20'
                        : 'text-espresso-400 hover:bg-cream-300 hover:text-espresso-500'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {menuCategories.map((category) => (
            <section
              key={category.name}
              id={slugify(category.name)}
              data-category={category.name}
              ref={(el) => { sectionRefs.current[category.name] = el; }}
              className="mb-16 last:mb-0"
            >
              <h2 className="font-display text-terracotta-500 text-2xl sm:text-3xl italic font-semibold mb-2 text-center">
                {category.name}
              </h2>
              {category.note && (
                <p className="font-body text-espresso-300 text-sm text-center mb-4 italic">
                  {category.note}
                </p>
              )}
              <div className="tricolor-stripe max-w-[100px] mx-auto mb-8 rounded-full" />

              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {category.items.map((item) => (
                  <MenuItemRow key={item.name} item={item} />
                ))}
              </div>
            </section>
          ))}

          <section
            id="new-york-style-pizza"
            data-category="New York Style Pizza"
            ref={(el) => { sectionRefs.current['New York Style Pizza'] = el; }}
            className="mb-16"
          >
            <h2 className="font-display text-terracotta-500 text-2xl sm:text-3xl italic font-semibold mb-2 text-center">
              New York Style Pizza
            </h2>
            <div className="tricolor-stripe max-w-[100px] mx-auto mb-8 rounded-full" />
            <PizzaSection />
          </section>
        </div>
      </div>
    </div>
  );
}
