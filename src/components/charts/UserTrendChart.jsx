import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const UserTrendChart = () => {
  const [activeTab, setActiveTab] = useState('Total Users');
  const [chartWidth, setChartWidth] = useState('100%');
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setChartWidth('100%');
      } else {
        setChartWidth('100%');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Data with intersection points
  const data = [
    { name: '', period: 'Jan', thisYear: 8000, lastYear: 1000 },
    { name: 'Jan', period: 'Jan', thisYear: 9500, lastYear: 5000 },
    { name: '', period: 'Jan', thisYear: 10000, lastYear: 9000 },
    
    { name: '', period: 'Feb', thisYear: 8000, lastYear: 10000 },
    { name: '', period: 'Feb', thisYear: 5000, lastYear: 9500 },
    { name: 'Feb', period: 'Feb', thisYear: 4000, lastYear: 9000 },
    { name: '', period: 'Feb', thisYear: 5500, lastYear: 8500 },
    
    { name: '', period: 'Mar', thisYear: 8000, lastYear: 10000 },
    { name: '', period: 'Mar', thisYear: 10000, lastYear: 15000 },
    { name: 'Mar', period: 'Mar', thisYear: 11000, lastYear: 18000 },
    { name: '', period: 'Mar', thisYear: 10500, lastYear: 17000 },
    
    { name: '', period: 'Apr', thisYear: 10000, lastYear: 14000 },
    { name: '', period: 'Apr', thisYear: 15000, lastYear: 10000 },
    { name: 'Apr', period: 'Apr', thisYear: 20000, lastYear: 5000 },
    { name: '', period: 'Apr', thisYear: 21000, lastYear: 3000 },
    
    { name: '', period: 'May', thisYear: 24000, lastYear: 3500 },
    { name: '', period: 'May', thisYear: 25000, lastYear: 7000 },
    { name: 'May', period: 'May', thisYear: 22000, lastYear: 10000 },
    { name: '', period: 'May', thisYear: 19000, lastYear: 14000 },
    
    { name: '', period: 'Jun', thisYear: 18000, lastYear: 18000 },
    { name: '', period: 'Jun', thisYear: 19500, lastYear: 20000 },
    { name: 'Jun', period: 'Jun', thisYear: 16000, lastYear: 18000 },
    { name: '', period: 'Jun', thisYear: 15000, lastYear: 21000 },
    
    { name: '', period: 'Jul', thisYear: 16000, lastYear: 22000 },
    { name: '', period: 'Jul', thisYear: 18000, lastYear: 23000 },
    { name: 'Jul', period: 'Jul', thisYear: 20000, lastYear: 24000 },
  ];

  const tabs = ['Total Users', 'Total Projects', 'Operating Status'];

  // Custom Y-axis ticks
  const customYAxisTicks = [0, 10000, 20000, 30000];

  return (
    <div className="bg-primary-light rounded-2xl p-6">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="flex flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`mr-4 pb-1 text-sm ${
                activeTab === tab
                  ? 'text-primary-brand font-semibold'
                  : 'text-gray-400 font-normal hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="flex items-center mt-2 md:mt-0">
          <div className="flex items-center mr-4">
            <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
            <span className="text-xs">This year</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
            <span className="text-xs">Last year</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-48 md:h-64"
      >
        <ResponsiveContainer width={chartWidth} height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              padding={{ left: 40, right: 10 }}
              axisLine={false} // Removed X-axis line
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => value === 0 ? '0' : `${value / 1000}k`}
              axisLine={false}
              tickLine={false}
              ticks={customYAxisTicks} // Use custom tick values
              domain={[0, 30000]} // Set the domain to match our custom ticks
            />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="thisYear" 
              stroke="#000000" // Solid black line
              activeDot={{ r: 6 }}
              strokeWidth={2}
              dot={false} // Removed dots
            />
            <Line 
              type="monotone" 
              dataKey="lastYear" 
              stroke="#9CA3AF" // Gray line
              strokeDasharray="5 5" // Dashed line
              activeDot={{ r: 6 }}
              strokeWidth={2}
              dot={false} // Removed dots
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default UserTrendChart;