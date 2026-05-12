import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function AIPanel() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="mt-10 bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl"
    >
      <div className="flex items-center gap-3">

        <div className="bg-purple-500 p-3 rounded-2xl">
          <Sparkles />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            AI Assistant
          </h2>

          <p className="text-gray-400">
            Your intelligent productivity companion
          </p>
        </div>

      </div>

      <div className="mt-8 bg-black/30 rounded-2xl p-5 border border-white/10">
        <p className="text-gray-300">
          ✨ Suggesting optimized workflow for today...
        </p>
      </div>

      <button className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition rounded-2xl font-semibold">
        Open Assistant
      </button>
    </motion.div>
  );
}

export default AIPanel;