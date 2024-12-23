import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { flightSearchSchema } from '../../lib/validation';
import { useNavigate } from 'react-router-dom';
import { useFlightStore } from '../../lib/store';

export const Search = () => {
  const navigate = useNavigate();
  const setFlights = useFlightStore((state) => state.setFlights);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(flightSearchSchema),
    defaultValues: {
      from: '',
      to: '',
      date: '',
      passengers: 1
    }
  });

  const onSubmit = (data: any) => {
    // Simulated API call to search flights
    const searchResults = [
      {
        id: '1',
        from: data.from,
        to: data.to,
        departureTime: `${data.date}T10:00:00`,
        arrivalTime: `${data.date}T22:00:00`,
        price: 599,
        duration: '7h 00m',
        airline: 'SkyWings Airlines'
      },
      {
        id: '2',
        from: data.from,
        to: data.to,
        departureTime: `${data.date}T14:00:00`,
        arrivalTime: `${data.date}T16:30:00`,
        price: 499,
        duration: '5h 30m',
        airline: 'SkyWings Airlines'
      }
    ];

    setFlights(searchResults);
    navigate('/flights');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-background-lighter p-6 rounded-lg shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-text-muted">From</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-muted" />
            <input
              type="text"
              {...register('from')}
              placeholder="Departure City"
              className="w-full pl-10 pr-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
            />
          </div>
          {errors.from && (
            <p className="text-red-500 text-sm">{errors.from.message as string}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-text-muted">To</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-muted" />
            <input
              type="text"
              {...register('to')}
              placeholder="Destination City"
              className="w-full pl-10 pr-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
            />
          </div>
          {errors.to && (
            <p className="text-red-500 text-sm">{errors.to.message as string}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-text-muted">Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-muted" />
            <input
              type="date"
              {...register('date')}
              className="w-full pl-10 pr-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
            />
          </div>
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message as string}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-text-muted">Passengers</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-muted" />
            <select
              {...register('passengers')}
              className="w-full pl-10 pr-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text appearance-none"
            >
              <option value={1}>1 Passenger</option>
              <option value={2}>2 Passengers</option>
              <option value={3}>3 Passengers</option>
              <option value={4}>4+ Passengers</option>
            </select>
          </div>
          {errors.passengers && (
            <p className="text-red-500 text-sm">{errors.passengers.message as string}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors"
      >
        Search Flights
      </button>
    </form>
  );
};