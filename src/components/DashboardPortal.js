// /src/DashboardPortal.jsx (Main App)

import React, { useState, useEffect } from 'react';

// Import shared components
import Header from '../shared/Header';
import RoleSelector from '../shared/RoleSelector';
import { LoadingScreen, TransitionLoader } from '../shared/Loader';

// Import dashboard components
import CompanyDashboard from '../pages/CompanyDashboard';
import SmitaDashboard from '../pages/SmitaDashboard';
import User3Dashboard from '../pages/User3Dashboard';

const DashboardPortal = () => {
  const [rememberedUser, setRememberedUser] = useState(null);
  const [showRoleSelect, setShowRoleSelect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);

    // Simulate initial loading
    const timer = setTimeout(() => {
      const user = localStorage.getItem('rememberedUser');
      if (user) {
        setRememberedUser(user);
      } else {
        setShowRoleSelect(true);
      }
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const handleRoleSelect = (role) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      localStorage.setItem('rememberedUser', role);
      setRememberedUser(role);
      setShowRoleSelect(false);
      setIsTransitioning(false);
    }, 800);
  };

  const handleSwitchUser = () => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      localStorage.removeItem('rememberedUser');
      setRememberedUser(null);
      setShowRoleSelect(true);
      setIsTransitioning(false);
    }, 500);
  };

  const renderDashboard = () => {
    switch (rememberedUser) {
      case 'Brijesh Kumar':
        return <CompanyDashboard darkMode={darkMode} />;
      case 'Smita Patel':
        return <SmitaDashboard darkMode={darkMode} />;
      default:
        return <User3Dashboard darkMode={darkMode} />;
    }
  };

  // Loading screen
  if (isLoading) {
    return <LoadingScreen darkMode={darkMode} />;
  }

  // Transition loading
  if (isTransitioning) {
    return <TransitionLoader darkMode={darkMode} />;
  }

  // Role selection screen
  if (showRoleSelect) {
    return (
      <RoleSelector 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        handleRoleSelect={handleRoleSelect}
      />
    );
  }

  // Main dashboard view
  return (
    <div className={`min-h-screen p-3 animate-fadeIn transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
      <div className="max-w-7xl mx-auto">
        <Header 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          rememberedUser={rememberedUser}
          handleSwitchUser={handleSwitchUser}
        />

        {/* Dashboard Content */}
        <div className="animate-fadeIn">
          {renderDashboard()}
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out both;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DashboardPortal;