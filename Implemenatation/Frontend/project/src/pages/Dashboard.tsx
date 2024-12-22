import React from 'react';
import { useAuthStore } from '../lib/store';
import { BookingHistory } from '../components/dashboard/BookingHistory';
import { Navigate } from 'react-router-dom';
import { User, Settings, CreditCard } from 'lucide-react';

export const DashboardPage = () => {
  const { user, isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="bg-background-lighter rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary rounded-full p-3">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="font-semibold">{user?.name}</h2>
                  <p className="text-text-muted text-sm">{user?.email}</p>
                </div>
              </div>
              <nav className="space-y-2">
                <button className="w-full flex items-center space-x-2 px-4 py-2 rounded-md bg-primary/10 text-primary">
                  <CreditCard className="h-5 w-5" />
                  <span>My Bookings</span>
                </button>
                <button className="w-full flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-background/50 text-text-muted">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </nav>
            </div>
          </div>
          <div className="md:col-span-3">
            <BookingHistory />
          </div>
        </div>
      </div>
    </div>
  );
};