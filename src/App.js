import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import DashboardPortal from './components/DashboardPortal';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <DashboardPortal />
      </div>
    </Router>
  );
}

export default App;