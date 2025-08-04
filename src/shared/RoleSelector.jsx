// /src/components/Shared/RoleSelector.jsx

import React, { useState } from 'react';
import { ArrowRight, Zap, Sparkles, Sun, Moon, Building2, User, Shield } from 'lucide-react';
import { roles } from '../utils/constants';
import { handleClickEffect } from '../utils/effects';

const iconMap = {
  Building2,
  User,
  Shield
};

const RoleSelector = ({ darkMode, toggleDarkMode, handleRoleSelect }) => {
  const [clickEffect, setClickEffect] = useState({ show: false, x: 0, y: 0 });

  const handleRoleClick = (e, roleName) => {
    handleClickEffect(e, setClickEffect);
    handleRoleSelect(roleName);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-indigo-50 via-white to-cyan-50'}`}>
      {/* Dark mode toggle */}
      <div className="absolute top-6 right-6">
        <button
          onClick={toggleDarkMode}
          className={`p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-white hover:bg-gray-50 text-gray-700'} shadow-lg`}
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-20 ${darkMode ? 'text-blue-400' : 'text-indigo-300'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {i % 3 === 0 ? '✦' : i % 3 === 1 ? '★' : '◆'}
          </div>
        ))}
      </div>

      <div className="w-full max-w-4xl relative z-10">
        <div className="text-center mb-12 animate-fadeIn">
          <div className="flex items-center justify-center mb-4">
            <Zap className={`w-12 h-12 mr-4 animate-pulse ${darkMode ? 'text-blue-400' : 'text-indigo-600'}`} />
            <h1 className={`text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${darkMode ? 'from-blue-400 to-purple-400' : 'from-indigo-600 to-purple-600'}`}>
              Dashboard Portal
            </h1>
            <Sparkles className={`w-12 h-12 ml-4 animate-pulse ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
          </div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Choose your role to continue</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, index) => {
            const IconComponent = iconMap[role.icon];
            return (
              <div
                key={role.name}
                className="animate-slideUp group cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={(e) => handleRoleClick(e, role.name)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                {/* Click effect */}
                {clickEffect.show && (
                  <div
                    className="absolute pointer-events-none z-50"
                    style={{ left: clickEffect.x, top: clickEffect.y }}
                  >
                    <div className="w-4 h-4 bg-white rounded-full animate-ping transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                )}

                <div className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'}`}>
                  <div className={`h-32 bg-gradient-to-br ${darkMode ? role.darkGradient : role.bgGradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-2 left-2 w-6 h-6 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-4 right-4 w-4 h-4 bg-white bg-opacity-30 rounded-full animate-bounce"></div>
                    </div>
                    
                    <IconComponent className="w-12 h-12 text-white drop-shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{role.name}</h3>
                    <div className={`flex items-center transition-colors duration-300 ${darkMode ? 'text-gray-400 group-hover:text-blue-400' : 'text-gray-500 group-hover:text-indigo-600'}`}>
                      <span className="text-sm">Access Dashboard</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover border glow */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'ring-2 ring-blue-400' : 'ring-2 ring-indigo-400'}`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RoleSelector;