import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ReportsGenerated = () => {
  const data = [
    { name: "Linux", value: 12000, fill: "#95A4FC" },
    { name: "Mac", value: 24000, fill: "#BAEDBD" },
    { name: "iOS", value: 18000, fill: "#1C1C1C" },
    { name: "Windows", value: 28000, fill: "#B1E3FF" },
    { name: "Android", value: 10000, fill: "#A8C5DA" },
    { name: "Other", value: 20000, fill: "#A1E3CB" },
  ];

  return (
    <div className="p-4  rounded-[16px]">
      <h3 className="text-lg font-medium text-gray-700 mb-4">
        Reports Generated
      </h3>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-64"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
          >
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#9CA3AF", dy: 10 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
              tickLine={false}
              axisLine={false}
              domain={[0, 30000]}
              tickFormatter={(value) => `${value / 1000}K`}
              ticks={[0, 10000, 20000, 30000]}
            />
            {/* <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: 6, fontSize: 12 }} /> */}
            <Bar barSize={28} dataKey="value" radius={[8, 8, 8, 8]}>
              {data.map((entry, index) => (
                <motion.rect
                  key={index}
                  fill={entry.color}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default ReportsGenerated;
