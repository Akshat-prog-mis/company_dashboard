// /src/components/Dashboards/SmitaDashboard.jsx (Deepika Singh Dashboard)

import React from 'react';
import { User } from 'lucide-react';
import RippleEffectButton from '../shared/RippleEffectButton';
import { deepikaLinks } from '../utils/constants';

const DeepikaDashboard = ({ darkMode }) => {
  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className={`rounded-2xl mb-8 p-8 ${darkMode ? 'bg-gradient-to-br from-green-800 to-emerald-900' : 'bg-gradient-to-br from-green-500 to-emerald-600'}`}>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Deepika Singh Dashboard</h1>
            <p className="text-white opacity-90">Management Portal</p>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default DeepikaDashboard;