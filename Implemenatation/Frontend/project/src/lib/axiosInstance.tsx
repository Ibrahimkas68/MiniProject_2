import axios from 'axios';
import toast from 'react-hot-toast';
import { isTokenExpired } from '../utils/token';

/**
 * Axios instance configured with interceptors.
 */
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your API's base URL
});

// Request interceptor to attach the token and handle refresh
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('jwt');

    if (token) {
      if (isTokenExpired(token)) {
        try {
          const newToken = await refreshToken();
          config.headers.Authorization = `Bearer ${newToken}`;
        } catch (error) {
          toast.error('Authentication error. Redirecting to login.');
          window.location.href = '/login'; // Redirect to login
          return Promise.reject(error);
        }
      } else {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle unauthorized responses
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      toast.error('Unauthorized. Please log in again.');
      localStorage.removeItem('jwt');
      window.location.href = '/login'; // Redirect to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
async function refreshToken() {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/refresh', {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { token } = response.data;
    localStorage.setItem('jwt', token);
    return token;
  } catch (error) {
    toast.error('Failed to refresh token. Please log in again.');
    localStorage.removeItem('jwt');
    window.location.href = '/login'; // Redirect to login
    throw error;
  }
}

