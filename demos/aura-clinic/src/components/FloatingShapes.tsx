import { motion } from 'framer-motion';

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'rgba(180,165,145,0.45)' }}
      />
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 70, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 -right-20 w-[30rem] h-[30rem] rounded-full blur-3xl"
        style={{ background: 'rgba(160,148,130,0.38)' }}
      />
      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full blur-3xl"
        style={{ background: 'rgba(200,188,170,0.4)' }}
      />
    </div>
  );
};

export default FloatingShapes;
