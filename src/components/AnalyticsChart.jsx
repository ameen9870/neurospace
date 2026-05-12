import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function AnalyticsChart({ tasks = [] }) {

  const completedTasks =
    tasks.filter((task) =>
      task.completed
    ).length;

  const pendingTasks =
    tasks.filter((task) =>
      !task.completed
    ).length;

  const highPriority =
    tasks.filter((task) =>
      task.priority === "High"
    ).length;

  const mediumPriority =
    tasks.filter((task) =>
      task.priority === "Medium"
    ).length;

  const lowPriority =
    tasks.filter((task) =>
      task.priority === "Low"
    ).length;

  const data = [

    {
      name: "Completed",
      value: completedTasks,
    },

    {
      name: "Pending",
      value: pendingTasks,
    },

    {
      name: "High",
      value: highPriority,
    },

    {
      name: "Medium",
      value: mediumPriority,
    },

    {
      name: "Low",
      value: lowPriority,
    },

  ];

  return (

    <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

      <h2 className="text-3xl font-bold mb-8">
        Productivity Analytics
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#333"
            />

            <XAxis
              dataKey="name"
              stroke="#aaa"
            />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#a855f7"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}

export default AnalyticsChart;