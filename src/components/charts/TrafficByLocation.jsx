import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const TrafficByLocation = () => {
  const data = [
    { name: 'Nigeria', value: 38.6, fill: '#2D2D2D' },
    { name: 'Ghana', value: 22.5, fill: '#A1E3CB' },
    { name: 'Kenya', value: 30.8, fill: '#B1E3FF' },
    { name: 'Benin Republic', value: 8.1, fill: '#A8C5DA' },
  ];

  return (
    <div className=" rounded-2xl shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Traffic by Location</h3>
      
      <div className="flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 h-64 text-[12px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                innerRadius={40}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
        
        <div className="w-1/2 flex flex-col justify-center space-y-4">
          {data.map((entry, index) => (
            <motion.div 
              key={`legend-${index}`}
              className="flex items-center" 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center">
                <div 
                  className="w-2 h-2 rounded-full mr-3" 
                  style={{ backgroundColor: entry.fill }}
                />
                <span className="text-[12px] text-gray-800">{entry.name}</span>
              </div>
              <div className="flex-grow"></div>
              <span className="text-[12px]">{entry.value}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrafficByLocation;