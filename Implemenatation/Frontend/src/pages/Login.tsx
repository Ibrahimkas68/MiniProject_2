import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const LoginPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-background-lighter p-8 rounded-lg shadow-xl"
      >
        <h1 className="text-2xl font-bold text-center mb-8">Welcome Back</h1>
        <LoginForm />
        <div className="mt-6 text-center text-text-muted">
          <p>Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:text-primary-dark">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};