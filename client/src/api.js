import axios from 'axios';

// Change baseURL to wherever your server is hosted
const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// If you want to send token automatically (once logged in), you can intercept requests:
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers['x-auth-token'] = token;
  }
  return req;
});

export default API;
