import { motion } from 'framer-motion';

const TrafficByWebsite = () => {
  const websites = [
    { name: 'Google', traffic: '— —' },
    { name: 'YouTube', traffic: '— —' },
    { name: 'Instagram', traffic: '— —' },
    { name: 'Pinterest', traffic: '— —' },
    { name: 'Facebook', traffic: '— —' },
    { name: 'Twitter', traffic: '— —' }
  ];

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Traffic by Website</h3>
      
      <div className="space-y-4">
        {websites.map((website, index) => (
          <motion.div 
            key={website.name}
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <span className="text-sm text-gray-700">{website.name}</span>
            <span className="text-sm text-gray-500">{website.traffic}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrafficByWebsite;