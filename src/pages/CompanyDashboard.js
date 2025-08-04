// /src/components/Dashboards/CompanyDashboard.jsx

import React from 'react';
import RippleEffectButton from '../shared/RippleEffectButton';
import { User } from 'lucide-react';
import { companyCards } from '../utils/constants';

const CompanyDashboard = ({ darkMode }) => {
  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className={`rounded-2xl mb-8 p-8 ${darkMode ? 'bg-gradient-to-br from-green-800 to-emerald-900' : 'bg-gradient-to-br from-green-500 to-emerald-600'}`}>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Brijesh Kumar Dashboard</h1>
            <p className="text-white opacity-90">IMS Portal</p>
          </div>
        </div>
      </div>

      {/* Main Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companyCards.map((card, index) => (
          <div 
            key={index}
            className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-slideUp ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            style={{ animationDelay: card.delay }}
          >
            <div className={`h-1 bg-gradient-to-r ${card.gradient}`}></div>
            <div className="p-8">
              <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-6`}>
                <span className="text-2xl">{card.icon}</span>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {card.title}
              </h3>
              <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {card.description}
              </p>
              <RippleEffectButton
                href={card.url}
                className={`bg-gradient-to-r ${card.gradient} hover:opacity-90 text-white px-8 py-3 rounded-lg font-semibold`}
              >
                {card.buttonText}
              </RippleEffectButton>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CompanyDashboard;