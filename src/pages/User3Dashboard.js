// /src/components/Dashboards/DeepikaDashboard.jsx (Deepika Singh Dashboard)

import React from 'react';
import RippleEffectButton from '../shared/RippleEffectButton';
import { deepikaLinks } from '../utils/constants';

const DeepikaDashboard = ({ darkMode, onLogout }) => {
  return (
    <div className="animate-fadeIn space-y-8">
      {/* Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deepikaLinks.map((link, index) => (
          <div 
            key={index}
            className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-slideUp ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`h-1 bg-gradient-to-r ${link.gradient}`}></div>
            <div className="p-6">
              <div className={`w-14 h-14 bg-gradient-to-br ${link.gradient} rounded-xl flex items-center justify-center mb-4`}>
                <span className="text-2xl">{link.icon}</span>
              </div>
              <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {link.title}
              </h3>
              <RippleEffectButton
                href={link.url}
                className={`bg-gradient-to-r ${link.gradient} hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium`}
              >
                Open Link
              </RippleEffectButton>
            </div>
          </div>
        ))}
      </div>

      {/* Logout Button - Optional: You might want to remove this too since header handles user switching */}
      <div className="flex justify-end">
        <button
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DeepikaDashboard;