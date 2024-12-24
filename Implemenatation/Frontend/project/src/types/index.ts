export interface Flight {
  id: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  duration: string;
  airline: string;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  bookings: string[];
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  userType: string;
  lastLogin: string;
}

// Adjusted the status field to a specific union type.
export interface Flight {
  id: string;
  id_vol: number;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  duration: string;
  airline: string;
  flightNumber: string;
  origin: string;
  destination: string;
  status: 'scheduled' | 'in-air' | 'landed' | 'cancelled'; // Specific status values
  aircraft: string;
  iataorig: string; // Origin IATA code
  iatadest: string; // Destination IATA code
}


export interface Aircraft {
  id: string;
  type: string;
  model: string;
  capacity: number;
  status: 'active' | 'maintenance' | 'retired';
}

export interface Airport {
  id: string;
  code: string;
  name: string;
  city: string;
  country: string;
  capacity: number;
}

export interface ActionLog {
  id: string;
  action: string;
  timestamp: string;
  performedBy: string;
  details: string;
}