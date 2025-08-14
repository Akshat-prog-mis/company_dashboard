//components/CompanyDashboard.jsx
import React from 'react';
import RippleEffectButton from '../shared/RippleEffectButton';
import { companyCards } from '../utils/constants';

const CompanyDashboard = ({ darkMode, onLogout }) => {
  return (
    <div className="animate-fadeIn space-y-8">
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

      {/* Logout Button - Optional: You might want to remove this too since header has Switch User */}
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

export default CompanyDashboard;