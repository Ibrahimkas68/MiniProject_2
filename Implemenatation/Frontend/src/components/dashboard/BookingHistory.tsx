import React from 'react';
import { useAuthStore } from '../../lib/store';
import { Calendar, MapPin } from 'lucide-react';

export const BookingHistory = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="bg-background-lighter rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
      {user?.bookings.length === 0 ? (
        <p className="text-text-muted">No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {user?.bookings.map((booking) => (
            <div
              key={booking}
              className="border border-gray-700 rounded-lg p-4 hover:border-primary transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>New York (JFK) → London (LHR)</span>
                  </div>
                  <div className="flex items-center space-x-2 text-text-muted">
                    <Calendar className="h-4 w-4" />
                    <span>March 15, 2024</span>
                  </div>
                </div>
                <span className="text-primary font-semibold">Confirmed</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};