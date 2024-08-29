import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth/';

export default {
  login(username, password) {
    return axios.post(API_URL + 'login', { username, password });
  },
  
  logout() {
    localStorage.removeItem('token');
  },
  
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
};