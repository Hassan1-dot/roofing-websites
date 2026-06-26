import { Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 lg:px-12 border-t border-black/5" id="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer w-fit">
              <div className="size-10 bg-black flex items-center justify-center rounded-full transition-transform group-hover:scale-110">
                <span className="text-white font-display font-bold text-xl">A</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter text-black">APEX ROOFING</span>
            </div>
            <p className="text-black/60 font-light leading-relaxed mb-8 max-w-xs">
              Setting the standard for premium roofing excellence across Florida since 1998. Licensed, insured, and dedicated to the craft.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="size-10 flex items-center justify-center border border-black/10 rounded-full hover:bg-black hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-black/40 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Gallery', 'Services', 'Locations', 'About'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-black font-medium hover:text-brand-gold transition-colors flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-black/40 mb-8">Services</h4>
             <ul className="space-y-4">
               {['Residential Roofing', 'Commercial Roofing', 'Tile Specialists', 'Metal Roofing', 'Emergency Repair'].map((item) => (
                 <li key={item}>
                   <a href="#" className="text-black font-medium hover:text-brand-gold transition-colors">{item}</a>
                 </li>
               ))}
             </ul>
          </div>

          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-black/40 mb-8">Headquarters</h4>
            <div className="space-y-6">
               <div>
                 <p className="text-black font-bold mb-1">Miami Design District</p>
                 <p className="text-black/60 font-light">123 Design Avenue, Ste 500<br />Miami, FL 33137</p>
               </div>
               <div>
                 <p className="text-black font-bold mb-1">Contact</p>
                 <p className="text-black/60 font-light hover:text-black transition-colors cursor-pointer">hello@apexroofing.com</p>
                 <p className="text-black font-bold text-xl mt-1">(800) 555-0199</p>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-black/40 text-xs font-medium uppercase tracking-widest">
            © 2024 APEX ROOFING ENTITY, INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-xs font-bold text-black/40 uppercase tracking-widest">
             <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
