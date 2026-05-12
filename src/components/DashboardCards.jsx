import { motion } from "framer-motion";

function DashboardCards({ tasks = [] }) {

  const totalTasks = tasks.length;

  const completedTasks =
    tasks.filter((task) =>
      task.completed
    ).length;

  const pendingTasks =
    tasks.filter((task) =>
      !task.completed
    ).length;

  const completionRate =
    totalTasks > 0
      ? Math.round(
          (completedTasks / totalTasks) * 100
        )
      : 0;

  const cards = [

    {
      title: "Total Tasks",
      value: totalTasks,
      color:
        "from-purple-600 to-blue-500",
    },

    {
      title: "Completed",
      value: completedTasks,
      color:
        "from-green-500 to-emerald-400",
    },

    {
      title: "Pending",
      value: pendingTasks,
      color:
        "from-red-500 to-orange-400",
    },

    {
      title: "Completion Rate",
      value: `${completionRate}%`,
      color:
        "from-pink-500 to-purple-500",
    },

  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

      {cards.map((card, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          transition={{
            duration: 0.2,
          }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-purple-500/20 hover:shadow-2xl transition duration-300"
        >

          <div
            className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${card.color} mb-6`}
          />

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