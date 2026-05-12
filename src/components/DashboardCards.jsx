import { motion } from "framer-motion";

function DashboardCards({ darkMode }) {

  const cards = [
    {
      title: "Tasks Completed",
      value: "128",
    },
    {
      title: "AI Sessions",
      value: "54",
    },
    {
      title: "Focus Hours",
      value: "312h",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

      {cards.map((card, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }}
          className="bg-gray-200 dark:bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-purple-500/20 hover:shadow-2xl transition duration-300"
        >
          <h2 className="text-gray-400 text-lg">
            {card.title}
          </h2>

          <p className="text-4xl font-bold mt-4">
            {card.value}
          </p>
        </motion.div>
      ))}

    </div>
  );
}

export default DashboardCards;