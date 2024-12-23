import React from 'react';
import { Navigate } from 'react-router-dom';

// Helper for protected routes
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('jwtToken');
  
  // If no token, redirect to login
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

