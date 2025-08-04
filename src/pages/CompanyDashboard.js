// /src/components/Dashboards/CompanyDashboard.jsx

import React from 'react';
import RippleEffectButton from '../shared/RippleEffectButton';
import { companyStats, companyCards } from '../utils/constants';

const CompanyDashboard = ({ darkMode }) => {
  return (
    <div className="animate-fadeIn">
      {/* Company Header */}
      <div className={`relative overflow-hidden rounded-2xl mb-8 ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-600 to-purple-700'}`}>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='0.5'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>")`
          }}></div>
        </div>
        
        <div className="relative z-10 text-center py-12 px-8">
          {/* Company Logo */}
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-white">TT</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Truetone Print System Private Limited
          </h1>
          <p className="text-xl text-white opacity-90">IMS Dashboard Portal</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {companyStats.map((stat, index) => (
          <div
            key={index}
            className={`text-center p-6 rounded-xl shadow-lg animate-slideUp ${darkMode ? 'bg-gradient-to-br from-blue-800 to-purple-800' : 'bg-gradient-to-br from-blue-500 to-purple-600'}`}
            style={{ animationDelay: stat.delay }}
          >
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-white opacity-90">{stat.label}</div>
          </div>
        ))}
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

      {/* Footer */}
      <div className={`mt-12 text-center py-8 px-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          © 2025 Truetone Print System Private Limited. All rights reserved. | Inventory Management System
        </p>
      </div>
    </div>
  );
};

export default CompanyDashboard;