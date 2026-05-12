import { motion } from "framer-motion";

function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />

    </div>
  );
}

export default BackgroundEffects;