import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-32 px-6">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl font-bold leading-tight"
      >
        Your AI Powered
        <span className="text-purple-500"> Productivity</span>
        <br />
        Workspace
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 mt-6 max-w-2xl text-lg"
      >
        Organize tasks, manage goals, and supercharge your workflow
        with futuristic AI tools.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 transition text-lg font-semibold shadow-lg shadow-purple-500/30"
      >
        Get Started
      </motion.button>

    </div>
  );
}

export default Hero;