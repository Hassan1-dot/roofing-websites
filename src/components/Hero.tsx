import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden" id="hero">
      {/* Full-bleed background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero_roofing_1782502992611.jpg" 
          alt="Luxury home with gleaming tile roof" 
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight mb-8">
            ROOFS BUILT FOR <span className="text-brand-gold">GENERATIONS.</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto tracking-wide">
            Master-crafted roofing solutions for Florida's most prestigious homes. 
            Protection meet's perfection.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => document.getElementById('quote-wizard')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full md:w-auto px-8 py-5 bg-white text-black font-display font-bold text-lg rounded-full flex items-center justify-center gap-2 hover:bg-brand-gold hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
              id="cta-hero"
            >
              Get Your Free Estimate
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Trust earned immediately - partially overlaying hero bottom */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center px-6">
         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="bg-white/95 backdrop-blur-xl px-8 py-6 rounded-2xl shadow-2xl flex flex-wrap items-center justify-center gap-8 md:gap-12 border border-black/5"
         >
           <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center gap-1 text-brand-gold mb-1">
               {[1, 2, 3, 4, 5].map((s) => (
                 <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
               ))}
             </div>
             <p className="text-black font-bold text-sm">4.9/5 ON GOOGLE REVIEWS</p>
           </div>
           
           <div className="h-10 w-px bg-black/10 hidden md:block" />

           <div className="flex items-center gap-6">
             <div className="flex flex-col items-center">
               <span className="text-black font-display font-black text-xl leading-none">GAF</span>
               <span className="text-[10px] font-bold text-black/60 tracking-widest">CERTIFIED</span>
             </div>
             <div className="flex flex-col items-center">
               <span className="text-black font-display font-black text-xl leading-none">OC</span>
               <span className="text-[10px] font-bold text-black/60 tracking-widest">PREFERRED</span>
             </div>
           </div>

           <div className="h-10 w-px bg-black/10 hidden md:block" />

           <div className="text-center md:text-left">
             <p className="text-black font-bold text-sm mb-0.5">0% FINANCING AVAILABLE</p>
             <p className="text-black/60 text-xs font-medium uppercase tracking-tighter">Instant Approval for Homeowners</p>
           </div>
         </motion.div>
      </div>
    </section>
  );
}
