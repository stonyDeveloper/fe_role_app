import { useState } from 'react';

const Header = ({ title, toggleSidebar }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  
  return (
    <div className="p-4 bg-white border-b border-[#F0ECEC]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 mt-[14px]">
        <div className="flex items-center">
          {/* <button 
            onClick={toggleSidebar}
            className="mr-4 p-2 rounded-md hover:bg-gray-100"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H17M1 7H17M1 13H17" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button> */}
          <h1 className="text-[22px] font-[500] text-gray-800">{title}</h1>
        </div>
        {/* <div className="flex items-center mt-4 md:mt-0">
          <div className="relative mr-4 hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="py-2 pl-10 pr-4 border h-[28px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-1 text-gray-400">🔍</span>
          </div>
          <button className="p-2 rounded-md hover:bg-gray-100">🌙</button>
          <button 
            className="p-2 rounded-md hover:bg-gray-100"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            🔔
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100">📋</button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;