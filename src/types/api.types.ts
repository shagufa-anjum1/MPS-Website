// API Error Response
export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

// API Request Config
export interface ApiRequestConfig {
  headers?: Record<string, string>;
  params?: Record<string, string | number>;
}
