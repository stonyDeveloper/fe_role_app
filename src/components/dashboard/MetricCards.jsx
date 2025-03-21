import { motion } from "framer-motion";
import UpTrend from "../../assets/up_trend.svg"
import DownTrend from "../../assets/down_trend.svg"

const MetricsCards = () => {
  const metrics = [
    { title: "Requests", value: "7,265", change: "+11.02%", isPositive: true, bg: "bg-primary-blue" },
    { title: "KYC", value: "3,671", change: "-0.03%", isPositive: false, bg: "bg-primary-purple" },
    { title: "Tasks", value: "156", change: "+15.03%", isPositive: true, bg: "bg-primary-blue" },
    { title: "Customers", value: "2,318", change: "+6.08%", isPositive: true, bg: "bg-primary-purple" },
  ];

  return (
    <>
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          className={`${metric.bg} p-6 rounded-[16px] shadow-sm min-h-[112px] font-inter`}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[12px] font-[400] text-[#1C1C1C]">{metric.title}</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-[24px] font-[600] tracking-wider">
              {metric.value}
            </span>
            <p
              className={`flex gap-1 text-[12px]`}
            >
              {metric.change} <img src={metric.isPositive ? UpTrend : DownTrend} />
              
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default MetricsCards;
