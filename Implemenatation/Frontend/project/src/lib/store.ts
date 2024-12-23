import { create } from 'zustand';
import { Flight, User } from '../types';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
}

interface FlightState {
  flights: Flight[];
  setFlights: (flights: Flight[]) => void;
  selectedFlight: Flight | null;
  setSelectedFlight: (flight: Flight | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  isAuthenticated: false,
}));



interface FlightStore {
  flights: Flight[]; // Define Flight array
  setFlights: (flights: Flight[]) => void; // Set the flights state
  selectedFlight: Flight | null;
  setSelectedFlight: (flight: Flight | null) => void;
}

export const useFlightStore = create<FlightStore>((set) => ({
  flights: [], // Initial empty flights array
  setFlights: (flights) => set({ flights }), // Update flights state
  selectedFlight: null,
  setSelectedFlight: (flight) => set({ selectedFlight: flight }), // Set selected flight
}));

