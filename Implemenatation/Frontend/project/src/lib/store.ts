import { create } from 'zustand';
import { Flight, User } from '../types';

// Auth store to manage user authentication state
interface AuthState {
  user: User | null; // User can either be of type `User` or null
  setUser: (user: User | null) => void; // Method to set the user
  isAuthenticated: boolean; // Boolean to check if the user is authenticated
}


export const useAuthStore = create<AuthState>((set) => ({
  user: null, // Default value of `user` is null
  setUser: (user) => set({ user, isAuthenticated: !!user }), // Set user and isAuthenticated flag
  isAuthenticated: false, // Default value of isAuthenticated is false
}));

// Flight store to manage flight-related state
interface FlightState {
  flights: Flight[]; // Array to store flight information
  setFlights: (flights: Flight[]) => void; // Method to update flights
  selectedFlight: Flight | null; // Selected flight (or null if none is selected)
  setSelectedFlight: (flight: Flight | null) => void; // Method to set the selected flight
}

export const useFlightStore = create<FlightState>((set) => ({
  flights: [], // Default value of flights is an empty array
  setFlights: (flights) => set({ flights }), // Set the flights state
  selectedFlight: null, // Default selected flight is null
  setSelectedFlight: (flight) => set({ selectedFlight: flight }), // Set selected flight
}));
