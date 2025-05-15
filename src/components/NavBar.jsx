import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Lamp, Flower2, HomeIcon } from 'lucide-react';

const NavBar = () => {
  const location = useLocation();
  
  // Navigation items
  const navItems = [
    { name: 'Home', to: '/', icon: <HomeIcon size={20} /> },
    { name: 'Lighting', to: '/lamp', icon: <Lamp size={20} /> },
    { name: 'Garden', to: '/flower', icon: <Flower2 size={20} /> },
  ];

  return (
    <header className="fixed w-full bottom-0 left-0 z-50 md:top-0 md:bottom-auto">
      <div className="bg-white/80 backdrop-blur-md shadow-lg px-4 py-2 mx-auto">
        <nav className="max-w-screen-lg mx-auto">
          <ul className="flex items-center justify-around md:justify-center md:gap-16">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              
              return (
                <li key={item.to}>
                  <Link to={item.to} className="relative block py-2 px-1">
                    <div className="flex flex-col items-center">
                      <div className={`${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                        {item.icon}
                      </div>
                      <span className={`text-sm mt-1 font-medium ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>
                        {item.name}
                      </span>
                      
                      {/* Animated underline for active items */}
                      {isActive && (
                        <motion.div
                          layoutId="navigation-underline"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar; 