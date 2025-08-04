import React, { useState } from 'react';
import { User, Clock, CheckCircle, AlertTriangle, TrendingUp, Activity } from 'lucide-react';

const SmitaDashboard = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const operationsData = {
    todayStats: [
      { label: "Tasks Completed", value: "18", icon: CheckCircle, color: "green" },
      { label: "Pending Tasks", value: "5", icon: Clock, color: "yellow" },
      { label: "Priority Items", value: "3", icon: AlertTriangle, color: "red" },
      { label: "Team Efficiency", value: "94%", icon: TrendingUp, color: "blue" }
    ],
    recentActivities: [
      { time: "09:30 AM", activity: "Material Request Approved", status: "completed" },
      { time: "10:15 AM", activity: "Inventory Audit Initiated", status: "in-progress" },
      { time: "11:00 AM", activity: "Quality Check Report", status: "pending" },
      { time: "11:45 AM", activity: "Supplier Meeting Scheduled", status: "scheduled" },
      { time: "12:30 PM", activity: "Production Update Review", status: "completed" }
    ],
    quickActions: [
      { title: "Review Pending Requests", description: "5 material requests awaiting approval", action: "Review Now", color: "orange" },
      { title: "Daily Operations Report", description: "Generate today's summary report", action: "Generate", color: "blue" },
      { title: "Team Performance", description: "View team productivity metrics", action: "View Stats", color: "green" },
      { title: "Inventory Alerts", description: "Check low stock notifications", action: "Check Now", color: "red" }
    ]
  };

  const getStatusColor = (status) => {
    const colors = {
      completed: darkMode ? 'text-green-400' : 'text-green-600',
      'in-progress': darkMode ? 'text-blue-400' : 'text-blue-600',
      pending: darkMode ? 'text-yellow-400' : 'text-yellow-600',
      scheduled: darkMode ? 'text-purple-400' : 'text-purple-600'
    };
    return colors[status] || (darkMode ? 'text-gray-400' : 'text-gray-600');
  };

  const getStatusBg = (status) => {
    const colors = {
      completed: darkMode ? 'bg-green-900' : 'bg-green-100',
      'in-progress': darkMode ? 'bg-blue-900' : 'bg-blue-100',
      pending: darkMode ? 'bg-yellow-900' : 'bg-yellow-100',
      scheduled: darkMode ? 'bg-purple-900' : 'bg-purple-100'
    };
    return colors[status] || (darkMode ? 'bg-gray-800' : 'bg-gray-100');
  };

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className={`rounded-2xl mb-8 p-8 ${darkMode ? 'bg-gradient-to-br from-emerald-800 to-teal-900' : 'bg-gradient-to-br from-emerald-500 to-teal-600'}`}>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">Operations Dashboard</h1>
            <p className="text-white opacity-90">Welcome back, Smita Ji</p>
          </div>
        </div>
        <div className="flex space-x-1 mt-6">
          {['overview', 'activities', 'reports'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-white text-emerald-600' 
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {operationsData.todayStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl shadow-lg animate-slideUp hover:scale-105 transition-transform duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${stat.color}-100 ${darkMode ? `bg-${stat.color}-900` : ''}`}>
                      <IconComponent className={`w-6 h-6 text-${stat.color}-600 ${darkMode ? `text-${stat.color}-400` : ''}`} />
                    </div>
                    <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{stat.value}</span>
                  </div>
                  <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operationsData.quickActions.map((action, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-lg animate-slideUp hover:-translate-y-1 transition-all duration-300 cursor-pointer ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'}`}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className={`w-full h-1 bg-${action.color}-500 rounded-full mb-4`}></div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{action.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{action.description}</p>
                <button className={`bg-${action.color}-500 hover:bg-${action.color}-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300`}>
                  {action.action}
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Activities Tab */}
      {activeTab === 'activities' && (
        <div className={`rounded-xl shadow-lg p-6 animate-fadeIn ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Recent Activities</h2>
          <div className="space-y-4">
            {operationsData.recentActivities.map((activity, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:scale-102 ${getStatusBg(activity.status)}`}
              >
                <div className="flex-shrink-0">
                  <Activity className={`w-5 h-5 ${getStatusColor(activity.status)}`} />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>{activity.activity}</p>
                    <span className={`text-sm ${getStatusColor(activity.status)}`}>{activity.time}</span>
                  </div>
                  <p className={`text-sm capitalize ${getStatusColor(activity.status)}`}>{activity.status.replace('-', ' ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reports Tab */}
      {activeTab === 'reports' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Daily Reports</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Production Summary</span>
                <button className="text-blue-500 hover:text-blue-600 font-medium">View</button>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Inventory Status</span>
                <button className="text-blue-500 hover:text-blue-600 font-medium">View</button>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Quality Metrics</span>
                <button className="text-blue-500 hover:text-blue-600 font-medium">View</button>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Weekly Analysis</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Efficiency Trends</span>
                <button className="text-green-500 hover:text-green-600 font-medium">Generate</button>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Cost Analysis</span>
                <button className="text-green-500 hover:text-green-600 font-medium">Generate</button>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Performance Review</span>
                <button className="text-green-500 hover:text-green-600 font-medium">Generate</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
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
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out both;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default SmitaDashboard;