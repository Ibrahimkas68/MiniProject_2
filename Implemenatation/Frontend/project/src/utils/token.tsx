import { jwtDecode } from "jwt-decode"; // Correct import

/**
 * Retrieves the JWT token from localStorage.
 * @returns The JWT token or null if not available.
 */
const getToken = (): string | null => {
  return localStorage.getItem('jwt');
};

/**
 * Saves the JWT token to localStorage.
 * @param token - The token to save.
 */
const saveToken = (token: string): void => {
  localStorage.setItem('jwt', token);
};

/**
 * Removes the JWT token from localStorage.
 */
const removeToken = (): void => {
  localStorage.removeItem('jwt');
};

/**
 * Checks if a given token is expired.
 * @param token - The JWT to check.
 * @returns True if the token is expired, otherwise false.
 */
const isTokenExpired = (token: string): boolean => {
  try {
    interface DecodedToken {
      exp: number;
    }

    const decoded: DecodedToken = jwtDecode<DecodedToken>(token);
    const currentTime = Date.now() / 1000;
    return typeof decoded.exp === 'number' && decoded.exp < currentTime;
  } catch (error) {
    console.error('Failed to decode token:', error);
    return true;
  }
};

export { getToken, saveToken, removeToken, isTokenExpired };