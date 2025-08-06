import React, { useState } from 'react';

const USERS = [
  { username: 'brijesh', password: '1234', page: '/company-dashboard' },
  { username: 'deepika', password: '1234', page: '/user3-dashboard' },
  { username: 'smita', password: '1234', page: '/smita-dashboard' }
];

const Login = ({ onLogin, darkMode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = USERS.find(
      u => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedInUser', user.username);
      localStorage.setItem('userPage', user.page);
      onLogin(user.page, user.username);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-indigo-50'}`}>
      <form
        onSubmit={handleSubmit}
        className={`p-8 rounded-xl shadow-lg w-full max-w-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
      >
        <h2 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Login</h2>
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
      </form>
    </div>
  );
};

export default Login;