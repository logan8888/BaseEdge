import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Treatments', href: '#treatments' },
  { name: 'Team', href: '#team' },
  { name: 'Location', href: '#location' },
  { name: 'Reviews', href: '#reviews' },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['treatments', 'team', 'location', 'reviews'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active if section is in the upper part of the viewport
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveItem(current);
      else if (window.scrollY < 400) setActiveItem('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-aura-cream border-b border-aura-stone/20 py-4">
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-xl font-serif tracking-widest uppercase text-aura-charcoal">
          Aura
        </a>

        <div className="hidden md:flex items-center bg-aura-taupe/15 rounded-full p-1 border border-aura-stone/10">
          {navItems.map((item) => {
            const isActive = activeItem === item.href.slice(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-6 py-2 text-[10px] uppercase tracking-[0.25em] font-bold transition-colors duration-500 z-10 ${isActive ? 'text-aura-charcoal' : 'text-aura-charcoal/40 hover:text-aura-charcoal'}`}
                onClick={() => setActiveItem(item.href.slice(1))}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-sm z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-aura-charcoal/30 pb-1 hover:text-aura-charcoal/60 hover:border-aura-charcoal/60 transition-all duration-300">
          Book Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
