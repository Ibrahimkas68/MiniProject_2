import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../lib/store';
import { CreditCard, Settings, User } from 'lucide-react';
import { BookingHistory } from '../components/dashboard/BookingHistory';

export const DashboardPage = () => {
  const { user, isAuthenticated, setUser } = useAuthStore();

  console.log(user); // Log the user to inspect its structure

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-background-lighter rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-6">
                {/* User Profile Image or Icon */}
                <div className="bg-primary rounded-full p-3">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="font-semibold">{user?.name || 'No Name Available'}</h2> {/* Safe fallback */}
                  <p className="text-text-muted text-sm">{user?.email || 'No Email Available'}</p> {/* Safe fallback */}
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
                {/* Logout Button */}
                <button
                  className="w-full flex items-center space-x-2 px-4 py-2 rounded-md text-red-600 hover:bg-red-100"
                  onClick={() => setUser(null)} // Log out action
                >
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-3">
            <BookingHistory />
          </div>
        </div>
      </div>
    </div>
  );
};