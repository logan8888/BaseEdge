import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import RisingPetals from './RisingPetals';

const galleryImages = [
  { src: '/treatment-01.jpg', alt: 'Treatment' },
  { src: '/treatment-02.jpg', alt: 'Treatment' },
  { src: '/treatment-03.jpg', alt: 'Treatment' },
  { src: '/treatment-04.jpg', alt: 'Treatment' },
];

const categories = [
  { name: "Anti-wrinkle", desc: "Smooth and rejuvenate your expression with precision injectables." },
  { name: "Dermal Filler", desc: "Restore volume and define your features with artistic flair." },
  { name: "Skin Booster", desc: "Hydrate and revitalize your skin from within for a luminous glow." },
  { name: "Facials", desc: "Experience our signature clinical facials for immediate skin health." },
  { name: "Medical Skincare", desc: "Prescription-grade products tailored to your skin's needs." },
  { name: "Consultation", desc: "A comprehensive assessment of your skin and aesthetic goals." },
];

const Treatments = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="treatments" className="relative bg-aura-beige/30 py-10 md:py-16 overflow-hidden">
      <RisingPetals />
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="order-2 md:order-1"
          >
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-aura-charcoal/50">
                  Our Services
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-aura-charcoal leading-[1.05]">
                  Bespoke <br />
                  <span className="italic">Offerings.</span>
                </h2>
              </div>
              
              <div className="grid gap-6">
                {categories.map((cat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group flex flex-col gap-2 cursor-pointer border-b border-aura-charcoal/5 pb-4 hover:border-aura-charcoal/20 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-base md:text-lg font-serif text-aura-charcoal transition-all duration-300 group-hover:pl-2 group-hover:italic">
                        {cat.name}
                      </h3>
                      <span className="text-aura-charcoal/30 group-hover:text-aura-charcoal transition-all duration-300">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                    <p className="text-xs md:text-sm font-light text-aura-charcoal/50 max-w-md group-hover:text-aura-charcoal/70 transition-colors duration-300">
                      {cat.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-2">
                <button className="btn-primary px-10 py-5">
                  Explore Treatments
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl relative z-10">
              <AnimatePresence>
                <motion.img
                  key={current}
                  src={galleryImages[current].src}
                  alt={galleryImages[current].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white scale-125' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
