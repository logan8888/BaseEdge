import { motion } from 'framer-motion';
import RisingPetals from './RisingPetals';

const Consultation = () => {
  return (
    <section className="relative overflow-hidden bg-aura-beige py-10 md:py-16">
      <RisingPetals />
      
      <div className="container-custom relative z-10 flex flex-col items-center gap-6 md:gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col gap-5 max-w-2xl"
        >
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-aura-charcoal/50">
              Your Journey Begins Here
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-aura-charcoal leading-[1.05]">
              Schedule a <br />
              <span className="italic">Consultation.</span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-aura-charcoal/70 leading-relaxed font-light">
            Book your complimentary skin assessment today and discover how we can help you achieve your aesthetic goals through our bespoke medical-grade treatments.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex flex-col gap-8 items-center"
        >
          <button className="btn-primary px-16 py-6 text-base tracking-[0.4em] shadow-2xl">
            Book Now
          </button>
          
          <div className="flex flex-col gap-2 italic">
            <span className="text-xs font-light text-aura-charcoal/40 tracking-widest">
              Available in-clinic or virtually
            </span>
          </div>
        </motion.div>
      </div>
      
      {/* Aesthetic Decor */}
      <div className="absolute -top-1/2 -left-1/4 w-[60rem] h-[60rem] bg-aura-cream/40 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-1/2 -right-1/4 w-[60rem] h-[60rem] bg-aura-taupe/30 rounded-full blur-3xl z-0" />
    </section>
  );
};

export default Consultation;
