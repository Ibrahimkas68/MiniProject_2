import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registrationSchema } from '../../lib/validation'; // Validation schema
import { useAuthStore } from '../../lib/store'; // State management
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';

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

  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', data, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        setUser({
          email: data.email,
          name: data.nom_complet,
          id: response.data.userId, // Assuming userId is returned
          bookings: [], // Placeholder for bookings
          fullName: data.nom_complet,
          role: response.data.role, // Assuming role is returned
          lastLogin: new Date().toISOString(), // Placeholder for last login
        });
        toast.success('Account created successfully!');
        navigate('/login');
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 403) {
          toast.error('Email is already in use.');
        } else {
          toast.error('An error occurred. Please try again.');
        }
      } else {
        toast.error('An unexpected error occurred.');
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
        <input
          type="password"
          {...register('password')}
          className="w-full mt-1 px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium text-text-muted">Confirm Password</label>
        <input
          type="password"
          {...register('confirmPassword')}
          className="w-full mt-1 px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
        />
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