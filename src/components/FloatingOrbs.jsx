import { motion } from "framer-motion";

function FloatingOrbs() {

  return (

    <div className="absolute inset-0 overflow-hidden">

      {/* ORB 1 */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-[120px]"
      />

      {/* ORB 2 */}

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/30 rounded-full blur-[120px]"
      />

      {/* ORB 3 */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-[120px]"
      />

    </div>
  );
}

export default FloatingOrbs;