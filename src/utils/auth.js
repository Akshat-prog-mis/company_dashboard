export const authUtils = {
  login: (username) => {
    const loginTime = new Date().getTime();
    localStorage.setItem('loginTime', loginTime);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedInUser', username);
  },

  logout: () => {
    localStorage.removeItem('loginTime');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
  },

  isSessionValid: () => {
    const loginTime = localStorage.getItem('loginTime');
    if (!loginTime) return false;
    const now = new Date().getTime();
    const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours
    return now - parseInt(loginTime) < sessionDuration;
  }
};