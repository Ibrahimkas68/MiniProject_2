import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../lib/validation'; // Validation schema
import { useAuthStore } from '../../lib/store'; // Store for user authentication state
import { useNavigate } from 'react-router-dom'; // Navigation
import toast from 'react-hot-toast'; // Toast notifications
import axios, { AxiosError } from 'axios'; // For API requests

// Define the type for form data
type LoginFormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  // Initialize form
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema), // Validate form with Zod schema
  });

  // State management and navigation
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  // Handle form submission
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      // Send login request to the server
      const response = await axios.post('http://localhost:8081/api/login', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        // Update user state and navigate to dashboard
        setUser({ email: data.email });
        toast.success('Successfully logged in!');
        navigate('/dashboard'); // Navigate to the dashboard
      }
    } catch (error: unknown) {
      // Handle errors safely
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast.error('Invalid email or password.');
        } else {
          toast.error('An error occurred. Please try again.');
        }
      } else {
        // If the error is not an AxiosError, handle it here
        toast.error('An unexpected error occurred.');
      }
    }
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-text-muted">Email</label>
          <input
              type="email"
              {...register('email')}
              className="w-full mt-1 px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
          />
          {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-text-muted">Password</label>
          <input
              type="password"
              {...register('password')}
              className="w-full mt-1 px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
          />
          {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Login
        </button>
      </form>
  );
};
