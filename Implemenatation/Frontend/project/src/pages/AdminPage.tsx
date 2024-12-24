import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useAuthStore } from '../lib/store';

const AdminPage: React.FC = () => {
  const { user, isAuthenticated } = useAuthStore(); // Authentication state
  const [activeSection, setActiveSection] = useState('overview');
  const [loading, setLoading] = useState(false); // Loading state
  const [flights, setFlights] = useState<any[]>([]); // State to store the flights
  const [flightData, setFlightData] = useState({
    airline: '',
    iataorig: '',
    iatadest: '',
    departureTime: '',
    arrivalTime: '',
    price: 0,
    duration: '',
  });

  // Fetch flights data on page load
  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/admin/vols');
        const data = await response.json();
        setFlights(data);
      } catch (error) {
        console.error('Error fetching flights:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Handle adding a new flight
  const handleAddFlight = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/admin/vols', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(flightData),
      });

      if (!response.ok) {
        throw new Error('Failed to add flight');
      }

      // If the response is OK, we can log the success message
      const message = await response.text(); // Get the text response
      console.log(message);  // This will print "Vol added successfully."

      // Add the new flight to the local state (if you need to update the state with the new flight data)
      setFlights((prevFlights) => [...prevFlights, flightData]);
      alert('Flight added successfully!');
    } catch (error) {
      console.error('Error adding flight:', error);
      alert('Failed to add flight');
    } finally {
      setLoading(false);
    }

  };

  // Handle input changes in the form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFlightData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <div>Overview Section</div>;
      case 'flights':
        return (
          <div className="overflow-hidden rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-white">Add Flight</h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="airline" className="block text-sm font-medium text-white">Airline</label>
                  <input
                    id="airline"
                    type="text"
                    name="airline"
                    value={flightData.airline}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-2 border-blue-500 bg-transparent text-white focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="iataorig" className="block text-sm font-medium text-white">Origin IATA</label>
                  <input
                    id="iataorig"
                    type="text"
                    name="iataorig"
                    value={flightData.iataorig}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-2 border-blue-500 bg-transparent text-white focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="iatadest" className="block text-sm font-medium text-white">Destination IATA</label>
                  <input
                    id="iatadest"
                    type="text"
                    name="iatadest"
                    value={flightData.iatadest}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-2 border-blue-500 bg-transparent text-white focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="price" className="block text-sm font-medium text-white">Price</label>
                  <input
                    id="price"
                    type="number"
                    name="price"
                    value={flightData.price}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-2 border-blue-500 bg-transparent text-white focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="departureTime" className="block text-sm font-medium text-white">Departure Time</label>
                  <div className="relative">
                    <input
                      id="departureTime"
                      type="datetime-local"
                      name="departureTime"
                      value={flightData.departureTime}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-2 border-blue-500 bg-transparent text-white focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 pl-10"
                    />
                    <span className="absolute left-2 top-2 text-white">📅</span>
                  </div>
                </div>
                <div className="w-1/2">
                  <label htmlFor="arrivalTime" className="block text-sm font-medium text-white">Arrival Time</label>
                  <div className="relative">
                    <input
                      id="arrivalTime"
                      type="datetime-local"
                      name="arrivalTime"
                      value={flightData.arrivalTime}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-2 border-blue-500 bg-transparent text-white focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 pl-10"
                    />
                    <span className="absolute left-2 top-2 text-white">📅</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="duration" className="block text-sm font-medium text-white">Duration</label>
                  <input
                    id="duration"
                    type="text"
                    name="duration"
                    value={flightData.duration}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-2 border-blue-500 bg-transparent text-white focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleAddFlight}
                  disabled={loading}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                >
                  {loading ? 'Adding Flight...' : 'Add Flight'}
                </button>
              </div>
            </form>

            <h2 className="text-xl font-semibold mt-8 text-white">Flights List</h2>
            <table className="min-w-full mt-4">
              <thead>
                <tr>
                  <th className="text-left text-white px-4 py-2">Airline</th>
                  <th className="text-left text-white px-4 py-2">Origin</th>
                  <th className="text-left text-white px-4 py-2">Destination</th>
                  <th className="text-left text-white px-4 py-2">Price</th>
                  <th className="text-left text-white px-4 py-2">Departure</th>
                  <th className="text-left text-white px-4 py-2">Arrival</th>
                  <th className="text-left text-white px-4 py-2">Duration</th>
                </tr>
              </thead>
              <tbody>
                {flights.map((flight, index) => (
                  <tr key={index} className="hover:bg-gray-800">
                    <td className="text-white border-b px-4 py-2">{flight.airline}</td>
                    <td className="text-white border-b px-4 py-2">{flight.iataorig}</td>
                    <td className="text-white border-b px-4 py-2">{flight.iatadest}</td>
                    <td className="text-white border-b px-4 py-2">{flight.price}</td>
                    <td className="text-white border-b px-4 py-2">{flight.departureTime}</td>
                    <td className="text-white border-b px-4 py-2">{flight.arrivalTime}</td>
                    <td className="text-white border-b px-4 py-2">{flight.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onSectionChange={setActiveSection}
      />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPage;

