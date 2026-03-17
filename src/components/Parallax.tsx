import { Star } from 'lucide-react';

export default function Parallax() {
  return (
    <section className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/Tavis_Food_Images/Shrimp_Alfredo.jpg)',
        }}
      />
      <div className="absolute inset-0 bg-espresso-700/60" />

      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-3xl">
          <div className="h-px w-24 bg-gold-500/50 mx-auto mb-8" />

          <p className="font-display text-cream-100 text-2xl sm:text-3xl lg:text-4xl italic leading-relaxed mb-6">
            "This place is a hidden gem! Definitely the best Italian food on Cedar Creek Lake."
          </p>

          <div className="flex items-center justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
            ))}
          </div>

          <p className="font-body text-cream-300 text-sm tracking-widest uppercase">
            &mdash; Ryan Clifford
          </p>

          <div className="h-px w-24 bg-gold-500/50 mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
}
