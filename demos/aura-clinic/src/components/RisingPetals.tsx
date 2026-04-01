import { motion } from 'framer-motion';

const petalCount = 28;

const petals = Array.from({ length: petalCount }, (_, i) => {
  const dur = 18 + (i % 6) * 3;
  return {
    left: `${(i / petalCount) * 100}%`,
    size: 12 + (i % 6) * 6,
    dur,
    delay: -((i / petalCount) * dur),
    rotate: i * 41,
    driftX: (i % 2 === 0 ? 1 : -1) * (8 + (i % 4) * 4),
    color: i % 3 === 0
      ? 'rgba(188,120,120,0.45)'
      : i % 3 === 1
      ? 'rgba(205,138,138,0.4)'
      : 'rgba(170,108,108,0.42)',
  };
});

const RisingPetals = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: p.left,
            width: p.size,
            height: p.size * 1.5,
            borderRadius: '50% 40% 60% 30% / 60% 50% 50% 40%',
            background: p.color,
          }}
          initial={{ y: 900, rotate: p.rotate, opacity: 0 }}
          animate={{
            y: -120,
            x: [0, p.driftX, -p.driftX * 0.5, p.driftX * 0.3],
            rotate: p.rotate + 160,
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
            times: [0, 0.12, 0.88, 1],
            x: { duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' },
          }}
        />
      ))}
    </div>
  );
};

export default RisingPetals;
