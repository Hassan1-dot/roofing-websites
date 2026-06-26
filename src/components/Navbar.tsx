import { motion } from 'motion/react';
import { Phone, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 lg:px-12 pointer-events-none"
      id="navbar"
    >
      <div className="pointer-events-auto flex items-center gap-2 group cursor-pointer">
        <div className="size-10 bg-black flex items-center justify-center rounded-full transition-transform group-hover:scale-110">
          <span className="text-white font-display font-bold text-xl">A</span>
        </div>
        <span className="font-display font-bold text-2xl tracking-tighter text-white drop-shadow-sm">APEX ROOFING</span>
      </div>

      <div className="pointer-events-auto hidden lg:flex items-center gap-8 px-8 py-3 bg-black/10 backdrop-blur-md rounded-full border border-white/20">
        {['Gallery', 'Services', 'Locations', 'About'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-white text-sm font-medium tracking-wide hover:text-brand-gold transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="pointer-events-auto flex items-center gap-4">
        <a 
          href="tel:18005550199"
          className="hidden md:flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-brand-gold hover:text-white transition-all transform hover:scale-105"
        >
          <Phone size={16} />
          <span>(800) 555-0199</span>
        </a>
        <button className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white lg:hidden">
          <Menu size={24} />
        </button>
      </div>
    </motion.nav>
  );
}
