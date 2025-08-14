//Shared/Header.jsx
import React from 'react';
import { Sun, Moon, User, Building2, Shield } from 'lucide-react';
import { roles } from '../utils/constants';

const Icons = {
  User,
  Building2,
  Shield,
};

const Header = ({ 
  darkMode, 
  toggleDarkMode, 
  rememberedUser, 
  handleSwitchUser,
  // New props for company-specific header
  showCompanyHeader = false,
  companyTitle = "",
  companySubtitle = "",
  companyGradient = ""
}) => {
  const currentRole = roles.find(r => r.name === rememberedUser);
  const IconComponent = rememberedUser && Icons[roles.find(r => r.name === rememberedUser)?.icon];

  // If company header is requested, show the enhanced company version
  if (showCompanyHeader) {
    return (
      <div className="space-y-6 animate-slideDown">
        {/* Top navigation bar */}
        <div className={`flex justify-between items-center rounded-xl shadow-lg p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center ${darkMode ? 'from-blue-600 to-purple-700' : 'from-indigo-500 to-purple-600'}`}>
              {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
            </div>
            <div>
              <h2 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Welcome back!</h2>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{rememberedUser}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            

          </div>
        </div>

        {/* Company Dashboard Header */}
        <div className={`rounded-2xl p-8 ${companyGradient || (darkMode ? 'bg-gradient-to-br from-green-800 to-emerald-900' : 'bg-gradient-to-br from-green-500 to-emerald-600')}`}>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              {IconComponent ? <IconComponent className="w-8 h-8 text-white" /> : <User className="w-8 h-8 text-white" />}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">{companyTitle || `${rememberedUser} Dashboard`}</h1>
              <p className="text-white opacity-90">{companySubtitle || "Dashboard Portal"}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default header for other dashboards
  return (
    <div className={`flex justify-between items-center mb-8 rounded-xl shadow-lg p-6 animate-slideDown ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 bg-gradient-to-r rounded-xl flex items-center justify-center ${darkMode ? 'from-blue-600 to-purple-700' : 'from-indigo-500 to-purple-600'}`}>
          {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
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

      </div>
    </div>
  );
};

export default Header;