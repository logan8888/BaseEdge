import { motion } from 'framer-motion';

const Location = () => {
  return (
    <section id="location" className="bg-aura-charcoal/5 py-10 md:py-14 overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-aura-charcoal/50">
                Our Flagship Clinic
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-aura-charcoal leading-[1.05]">
                A Sanctuary <br />
                <span className="italic">in the City.</span>
              </h2>
            </div>
            
            <div className="flex flex-col gap-10 max-w-md">
              <p className="text-sm text-aura-charcoal/70 leading-relaxed font-light">
                Our London flagship clinic is designed as a sanctuary of calm, offering a discreet and luxurious environment for your aesthetic journey.
              </p>
              
              <div className="flex flex-col gap-6 pt-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-aura-charcoal/80">Address</span>
                  <p className="text-sm font-light text-aura-charcoal/60 leading-relaxed italic">
                    12 Harley Street, Marylebone <br />
                    London W1G 9PG
                  </p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-aura-charcoal/80">Opening Hours</span>
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between text-sm font-light text-aura-charcoal/60 italic border-b border-aura-charcoal/5 pb-1">
                      <span>Mon – Fri</span>
                      <span>09:00 – 19:00</span>
                    </div>
                    <div className="flex justify-between text-sm font-light text-aura-charcoal/60 italic border-b border-aura-charcoal/5 pb-1">
                      <span>Saturday</span>
                      <span>10:00 – 17:00</span>
                    </div>
                    <div className="flex justify-between text-sm font-light text-aura-charcoal/60 italic">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <button className="btn-primary">
                  Book Your Visit
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative z-10 group">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-aura-stone/10 flex items-center justify-center">
                 <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08759df9a73?auto=format&fit=crop&q=80&w=1200" 
                  alt="Luxury Clinic Exterior" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-aura-charcoal/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 text-white z-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Harley Street</span>
                </div>
              </div>
            </div>
            {/* Aesthetic Decor */}
            <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-aura-taupe/20 rounded-full blur-3xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
