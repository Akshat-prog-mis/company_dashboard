// src/pages/User4Dashboard.js
import React from 'react';
import { ArrowLeft, Zap, TrendingUp, PieChart, BarChart, Target } from 'lucide-react';

const User4Dashboard = () => {
  const handleBackToPortal = () => {
    localStorage.removeItem('selectedUser');
    localStorage.removeItem('userSelectedTime');
    localStorage.removeItem('lastActivity');
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-orange-800 to-red-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBackToPortal}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portal</span>
            </button>
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
              <p className="text-yellow-200">Data Analytics & Performance Insights</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold text-white">+23%</span>
            </div>
            <p className="text-yellow-200">Growth Rate</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <PieChart className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">85%</span>
            </div>
            <p className="text-yellow-200">Efficiency Score</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <BarChart className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">1.2M</span>
            </div>
            <p className="text-yellow-200">Data Points</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 text-red-400" />
              <span className="text-2xl font-bold text-white">94%</span>
            </div>
            <p className="text-yellow-200">Target Achievement</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Analytics Overview</h2>
          <div className="text-yellow-200">
            <p className="mb-4">Welcome to the Analytics Dashboard. Analyze data and track performance:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Real-time data visualization and reporting</li>
              <li>Performance metrics and KPI tracking</li>
              <li>Predictive analytics and forecasting</li>
              <li>Custom dashboard creation and sharing</li>
              <li>Data export and integration capabilities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User4Dashboard;