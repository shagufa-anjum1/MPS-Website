import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { ApiResponse, ApiError } from '@types/api.types';

/**
 * API Service Class
 * Centralized API handler with interceptors for requests and responses
 */
class ApiService {
  private api: AxiosInstance;
  private readonly baseURL: string;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

    this.api = axios.create({
      baseURL: this.baseURL,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.initializeInterceptors();
  }

  /**
   * Setup request and response interceptors
   */
  private initializeInterceptors(): void {
    // Request Interceptor
    this.api.interceptors.request.use(
      (config) => {
        // Add auth token if available
        const token = localStorage.getItem('authToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        // Log request in development
        if (import.meta.env.DEV) {
          console.log('🚀 API Request:', config.method?.toUpperCase(), config.url);
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response Interceptor
    this.api.interceptors.response.use(
      (response) => {
        // Log response in development
        if (import.meta.env.DEV) {
          console.log('✅ API Response:', response.config.url, response.status);
        }
        return response;
      },
      (error: AxiosError<ApiError>) => {
        return this.handleError(error);
      }
    );
  }

  /**
   * Centralized error handler
   */
  private handleError(error: AxiosError<ApiError>): Promise<never> {
    if (error.response) {
      // Server responded with error status
      const apiError: ApiError = {
        message: error.response.data?.message || 'An error occurred',
        statusCode: error.response.status,
        errors: error.response.data?.errors,
      };

      // Handle specific status codes
      switch (error.response.status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem('authToken');
          window.location.href = '/login';
          break;
        case 403:
          console.error('Access forbidden');
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Internal server error');
          break;
      }

      return Promise.reject(apiError);
    } else if (error.request) {
      // Request made but no response received
      return Promise.reject({
        message: 'No response from server. Please check your connection.',
        statusCode: 0,
      });
    } else {
      // Error in request setup
      return Promise.reject({
        message: error.message || 'An unexpected error occurred',
        statusCode: 0,
      });
    }
  }

  /**
   * GET request
   */
  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await this.api.get(url, config);
    return response.data;
  }

  /**
   * POST request
   */
  public async post<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await this.api.post(url, data, config);
    return response.data;
  }

  /**
   * PUT request
   */
  public async put<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await this.api.put(url, data, config);
    return response.data;
  }

  /**
   * DELETE request
   */
  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await this.api.delete(url, config);
    return response.data;
  }

  /**
   * PATCH request
   */
  public async patch<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await this.api.patch(url, data, config);
    return response.data;
  }
}

// Export singleton instance
export default new ApiService();
