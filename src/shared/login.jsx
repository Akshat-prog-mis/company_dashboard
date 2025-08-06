import React from 'react';

const LoginForm = ({
  darkMode,
  username,
  password,
  error,
  setUsername,
  setPassword,
  handleLogin,
  toggleDarkMode
}) => {
  return (
    <div className={`min-h-screen flex items-center justify-center animate-fadeIn ${
      darkMode ? 'bg-gray-900' : 'bg-indigo-50'
    }`}>
      <form
        onSubmit={handleLogin}
        className={`p-8 rounded-xl shadow-lg w-full max-w-sm animate-slideUp ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        <h2 className={`text-2xl font-bold mb-6 text-center ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
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
            className={`w-full py-2 rounded ${
              darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;