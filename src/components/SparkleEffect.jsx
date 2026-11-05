import { AnimatePresence, motion } from "motion/react";

const sparkles = [
  { left: "15%", top: "20%", size: 10, delay: 0 },
  { left: "80%", top: "15%", size: 14, delay: 0.1 },
  { left: "25%", top: "65%", size: 8, delay: 0.2 },
  { left: "75%", top: "70%", size: 12, delay: 0.3 },
  { left: "50%", top: "10%", size: 9, delay: 0.4 },
  { left: "10%", top: "45%", size: 11, delay: 0.15 },
  { left: "90%", top: "50%", size: 8, delay: 0.25 },
];

export default function SparkleEffect({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
          {sparkles.map((sparkle, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                scale: 0,
                y: 20,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0, 1.4, 1, 0],
                y: [20, -30, -60],
                rotate: [0, 90, 180],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                delay: sparkle.delay,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                left: sparkle.left,
                top: sparkle.top,
                fontSize: sparkle.size * 2,
              }}
            >
              ✦
            </motion.span>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}