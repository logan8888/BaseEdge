import { motion } from 'framer-motion';

const FeaturePanel = () => {
  return (
    <section className="relative overflow-hidden bg-aura-cream py-10 md:py-16 border-b border-aura-stone/10">
      
      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-aura-charcoal/50">
              Our Philosophy
            </span>
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.05] text-aura-charcoal">
              Enhance, <br />
              <span className="italic">Don't Change.</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-5 max-w-lg">
            <p className="text-base md:text-lg text-aura-charcoal/70 leading-relaxed font-light">
              We believe in the power of subtle enhancement. Our philosophy is rooted in medical excellence and artistic precision, ensuring results that feel completely natural and uniquely you.
            </p>
            <p className="text-base md:text-lg text-aura-charcoal/70 leading-relaxed font-light">
              Every face is different. That's why we create bespoke treatment plans tailored to your specific anatomy and aesthetic goals.
            </p>
          </div>
          
          <div className="pt-2">
            <button className="text-[10px] font-bold uppercase tracking-[0.3em] border-b-2 border-aura-charcoal/10 pb-2 hover:border-aura-charcoal transition-all duration-500">
              Learn More About Us
            </button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="grid grid-cols-2 gap-6 md:gap-8"
        >
          <div className="flex flex-col gap-6 pt-12 md:pt-20">
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" 
                alt="Aesthetics Treatment" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=800" 
                alt="Aesthetics Treatment" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturePanel;
