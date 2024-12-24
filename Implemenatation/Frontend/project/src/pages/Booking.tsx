import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFlightStore, useAuthStore } from '../lib/store';
import { motion } from 'framer-motion';
import { CreditCard, Users, Plane } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema } from '../lib/validation';
import toast from 'react-hot-toast';

export const BookingPage = () => {
  const navigate = useNavigate();
  const { selectedFlight } = useFlightStore();
  const { isAuthenticated } = useAuthStore();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  React.useEffect(() => {
    if (!selectedFlight) {
      navigate('/flights');
    }
  }, [selectedFlight, navigate]);

  if (!selectedFlight) {
    return null;
  }

  const onSubmit = (_data: any) => {
    if (!isAuthenticated) {
      toast.error('Please login to complete your booking');
      navigate('/login');
      return;
    }

    // Simulate booking process
    toast.success('Booking confirmed! Check your email for details.');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-background-lighter rounded-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold mb-6">Flight Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Plane className="h-5 w-5 text-primary" />
                <span className="font-semibold">{selectedFlight.airline}</span>
              </div>
              <div className="text-text-muted">Flight ID: {selectedFlight.id}</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">${selectedFlight.price}</div>
              <div className="text-text-muted">per passenger</div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div className="bg-background-lighter rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Passenger Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  {...register('firstName')}
                  className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message as string}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register('lastName')}
                  className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message as string}</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-background-lighter rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-muted" />
                  <input
                    type="text"
                    {...register('cardNumber')}
                    placeholder="1234 5678 9012 3456"
                    className="w-full pl-10 px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
                  />
                </div>
                {errors.cardNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message as string}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    {...register('expiryDate')}
                    placeholder="MM/YY"
                    className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
                  />
                  {errors.expiryDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message as string}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    {...register('cvv')}
                    placeholder="123"
                    className="w-full px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
                  />
                  {errors.cvv && (
                    <p className="text-red-500 text-sm mt-1">{errors.cvv.message as string}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors"
          >
            Confirm Booking
          </button>
        </motion.form>
      </div>
    </div>
  );
};