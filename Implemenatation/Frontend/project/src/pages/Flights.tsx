// FlightsPage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search } from '../components/shared/Search';
import { FlightCard } from '../components/flights/FlightCard';
import { useFlightStore } from '../lib/store';

export const FlightsPage = () => {
  const { flights, setFlights, setSelectedFlight } = useFlightStore();

  // Fetch flights (GET request)
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/admin/vols`);
        if (response.ok) {
          const data = await response.json();
          setFlights(data);
        } else {
          console.error('Failed to fetch flights. Status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    fetchFlights();
  }, [setFlights]);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Search />
        </motion.div>

        {/* Flights List */}
        {/* Flights List */}
        <div className="space-y-6">
          {flights.map((flight, index) => (
              <motion.div
                  key={flight.id || `${flight.iataorig}-${flight.iatadest}-${index}`} // Add index as a fallback
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
              >
                <FlightCard
                    flight={flight}
                    onSelect={(selectedFlight) => setSelectedFlight(selectedFlight)}
                />
              </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
