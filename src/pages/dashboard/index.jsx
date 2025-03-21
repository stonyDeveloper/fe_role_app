import { motion } from "framer-motion";
import { useState } from "react";
import MetricsCards from "../../components/dashboard/MetricCards";
import UserTrendChart from "../../components/charts/UserTrendChart";
import TrafficByWebsite from "../../components/charts/TrafficByWebsite";
import ReportsGenerated from "../../components/charts/ReportsGenerated";
import TrafficByLocation from "../../components/charts/TrafficByLocation";
import MarketingSEO from "../../components/charts/MarketingSEO";
import NotificationsPanel from "../../components/notifications/NotificationsPanel";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Dashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className={`flex-1 ${showNotifications ? "hidden md:block" : ""}`}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <MetricsCards />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4 sm:gap-6 mt-6 lg:grid-cols-3"
          >
            <motion.div
              variants={itemVariants}
              className="rounded-[16px] shadow-sm lg:col-span-2"
            >
              <UserTrendChart />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-white p-4 rounded-lg shadow-sm"
            >
              <TrafficByWebsite />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4 sm:gap-6 mt-6 lg:grid-cols-2"
          >
            <motion.div
              variants={itemVariants}
              className="bg-primary-light p-4 rounded-[16px] shadow-sm"
            >
              <ReportsGenerated />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-primary-light  p-4 rounded-[16px] shadow-sm"
            >
              <TrafficByLocation />
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-primary-light p-4 rounded-[16px] shadow-sm mt-6"
          >
            <MarketingSEO />
          </motion.div>
        </div>

        <motion.div
          className={`w-[21.75%] ${
            showNotifications ? "block" : "hidden md:block"
          }`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <NotificationsPanel />
        </motion.div>
      </div>

      {/* Mobile navigation for notifications */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 flex justify-around md:hidden">
        <button className="p-2 rounded-md hover:bg-gray-100">📊</button>
        <button className="p-2 rounded-md hover:bg-gray-100">🔄</button>
        <button className="p-2 rounded-md hover:bg-gray-100">📝</button>
        <button
          className={`p-2 rounded-md ${
            showNotifications
              ? "bg-blue-100 text-blue-600"
              : "hover:bg-gray-100"
          }`}
          onClick={() => setShowNotifications(!showNotifications)}
        >
          🔔
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
