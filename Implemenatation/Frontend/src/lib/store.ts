import { create } from 'zustand';
import { Flight, User } from '../types';

interface AuthState {
  user: User | null;
  setUser: (user: { email: string }) => void;
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

export const useFlightStore = create<FlightState>((set) => ({
  flights: [],
  setFlights: (flights) => set({ flights }),
  selectedFlight: null,
  setSelectedFlight: (flight) => set({ selectedFlight: flight }),
}));