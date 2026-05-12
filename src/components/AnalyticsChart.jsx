import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", tasks: 4 },
  { day: "Tue", tasks: 7 },
  { day: "Wed", tasks: 5 },
  { day: "Thu", tasks: 9 },
  { day: "Fri", tasks: 6 },
  { day: "Sat", tasks: 11 },
];

function AnalyticsChart() {
  return (
    <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

      <h2 className="text-3xl font-bold mb-8">
        Productivity Analytics
      </h2>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis
              dataKey="day"
              stroke="#8884d8"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="tasks"
              stroke="#a855f7"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default AnalyticsChart;