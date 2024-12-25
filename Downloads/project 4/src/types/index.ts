export interface User {
  id: string;
  email: string;
  fullName: string;
  role: string;
  lastLogin: string;
}

export interface Flight {
  id: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  status: 'scheduled' | 'in-air' | 'landed' | 'cancelled';
  aircraft: string;
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