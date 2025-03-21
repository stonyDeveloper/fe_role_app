import { motion } from 'framer-motion';
import Bug from '../../assets/bug.svg'
import User from '../../assets/user.svg'
import Broadcast from '../../assets/broadcast.svg'
import One from "../../assets/activities/one.svg"
import Two from "../../assets/activities/two.svg"
import Three from "../../assets/activities/three.svg"
import Four from "../../assets/activities/four.svg"
import Five from "../../assets/activities/five.svg"

const NotificationsPanel = () => {
  const notifications = [
    { id: 1, message: 'You fixed a bug.', time: 'Just now', icon: Bug, iconBg: 'bg-primary-blue' },
    { id: 2, message: 'New user registered.', time: '59 minutes ago', icon: User, iconBg: 'bg-primary-purple'  },
    { id: 3, message: 'You fixed a bug.', time: '12 hours ago', icon: Bug, iconBg: 'bg-primary-blue'  },
    { id: 4, message: 'Andi Lane subscribed to you.ddsdsdsdsdd', time: 'Today, 11:59 AM', icon: Broadcast, iconBg: 'bg-primary-purple'  },
  ];

  const activities = [
    { id: 1, message: 'Changed the style.', time: 'Just now', user: { initial: 'AC', color: 'bg-purple-500' }, image: One },
    { id: 2, message: 'Released a new version.', time: '59 minutes ago', user: { initial: 'JD', color: 'bg-orange-500' }, image: Two },
    { id: 3, message: 'Submitted a bug.', time: '12 hours ago', user: { initial: 'TS', color: 'bg-blue-500' }, image: Three },
    { id: 4, message: 'Modified A data in Page X.', time: 'Today, 11:59 AM', user: { initial: 'RK', color: 'bg-red-500' }, image: Four },
    { id: 5, message: 'Deleted a page in Project Y.', time: 'Feb 2, 2024', user: { initial: 'ML', color: 'bg-green-500' }, image: Five },
  ];

  const contacts = [
    { id: 1, name: 'Natali Craig', avatar: 'NC' },
    { id: 2, name: 'Drew Cano', avatar: 'DC' },
    { id: 3, name: 'Andi Lane', avatar: 'AL' },
    { id: 4, name: 'Koray Okumus', avatar: 'KO' },
    { id: 5, name: 'Kate Morrison', avatar: 'KM' },
    { id: 6, name: 'Melody Macy', avatar: 'MM' },
  ];

  return (
    <motion.div
      className="bg-[#FFF8F8] rounded-[30px] shadow-sm p-6  text-[14px] font-[400] font-inter"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="mb-4">Notifications</h3>
      
      <div className="space-y-4 mb-6">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            className="flex items-start gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`flex-shrink-0 w-6 h-6 ${notification.iconBg} rounded-[8px] flex items-center justify-center text-blue-500 mt-[2px]`}>
              <img src={notification.icon} alt="" />
            </div>
            <div className='overflow-hidden'>
              <p className="text-[#1C1C1C] text-[14px] overflow-x-hidden text-ellipsis  whitespace-nowrap">{notification.message}</p>
              <p className="text-[#1C1C1C] opacity-[0.4]">{notification.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="mb-4">Activities</h3>
      
      <div className="space-y-4 mb-6">
        {activities.map((activity) => (
          <motion.div
            key={activity.id}
            className="flex items-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`flex-shrink-0 w-6 h-6 ${activity.user.color} rounded-full flex items-center justify-center text-white mr-3`}>
              {activity.user.initial}
            </div>
            <div>
              <p className="text-[#1C1C1C] text-[14px] overflow-x-hidden text-ellipsis  whitespace-nowrap">{activity.message}</p>
              <p className="text-[#1C1C1C] opacity-[0.4]">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="text-lg font-medium mb-4">Contacts</h3>
      
      <div className="space-y-3">
        {contacts.map((contact) => (
          <motion.div
            key={contact.id}
            className="flex items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 mr-3">
              {contact.avatar}
            </div>
            <p className="text-sm text-gray-700">{contact.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NotificationsPanel;