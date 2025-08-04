// /src/components/Shared/Loader.jsx

import React from 'react';
import { Loader2, Sparkles } from 'lucide-react';

export const LoadingScreen = ({ darkMode }) => (
  <div className={`flex flex-col items-center justify-center h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-indigo-50 via-white to-cyan-50'}`}>
    {/* Floating particles */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 rounded-full animate-float ${darkMode ? 'bg-blue-400' : 'bg-indigo-300'}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
    
    <div className="relative z-10">
      <div className={`w-20 h-20 border-4 rounded-full animate-spin ${darkMode ? 'border-gray-700 border-t-blue-500' : 'border-indigo-200 border-t-indigo-600'}`}>
        <div className={`w-4 h-4 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 ${darkMode ? 'bg-blue-500' : 'bg-indigo-600'}`}></div>
      </div>
      <Loader2 className={`w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin ${darkMode ? 'text-blue-500' : 'text-indigo-600'}`} />
    </div>
    <div className="mt-8 text-center z-10">
      <h2 className={`text-2xl font-bold mb-2 animate-pulse ${darkMode ? 'text-white' : 'text-gray-800'}`}>Loading Dashboard Portal</h2>
      <div className="flex space-x-1">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full animate-bounce ${darkMode ? 'bg-blue-500' : 'bg-indigo-600'}`}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  </div>
);

export const TransitionLoader = ({ darkMode }) => (
  <div className={`flex flex-col items-center justify-center h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-indigo-50 via-white to-cyan-50'}`}>
    <div className="relative">
      <div className={`w-16 h-16 border-4 rounded-full animate-spin ${darkMode ? 'border-gray-700 border-t-blue-500' : 'border-indigo-300 border-t-indigo-600'}`}></div>
      <Sparkles className={`w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse ${darkMode ? 'text-blue-400' : 'text-indigo-500'}`} />
    </div>
    <p className={`mt-4 text-lg animate-pulse ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Switching dashboard...</p>
  </div>
);