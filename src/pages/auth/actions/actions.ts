'use server';

import { post } from '../../../utils/http';

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

interface AuthError {
  message: string;
  errors?: Record<string, string[]>;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  try {
    return await post<LoginResponse>('api/v1/auth/login', { email, password });
  } catch (error) {
    const authError = error as AuthError;
    throw new Error(authError.message || 'Login failed');
  }
}

export async function logout(): Promise<{ message: string }> {
  try {
    return await post<{ message: string }>('api/v1/auth/logout');
  } catch (error) {
    const authError = error as AuthError;
    throw new Error(authError.message || 'Logout failed');
  }
}

