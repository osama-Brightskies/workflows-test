import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// API response type
export interface ErrorResponse {
  message?: string;
  errors?: Record<string, string[]>;
}

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  status: number;
}

// API error type
export interface ApiError {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
}

// Create axios instance
const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000', // Replace with your API base URL
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(handleAxiosError(error));
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError) => {
        return Promise.reject(handleAxiosError(error));
    }
);

// Error handler
export function handleAxiosError(error: AxiosError): ApiError {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const status = error.response.status;
        
        if (status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }

        return {
            message: (error.response.data as ErrorResponse)?.message || 'An error occurred',
            status: status,
            errors: (error.response.data as ErrorResponse)?.errors
        };
    } else if (error.request) {
        // The request was made but no response was received
        return {
            message: 'No response received from server',
            status: 0
        };
    } else {
        // Something happened in setting up the request that triggered an Error
        return {
            message: error.message || 'An error occurred',
            status: 0
        };
    }
}

export default axiosInstance; 