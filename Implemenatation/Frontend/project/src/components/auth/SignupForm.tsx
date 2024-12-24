import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema } from '../../lib/validation'; // Validation schema
import { useAuthStore } from '../../lib/store'; // State management
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axiosInstance from '../../lib/axiosInstance'; // Import your custom axios instance
import axios from 'axios';

// Define the type for form data
type SignupFormData = {
  nom_complet: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const SignupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    console.log('Form data:', data); // Log form data
    try {
      const response = await axiosInstance.post('/auth/register', data);
      console.log('Response:', response); // Log response
      setUser(response.data.user);
      toast.success('Registration successful!');
      navigate('/login');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error response:', error.response); // Log error response
        toast.error(error.response?.data.message || 'Registration failed');
      } else {
        console.error('Error:', error); // Log other errors
        toast.error('An unexpected error occurred');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-text-muted">Full Name</label>
        <input
          type="text"
          {...register('nom_complet')}
          className="w-full mt-1 px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
        />
        {errors.nom_complet && (
          <p className="text-red-500 text-sm mt-1">{errors.nom_complet.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-text-muted">Email</label>
        <input
          type="email"
          {...register('email')}
          className="w-full mt-1 px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-text-muted">Password</label>
        <div className="relative">
          <input
            type={passwordVisible ? 'text' : 'password'}
            {...register('password')}
            className="w-full mt-1 px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute inset-y-0 right-3 flex items-center text-sm text-primary hover:text-primary-dark"
          >
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium text-text-muted">Confirm Password</label>
        <div className="relative">
          <input
            type={passwordVisible ? 'text' : 'password'}
            {...register('confirmPassword')}
            className="w-full mt-1 px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute inset-y-0 right-3 flex items-center text-sm text-primary hover:text-primary-dark"
          >
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition-colors"
      >
        Sign Up
      </button>
    </form>
  );
};