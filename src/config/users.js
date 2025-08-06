import CompanyDashboard from '../pages/CompanyDashboard';
import SmitaDashboard from '../pages/SmitaDashboard';
import User3Dashboard from '../pages/User3Dashboard';

export const USERS = {
  brijesh: {
    name: 'Brijesh',
    password: '123456789',
    dashboard: CompanyDashboard,
    page: '/company-dashboard'
  },
  deepika: {
    name: 'Deepika',
    password: 'deepika@123',
    dashboard: User3Dashboard,
    page: '/user3-dashboard'
  },
  smita: {
    name: 'Smita',
    password: 'smita@123',
    dashboard: SmitaDashboard,
    page: '/smita-dashboard'
  }
};