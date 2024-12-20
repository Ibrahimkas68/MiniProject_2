import React from 'react';
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
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;