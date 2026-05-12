import { motion } from "framer-motion";

function DashboardPreview() {

  return (

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      whileHover={{ y: -10 }}
      className="relative mt-24 max-w-6xl mx-auto"
    >

      {/* GLOW */}

      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl rounded-[40px]" />

      {/* DASHBOARD CARD */}

      <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] overflow-hidden shadow-2xl">

        {/* TOP BAR */}

        <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-black/30">

          <div className="w-3 h-3 rounded-full bg-red-500" />

          <div className="w-3 h-3 rounded-full bg-yellow-500" />

          <div className="w-3 h-3 rounded-full bg-green-500" />

        </div>

        {/* CONTENT */}

        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[500px]">

          {/* SIDEBAR */}

          <div className="hidden md:flex flex-col gap-5 p-6 border-r border-white/10 bg-black/20">

            <div className="h-12 rounded-2xl bg-white/10" />

            <div className="h-12 rounded-2xl bg-white/5" />

            <div className="h-12 rounded-2xl bg-white/5" />

            <div className="h-12 rounded-2xl bg-white/5" />

          </div>

          {/* MAIN */}

          <div className="md:col-span-3 p-8">

            {/* HEADER */}

            <div className="flex items-center justify-between mb-10">

              <div>

                <div className="h-8 w-48 rounded-xl bg-white/10 mb-3" />

                <div className="h-4 w-32 rounded-xl bg-white/5" />

              </div>

              <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500" />

            </div>

            {/* CARDS */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

              <div className="h-36 rounded-3xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10" />

              <div className="h-36 rounded-3xl bg-white/5 border border-white/10" />

              <div className="h-36 rounded-3xl bg-white/5 border border-white/10" />

            </div>

            {/* CHART */}

            <div className="h-64 rounded-3xl bg-white/5 border border-white/10" />

          </div>

        </div>

      </div>

    </motion.div>

  );
}

export default DashboardPreview;