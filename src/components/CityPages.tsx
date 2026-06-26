import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const cities = [
  'Miami', 'Fort Lauderdale', 'West Palm Beach', 'Boca Raton', 
  'Naples', 'Coral Gables', 'Aventura', 'Jupiter', 
  'Delray Beach', 'Sarasota', 'Key Biscayne', 'Fort Myers'
];

export default function CityPages() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-black text-white overflow-hidden" id="locations">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-center">
        <div className="lg:w-1/3">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 tracking-tighter leading-none">
            PROTECTING FLORIDA'S <span className="text-brand-gold italic font-light">FINEST CITIES.</span>
          </h2>
          <p className="text-white/60 font-light text-lg mb-10 tracking-wide leading-relaxed">
            From the historic estates of Coral Gables to the modern high-rises of Miami, we provide localized expertise for every neighborhood we serve.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-sm font-medium group hover:bg-white hover:text-black transition-all cursor-pointer">
            <MapPin size={16} className="text-brand-gold" />
            View Service Map
          </div>
        </div>
        
        <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <motion.a
              key={city}
              href={`#${city.toLowerCase().replace(' ', '-')}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-4 group hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 transform hover:-translate-y-1"
              id={`city-${city}`}
            >
              <span className="text-white group-hover:text-black font-display font-bold text-lg">{city}</span>
              <div className="size-8 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-black/20 text-white group-hover:text-black self-end">
                <MapPin size={14} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
