import { motion } from 'framer-motion';

const trustPoints = [
  { title: "Medically-Led", desc: "Expert medical practitioners" },
  { title: "Trusted by Clients", desc: "Highest satisfaction rate" },
  { title: "Tailored Plans", desc: "Bespoke treatment paths" },
  { title: "Natural Results", desc: "Subtle enhancements" },
];

const TrustStrip = () => {
  return (
    <section className="py-12 bg-aura-cream border-y border-aura-stone/10">
      <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {trustPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex flex-col gap-1 items-center md:items-start text-center md:text-left"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-aura-charcoal/90">
              {point.title}
            </span>
            <span className="text-[11px] font-medium tracking-wider text-aura-charcoal/40 italic">
              {point.desc}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
