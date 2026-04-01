import { motion } from 'framer-motion';

const reviews = [
  { name: "Alexandra L.", text: "The team at Aura are incredible. My results are so natural, nobody can tell I've had anything done—they just keep saying I look refreshed.", rating: 5, date: "March 2026" },
  { name: "Catherine D.", text: "A truly luxury experience from start to finish. The clinic is beautiful and the consultation was so thorough.", rating: 5, date: "February 2026" },
  { name: "Sophie M.", text: "I was nervous about dermal fillers but Sophie put me at ease. The results are subtle and exactly what I wanted.", rating: 5, date: "January 2026" },
  { name: "Isabella R.", text: "Best facials in London. My skin has never looked better. Highly recommend the signature clinical facial.", rating: 5, date: "March 2026" },
  { name: "Emma G.", text: "Dr. Elena is a magician. Her 'barely there' technique is exactly what I was looking for. Very professional.", rating: 5, date: "February 2026" },
  { name: "Charlotte H.", text: "Incredible attention to detail. The bespoke treatment plan actually works for my skin type. 10/10.", rating: 5, date: "January 2026" },
  { name: "Olivia P.", text: "The only place I trust with my face. The environment is so calm and clinical yet incredibly welcoming.", rating: 5, date: "March 2026" },
  { name: "Grace T.", text: "Aura is my monthly treat. The results are consistent and the staff are always so kind and professional.", rating: 5, date: "February 2026" },
];

const Reviews = () => {
  return (
    <section id="reviews" className="bg-aura-cream py-10 md:py-14 overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="flex flex-col gap-8 md:gap-10 items-center">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-aura-charcoal/50">
              Client Experiences
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-aura-charcoal leading-[1.05]">
              Trusted by <br />
              <span className="italic">Thousands.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col gap-6 p-8 md:p-10 bg-white border border-aura-stone/10 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm ${index % 3 === 1 ? 'md:mt-12' : ''}`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-aura-charcoal/40">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm md:text-base font-light text-aura-charcoal/70 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-aura-charcoal/5">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-aura-charcoal/80">
                    {review.name}
                  </span>
                  <span className="text-[10px] font-medium text-aura-charcoal/30 tracking-widest italic">
                    {review.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="pt-8">
            <button className="text-sm font-bold uppercase tracking-[0.3em] border-b-2 border-aura-charcoal/10 pb-2 hover:border-aura-charcoal transition-all duration-500">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
      
      {/* Aesthetic Decor */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-aura-taupe/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-aura-stone/15 rounded-full blur-3xl z-0" />
    </section>
  );
};

export default Reviews;
