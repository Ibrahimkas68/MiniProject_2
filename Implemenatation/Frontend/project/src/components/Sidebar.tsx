import React from 'react';
import { Users, Plane, Building2, MapPin, LayoutDashboard } from 'lucide-react';
import Logo from './Logo';

interface SidebarProps {
  activeSection: string;

  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  onSectionChange: (section: string) => void;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'flights', label: 'Flights', icon: Plane },
    { id: 'aircraft', label: 'Aircraft', icon: Building2 },
    { id: 'airports', label: 'Airports', icon: MapPin },
    { id: 'equipage', label: 'Equipage', icon: Users },
  ];

  return (
    <div className="bg-dark-900 w-64 min-h-screen border-r border-dark-700 mt-16">
      
      <Logo />
      <nav className="p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg mb-2 transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-[#007BFF] text-white' // Change active background to blue
                  : 'text-gray-400 hover:bg-blue-600 hover:text-white' // Change hover effect to blue
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
