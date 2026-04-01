import { motion } from 'framer-motion';

const team = [
  {
    name: "Dr. Elena Rossi",
    role: "Founder & Medical Director",
    bio: "With over 15 years in medical aesthetics, Dr. Elena is renowned for her 'barely there' technique and natural facial rejuvenation.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Sophie Bennett",
    role: "Senior Aesthetic Practitioner",
    bio: "Sophie specializes in advanced skin boosters and clinical facials, helping clients achieve a luminous, healthy-looking complexion.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Maya James",
    role: "Clinic Coordinator",
    bio: "The heart of Aura, Maya ensures your journey with us is seamless, personalized, and truly exceptional from start to finish.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  }
];

const Team = () => {
  return (
    <section id="team" className="bg-aura-cream py-10 md:py-14">
      <div className="container-custom">
        <div className="flex flex-col gap-6 md:gap-10 items-center">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-aura-charcoal/50">
              Meet the Team
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-aura-charcoal leading-[1.05]">
              Expertise & <br />
              <span className="italic">Excellence.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 md:gap-16 w-full">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
                className="group flex flex-col gap-8 items-center text-center md:items-start md:text-left"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-xl w-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-aura-charcoal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-serif text-aura-charcoal tracking-wide">
                      {member.name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-aura-charcoal/50">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-sm font-light text-aura-charcoal/60 leading-relaxed max-w-xs group-hover:text-aura-charcoal/80 transition-colors duration-300">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
