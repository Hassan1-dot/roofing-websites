import { motion } from 'motion/react';

const galleryImages = [
  {
    id: '1',
    src: '/src/assets/images/gallery_before_after_1782503011409.jpg',
    title: 'Precision Asphalt Install',
    category: 'Before & After'
  },
  {
    id: '2',
    src: '/src/assets/images/gallery_detail_1782503029588.jpg',
    title: 'Luxury Terracotta Detail',
    category: 'Residential'
  },
  {
    id: '3',
    src: '/src/assets/images/gallery_mansion_1782503046346.jpg',
    title: 'Coastal Estate Project',
    category: 'Full Replacement'
  }
];

export default function Gallery() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">CRAFTSMANSHIP ON DISPLAY.</h2>
            <p className="text-black/60 text-lg tracking-wide font-light">
              We don't just build roofs; we install peace of mind. Every project is a testament to our commitment to excellence and Florida's unique architectural heritage.
            </p>
          </div>
          <div className="flex gap-2">
             <div className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium cursor-pointer">All Projects</div>
             <div className="px-6 py-2 bg-black/5 text-black rounded-full text-sm font-medium cursor-pointer hover:bg-black/10 transition-colors">Residential</div>
             <div className="px-6 py-2 bg-black/5 text-black rounded-full text-sm font-medium cursor-pointer hover:bg-black/10 transition-colors">Commercial</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              id={`gallery-item-${item.id}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-4 bg-black/5">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="text-white font-medium bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs uppercase tracking-widest border border-white/30">
                    View Project
                  </span>
                </div>
              </div>
              <div className="px-2">
                <p className="text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-1">{item.category}</p>
                <h3 className="text-xl font-bold font-display tracking-tight group-hover:text-brand-gold transition-colors">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
