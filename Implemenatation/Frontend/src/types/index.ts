export interface Flight {
  destination: any;
  name: any;
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