// /src/components/Dashboards/User3Dashboard.jsx (Smita Patel Dashboard)

import React from 'react';
import { Shield } from 'lucide-react';
import RippleEffectButton from '../shared/RippleEffectButton';
import { smitaLinks } from '../utils/constants';

const SmitaDashboard = ({ darkMode ,onLogout }) => {
  return (
    <div className="animate-fadeIn">

      {/* Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {smitaLinks.map((link, index) => (
          <div 
            key={index}
            className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-slideUp ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`h-1 bg-gradient-to-r ${link.gradient}`}></div>
            <div className="p-8">
              <div className={`w-16 h-16 bg-gradient-to-br ${link.gradient} rounded-xl flex items-center justify-center mb-6`}>
                <span className="text-2xl">{link.icon}</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {link.title}
              </h3>
              <RippleEffectButton
                href={link.url}
                className={`bg-gradient-to-r ${link.gradient} hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold`}
              >
                Open Link
              </RippleEffectButton>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onLogout}
        className="ml-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default SmitaDashboard;