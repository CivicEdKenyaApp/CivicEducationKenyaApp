// lib/utils.ts

// Format a date to a more user-friendly format (e.g., "Jan 1, 2024")
export const formatDate = (date: string | Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  
  // Check if a string is a valid email address
  export const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  // Retrieve a value from local storage and parse it (if needed)
  export const getFromLocalStorage = (key: string): any => {
    const value = localStorage.getItem(key);
    try {
      return value ? JSON.parse(value) : null;
    } catch (e) {
      console.error('Error parsing localStorage item:', e);
      return value;
    }
  };
  
  // Save a value to local storage
  export const saveToLocalStorage = (key: string, value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  };
  
  // Format numbers (e.g., for displaying monetary amounts or large numbers)
  export const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };
  
  // Function to determine if a user is authenticated (example with token in localStorage)
  export const isAuthenticated = (): boolean => {
    const token = getFromLocalStorage('authToken');
    return !!token; // Return true if token exists, false otherwise
  };
  
  // Calculate t
  