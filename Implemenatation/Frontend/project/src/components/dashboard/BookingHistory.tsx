import React from 'react';
import { useAuthStore } from '../../lib/store';
import { Calendar, MapPin } from 'lucide-react';

export const BookingHistory = () => {
  const user = useAuthStore((state) => state.user);

  // Safely handle undefined or null user/bookings
  const bookings = user?.bookings || []; // Default to an empty array if undefined

  return (
    <div className="bg-background-lighter rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-text-muted">No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking, index) => (
            <div
              key={index} // Use index if `booking` isn't guaranteed to be unique
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
