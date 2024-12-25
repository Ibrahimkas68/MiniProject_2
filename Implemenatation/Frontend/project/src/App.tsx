import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { LoginPage } from './pages/Login';
import { DashboardPage } from './pages/Dashboard';
import { FlightsPage } from './pages/Flights';
import { BookingPage } from './pages/Booking';
import { DestinationsPage } from './pages/Destinations';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import AdminPage from './pages/AdminPage';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './components/PrivateRoute';
import { SignupPage } from './pages/Signup';
import FaqPage from './pages/Faq';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <Router>
      <div className="min-h-screen bg-background text-text">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<><Navbar /><Hero /><Footer /></>} />
          <Route path="/login" element={<><Navbar /><LoginPage /><Footer /></>} />
          <Route path="/flights" element={<><Navbar /><FlightsPage /><Footer /></>} />
          <Route path="/booking" element={<><Navbar /><BookingPage /><Footer /></>} />
          <Route path="/destinations" element={<><Navbar /><DestinationsPage /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><ContactPage /><Footer /></>} />
          <Route path="/register" element={<><Navbar /><SignupPage /><Footer /></>} />
          <Route path="/faq" element={<><Navbar /><FaqPage /><Footer /></>} />
          <Route path="/PrivacyPolicy" element={<><Navbar /><PrivacyPolicy /><Footer /></>} />
          <Route path="/TermsAndConditions" element={<><Navbar /><TermsAndConditions /><Footer /></>} />


          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <><Navbar /><DashboardPage /><Footer /></>
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/*"
            element={
              <PrivateRoute>
                <><Navbar /><AdminPage /><Footer /></>
              </PrivateRoute>
            }
          />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
