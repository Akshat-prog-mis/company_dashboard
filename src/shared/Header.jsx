// /src/components/Shared/Header.jsx

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { roles } from '../utils/constants';

const Header = ({ darkMode, toggleDarkMode, rememberedUser, handleSwitchUser }) => {
  const currentRole = roles.find(r => r.name === rememberedUser);

  return (
    <div className={`flex justify-between items-center mb-8 rounded-xl shadow-lg p-6 animate-slideDown ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 bg-gradient-to-r rounded-xl flex items-center justify-center ${darkMode ? 'from-blue-600 to-purple-700' : 'from-indigo-500 to-purple-600'}`}>
          {currentRole?.icon && 
            React.createElement(
              require('lucide-react')[currentRole.icon], 
              { className: "w-6 h-6 text-white" }
            )
          }
        </div>
        <div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Welcome back!</h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{rememberedUser}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        
        {/* Switch user button */}
        <button
          onClick={handleSwitchUser}
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:scale-95 relative overflow-hidden group"
        >
          <span className="relative z-10">Switch User</span>
          <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default Header;