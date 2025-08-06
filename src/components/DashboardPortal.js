import React, { useState, useEffect } from 'react';
import Header from '../shared/Header';
import { LoadingScreen, TransitionLoader } from '../shared/Loader';
import LoginForm from '../shared/login';
import { authUtils } from '../utils/auth';
import { USERS } from '../config/users';

const DashboardPortal = () => {
  // State management with loading states
  const [isLoggedIn, setIsLoggedIn] = useState(authUtils.isSessionValid());
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser'));
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Check session validity periodically
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    
    const sessionCheck = setInterval(() => {
      if (isLoggedIn && !authUtils.isSessionValid()) {
        handleLogout();
      }
    }, 60000); // Check every minute

    return () => {
      clearTimeout(timer);
      clearInterval(sessionCheck);
    };
  }, [isLoggedIn]);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newValue = !prev;
      localStorage.setItem('darkMode', newValue.toString());
      return newValue;
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsTransitioning(true);

    if (USERS[username]?.password === password) {
      authUtils.login(username);
      setIsLoggedIn(true);
      setLoggedInUser(username);
      setError('');
    } else {
      setError('Invalid credentials');
    }

    setIsTransitioning(false);
  };

  const handleLogout = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      authUtils.logout();
      setIsLoggedIn(false);
      setLoggedInUser(null);
      setUsername('');
      setPassword('');
      setIsTransitioning(false);
    }, 500);
  };

  if (isLoading) return <LoadingScreen darkMode={darkMode} />;
  if (isTransitioning) return <TransitionLoader darkMode={darkMode} />;

  if (!isLoggedIn) {
    return (
      <LoginForm
        darkMode={darkMode}
        username={username}
        password={password}
        error={error}
        setUsername={setUsername}
        setPassword={setPassword}
        handleLogin={handleLogin}
        toggleDarkMode={toggleDarkMode}
      />
    );
  }

  const UserDashboard = USERS[loggedInUser]?.dashboard;
  
  return (
    <div className={`min-h-screen p-3 animate-fadeIn transition-colors duration-500 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto">
        <Header 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          rememberedUser={USERS[loggedInUser]?.name}
          handleSwitchUser={handleLogout}
        />
        <div className="animate-fadeIn">
          {UserDashboard && <UserDashboard darkMode={darkMode} onLogout={handleLogout} />}
        </div>
      </div>
    </div>
  );
};

export default DashboardPortal;