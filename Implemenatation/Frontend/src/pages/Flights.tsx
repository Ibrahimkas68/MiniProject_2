import React from "react";
import { useFlightStore } from "../lib/store";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { FlightCard } from "../components/flights/FlightCard";

export const FlightsPage = () => {
  const { flights, setFlights, setSelectedFlight } = useFlightStore();
  const [loading, setLoading] = React.useState(true); // For loading state
  const [error, setError] = React.useState(null);     // For error handling
  const [searchQuery, setSearchQuery] = React.useState(""); // Search input state

  React.useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/vol');
        if (!response.ok) {
          throw new Error('Failed to fetch flights');
        }
        const data = await response.json();
        setFlights(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [setFlights]);

  const filteredFlights = flights.filter((flight) =>
    flight.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    flight.destination.toLowerCase().includes(searchQuery.toLowerCase()) // Adjust based on available flight fields
  );

  if (loading) {
    return <div>Loading flights...</div>;
  }

  if (error) {
    return <div>Error loading flights: {error}</div>;
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search flights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border rounded-lg"
            />
          </div>
        </motion.div>

        <div className="space-y-6">
          {filteredFlights.length > 0 ? (
            filteredFlights.map((flight) => (
              <motion.div
                key={flight.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <FlightCard
                  flight={flight}
                  onSelect={(flight) => {
                    setSelectedFlight(flight);
                  }}
                />
              </motion.div>
            ))
          ) : (
            <div>No flights found.</div>
          )}
        </div>
      </div>
    </div>
  );
};
