import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registrationSchema = loginSchema.extend({
  nom_complet: z.string().min(2, 'Full Name must be at least 2 characters'), // Full Name field validation
  confirmPassword: z.string(), // Confirm password field validation
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match", // Passwords must match
  path: ["confirmPassword"], // Set error on confirmPassword field if validation fails
});

export const flightSearchSchema = z.object({
  from: z.string().min(2, 'Please select departure city'),
  to: z.string().min(2, 'Please select destination city'),
  date: z.string().min(1, 'Please select date'),
  passengers: z.number().min(1).max(9),
});

export const bookingSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  cardNumber: z.string().regex(/^\d{16}$/, 'Invalid card number'),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Invalid expiry date (MM/YY)'),
  cvv: z.string().regex(/^\d{3,4}$/, 'Invalid CVV'),
});