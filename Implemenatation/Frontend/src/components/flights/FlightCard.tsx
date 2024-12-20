import React from 'react';
import { Flight } from '../../types';
import { Plane, Clock, DollarSign } from 'lucide-react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

interface FlightCardProps {
  flight: Flight;
  onSelect: (flight: Flight) => void;
}

export const FlightCard: React.FC<FlightCardProps> = ({ flight, onSelect }) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    onSelect(flight);
    navigate('/booking');
  };

  return (
    <div className="bg-background-lighter p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <Plane className="h-5 w-5 text-primary" />
            <span className="font-semibold">{flight.airline}</span>
          </div>
          <div className="mt-2 text-text-muted">Flight ID: {flight.id}</div>
        </div>
        <div className="text-xl font-bold text-primary">
          <DollarSign className="inline h-5 w-5" />
          {flight.price}
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-lg font-semibold">{flight.from}</div>
          <div className="text-text-muted">
            {format(new Date(flight.departureTime), 'HH:mm')}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-px w-16 bg-gray-600" />
          <Clock className="h-4 w-4 text-text-muted" />
          <div className="text-sm text-text-muted">{flight.duration}</div>
          <div className="h-px w-16 bg-gray-600" />
        </div>
        <div>
          <div className="text-lg font-semibold">{flight.to}</div>
          <div className="text-text-muted">
            {format(new Date(flight.arrivalTime), 'HH:mm')}
          </div>
        </div>
      </div>

      <button
        onClick={handleSelect}
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition-colors"
      >
        Select Flight
      </button>
    </div>
  );
};