import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Removed Plane import
import Logo from "../../Assets/logo.png";


export const Footer = () => {
  return (
    <footer className="bg-background-lighter py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">

              {/* Replace Plane icon with logo */}
              <img src={Logo} alt="SkyWings Logo" className="h-8 w-8 object-contain" />

              <span className="text-xl font-bold">Royal Air Maroc</span>
            </div>
            <p className="text-text-muted">Your journey begins with us. Experience the sky like never before.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-text-muted hover:text-primary transition-colors">About Us</Link>
              <Link to="/destinations" className="text-text-muted hover:text-primary transition-colors">Destinations</Link>
              <Link to="/flights" className="text-text-muted hover:text-primary transition-colors">Book Flights</Link>
              <Link to="/contact" className="text-text-muted hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/faq" className="text-text-muted hover:text-primary transition-colors">FAQ</Link>
              <Link to="/privacy" className="text-text-muted hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-text-muted hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link to="/support" className="text-text-muted hover:text-primary transition-colors">Customer Support</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-text-muted">
          <p>&copy; {new Date().getFullYear()} SkyWings Airlines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
