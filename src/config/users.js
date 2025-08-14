import CompanyDashboard from '../pages/CompanyDashboard';
import SmitaDashboard from '../pages/SmitaDashboard';
import User3Dashboard from '../pages/User3Dashboard';

export const USERS = {
  brajesh: {
    name: 'Brajesh Kumar',
    password: '1234',
    dashboard: CompanyDashboard,
    page: '/company-dashboard'
  },
  deepika: {
    name: 'Deepika Singh',
    password: '1234',
    dashboard: User3Dashboard,
    page: '/user3-dashboard'
  },
  smita: {
    name: 'Deepika Singh',
    password: '1234',
    dashboard: SmitaDashboard,
    page: '/smita-dashboard'
  }
};
