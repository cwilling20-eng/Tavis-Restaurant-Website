import { Link } from 'react-router-dom';

const featuredDishes = [
  {
    name: 'Lobster Ravioli',
    description: 'A beloved favorite with rich, succulent lobster in delicate pasta',
    price: '$14.95',
    image: '/Tavis_Food_Images/Lobster_Ravioli.jpg',
  },
  {
    name: 'Chicken Scar Pella',
    description: 'Roasted red peppers, onions & mushrooms in creamy pink sauce with Provolone',
    price: '$14.95',
    image: '/Tavis_Food_Images/Chicken_Scar_Pella.jpg',
  },
  {
    name: "Tavi's Special Pizza",
    description: 'Loaded with pepperoni, Canadian bacon, sausage, hamburger, mushrooms & more',
    price: 'From $14.95',
    image: '/Tavis_Food_Images/Supreme_Pizza.jpg',
  },
  {
    name: 'House Trio',
    description: 'Homemade lasagna, chicken parmigiana & fettuccine Alfredo',
    price: '$14.95',
    image: '/Tavis_Food_Images/House_Trio.jpg',
  },
  {
    name: 'Frutti di Mare',
    description: 'Shrimp, scallops, clams, mussels & calamari on a bed of linguine',
    price: '$17.95',
    image: '/Tavis_Food_Images/Shrimp_Pomodoro.jpg',
  },
  {
    name: 'Chicken Marsala',
    description: 'Sauteed with fresh mushrooms and sweet Marsala wine sauce',
    price: '$12.95',
    image: '/Tavis_Food_Images/Steak_Marsala.jpg',
  },
];

export default function FeaturedDishes() {
  return (
    <section className="stone-bg py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-body text-terracotta-400 text-xs tracking-[0.3em] uppercase">
            From Our Kitchen
          </span>
          <h2 className="font-display text-espresso-500 text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4 italic">
            House Favorites
          </h2>
          <div className="section-divider">
            <svg width="20" height="20" viewBox="0 0 20 20" className="text-olive-500" fill="currentColor">
              <path d="M10 0L12.2 7.6H20L13.8 12.4L16.2 20L10 15.2L3.8 20L6.2 12.4L0 7.6H7.8L10 0Z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredDishes.map((dish) => (
            <div
              key={dish.name}
              className="group bg-cream-100 rounded-sm overflow-hidden border border-cream-400/40 hover:border-terracotta-300/40 transition-all duration-500 hover:shadow-xl hover:shadow-espresso-500/10"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 right-3 bg-terracotta-500/90 backdrop-blur-sm text-cream-100 px-3 py-1 rounded-sm">
                  <span className="font-body text-sm font-bold">{dish.price}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-espresso-500 text-xl font-semibold mb-2">
                  {dish.name}
                </h3>
                <p className="font-body text-espresso-300 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-block bg-terracotta-500 hover:bg-terracotta-400 text-cream-100 px-8 py-4 rounded-sm font-body text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-xl hover:shadow-terracotta-700/30"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
