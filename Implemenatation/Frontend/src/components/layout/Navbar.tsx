import React from 'react';
import { Link } from 'react-router-dom';
import { User, Menu } from 'lucide-react';
import Logo from "../../Assets/logo.png";


export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-background-lighter py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="SkyWings Logo" className="h-8 w-8 object-contain" />

        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/flights" className="text-text hover:text-primary transition-colors">Flights</Link>
          <Link to="/destinations" className="text-text hover:text-primary transition-colors">Destinations</Link>
          <Link to="/about" className="text-text hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="text-text hover:text-primary transition-colors">Contact</Link>
          <Link to="/login" className="flex items-center space-x-1 text-text hover:text-primary transition-colors">
            <User className="h-5 w-5" />

          </Link>
        </div>

        <button
          className="md:hidden text-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background-lighter py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link to="/flights" className="text-text hover:text-primary transition-colors">Flights</Link>
            <Link to="/destinations" className="text-text hover:text-primary transition-colors">Destinations</Link>
            <Link to="/about" className="text-text hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="text-text hover:text-primary transition-colors">Contact</Link>
            <Link to="/login" className="text-text hover:text-primary transition-colors">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};