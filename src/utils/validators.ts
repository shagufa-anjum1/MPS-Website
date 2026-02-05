/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
};

/**
 * Validate required field
 */
export const isRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

/**
 * Validate minimum length
 */
export const minLength = (value: string, min: number): boolean => {
  return value.trim().length >= min;
};
