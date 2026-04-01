import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-aura-charcoal text-aura-cream py-8 md:py-12 pb-6 overflow-hidden relative">
      <div className="container-custom relative z-10 flex flex-col gap-10 md:gap-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
          <div className="flex flex-col gap-4 col-span-2">
            <h3 className="text-2xl font-serif text-white tracking-widest uppercase">
              Aura
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm font-light text-aura-cream/60 leading-relaxed italic max-w-xs">
                A premium London clinic for refined medical aesthetics and advanced skin health.
              </p>
              <div className="flex gap-6 pt-1">
                <a href="#" className="text-aura-cream/40 hover:text-white transition-colors duration-300">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Instagram</span>
                </a>
                <a href="#" className="text-aura-cream/40 hover:text-white transition-colors duration-300">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Facebook</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Treatments</span>
            <div className="flex flex-col gap-1">
              <a href="#treatments" className="text-sm font-light text-aura-cream/60 hover:text-white transition-colors duration-300">Injectables</a>
              <a href="#treatments" className="text-sm font-light text-aura-cream/60 hover:text-white transition-colors duration-300">Skin Boosters</a>
              <a href="#treatments" className="text-sm font-light text-aura-cream/60 hover:text-white transition-colors duration-300">Facials</a>
              <a href="#treatments" className="text-sm font-light text-aura-cream/60 hover:text-white transition-colors duration-300">Skincare</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Clinic</span>
            <div className="flex flex-col gap-1">
              <a href="#team" className="text-sm font-light text-aura-cream/60 hover:text-white transition-colors duration-300">Our Team</a>
              <a href="#location" className="text-sm font-light text-aura-cream/60 hover:text-white transition-colors duration-300">Location</a>
              <a href="#reviews" className="text-sm font-light text-aura-cream/60 hover:text-white transition-colors duration-300">Reviews</a>
              <a href="#" className="text-sm font-light text-aura-cream/60 hover:text-white transition-colors duration-300">Careers</a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Contact</span>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-light text-aura-cream/60 italic">hello@auraclinic.co.uk</p>
              <p className="text-sm font-light text-aura-cream/60 italic">+44 (0) 20 7123 4567</p>
              <p className="text-sm font-light text-aura-cream/60 italic">12 Harley Street, London</p>
            </div>
          </div>
        </div>
        
        <div className="relative flex flex-col items-center gap-6 pt-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[12vw] md:text-[20vw] leading-[0.6] font-serif text-white/5 uppercase tracking-tighter select-none pointer-events-none"
          >
            Aura
          </motion.h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full pt-6 border-t border-white/5 gap-4 text-center md:text-left">
            <span className="text-[9px] font-medium text-white/20 tracking-[0.4em] uppercase">
              © 2026 Aura Clinic London. All rights reserved.
            </span>
            <div className="flex gap-8">
              <a href="#" className="text-[9px] font-medium text-white/20 hover:text-white/40 transition-colors duration-300 tracking-[0.2em] uppercase">Privacy Policy</a>
              <a href="#" className="text-[9px] font-medium text-white/20 hover:text-white/40 transition-colors duration-300 tracking-[0.2em] uppercase">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Aesthetic Decor */}
      <div className="absolute -bottom-1/2 -left-1/4 w-[60rem] h-[60rem] bg-aura-taupe/5 rounded-full blur-3xl z-0" />
    </footer>
  );
};

export default Footer;
