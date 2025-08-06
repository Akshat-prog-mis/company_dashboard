import React, { useState, useEffect } from 'react';
import Header from '../shared/Header';
import { LoadingScreen, TransitionLoader } from '../shared/Loader';
import CompanyDashboard from '../pages/CompanyDashboard';
import SmitaDashboard from '../pages/SmitaDashboard';
import User3Dashboard from '../pages/User3Dashboard';

const USERS = {
  brijesh: {
    name: 'Brijesh Kumar',
    password: '123456789',
    dashboard: CompanyDashboard,
    page: '/company-dashboard'
  },
  deepika: {
    name: 'Deepika Singh',
    password: 'deepika@123',
    dashboard: User3Dashboard,
    page: '/user3-dashboard'
  },
  smita: {
    name: 'Smita Patel',
    password: 'smita@123',
    dashboard: SmitaDashboard,
    page: '/smita-dashboard'
  }
};

const DashboardPortal = () => {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem('loggedInUser'));
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handlers
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsTransitioning(true);

    // Simple validation (replace with your actual passwords)
    if (USERS[username]?.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedInUser', username);
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
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('loggedInUser');
      setIsLoggedIn(false);
      setLoggedInUser(null);
      setIsTransitioning(false);
    }, 500);
  };

  // Loading States
  if (isLoading) return <LoadingScreen darkMode={darkMode} />;
  if (isTransitioning) return <TransitionLoader darkMode={darkMode} />;

  // Login Form
  if (!isLoggedIn) {
    return (
      <div className={`min-h-screen flex items-center justify-center animate-fadeIn ${darkMode ? 'bg-gray-900' : 'bg-indigo-50'}`}>
        <form
          onSubmit={handleLogin}
          className={`p-8 rounded-xl shadow-lg w-full max-w-sm animate-slideUp ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <h2 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Dashboard Login
          </h2>
          
          {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
          
          <input
            className="w-full mb-4 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoFocus
          />
          
          <input
            className="w-full mb-6 p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded transition"
          >
            Login
          </button>

          <div className="mt-4">
            <button
              type="button"
              onClick={toggleDarkMode}
              className={`w-full py-2 rounded ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </form>
      </div>
    );
  }

  // Dashboard View
  const UserDashboard = USERS[loggedInUser]?.dashboard;
  
  return (
    <div className={`min-h-screen p-3 animate-fadeIn transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-gray-100'}`}>
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