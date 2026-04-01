import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import RisingPetals from './RisingPetals';
import FloatingShapes from './FloatingShapes';

const galleryImages = [
  { src: '/reception.jpg',         alt: 'Aura Clinic Reception' },
  { src: '/treatment-room-01.jpg', alt: 'Treatment Room' },
  { src: '/treatment-room-02.jpg', alt: 'Treatment Room' },
  { src: '/treatment-01.jpg',      alt: 'Treatment' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center pt-20 pb-4 overflow-hidden bg-aura-cream">
      <FloatingShapes />
      <RisingPetals />
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-aura-beige/20 via-transparent to-aura-cream z-[1]" />

      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-6 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-xl"
        >
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-aura-charcoal/50">
              The Flagship London Clinic
            </span>
            <h1 className="text-4xl md:text-5xl font-serif leading-[1.05] text-aura-charcoal">
              Refined <br />
              <span className="italic font-normal">Treatments,</span> <br />
              Beautiful <br />
              Results.
            </h1>
          </div>

          <p className="text-sm text-aura-charcoal/70 leading-relaxed font-light">
            Welcome to Aura. We provide medically-led aesthetics in the heart of London, focused on enhancing your natural beauty through advanced skincare and precision injectables.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="btn-primary px-10 py-5">
              Book Consultation
            </button>
            <button className="btn-secondary px-10 py-5">
              View Treatments
            </button>
          </div>
        </motion.div>

        <div className="flex justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-[55%] aspect-[4/5] md:aspect-[3/4] overflow-hidden shadow-2xl rounded-sm"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={galleryImages[current].src}
              alt={galleryImages[current].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-aura-charcoal/5 z-10" />
          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {galleryImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white scale-125' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-aura-charcoal/30 rotate-90 origin-left ml-3">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-aura-charcoal/10" />
      </motion.div>
    </section>
  );
};

export default Hero;
