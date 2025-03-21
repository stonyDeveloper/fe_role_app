import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Sidebar from './Sidebar';

function Layout({ children, header }) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen  font-ibm-plex bg-white w-screen">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        toggleSidebar={toggleSidebar} 
      />
      <motion.div 
        className="flex-1 flex flex-col overflow-hidden max-w-[84.31%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Fixed Header section */}
        <div className="sticky top-0 z-10">
          {/* Pass toggleSidebar function to header */}
          {React.cloneElement(header, { toggleSidebar })}
        </div>
        
        {/* Scrollable Content section */}
        <div className="flex-1 overflow-y-auto p-4 w-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

export default Layout;