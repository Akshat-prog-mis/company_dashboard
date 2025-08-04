import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPortal from './components/DashboardPortal';
import CompanyDashboard from './pages/CompanyDashboard';
import SmitaDashboard from './pages/SmitaDashboard';
import User3Dashboard from './pages/User3Dashboard';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DashboardPortal />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/smita-dashboard" element={<SmitaDashboard />} />
          <Route path="/user3-dashboard" element={<User3Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;