import axiosInstance, { ApiResponse, ApiError } from "./axiosConfig";
import { AxiosRequestConfig } from "axios";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface RequestOptions
  extends Omit<AxiosRequestConfig, "url" | "method"> {
  params?: Record<string, string | number | boolean>;
  data?: unknown;
}

async function httpRequest<T>(
  method: HttpMethod,
  url: string,
  options: RequestOptions = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await axiosInstance({
      method,
      url,
      ...options,
    });

    return {
      data: response.data,
      status: response.status,
      message: response.data?.message,
    };
  } catch (error) {
    throw error as ApiError;
  }
}

// Type-safe HTTP method wrappers
export async function get<T>(
  url: string,
  options?: RequestOptions
): Promise<T> {
  const response = await httpRequest<T>("GET", url, options);
  return response.data;
}

export async function post<T>(
  url: string,
  data?: unknown,
  options?: Omit<RequestOptions, "data">
): Promise<T> {
  const response = await httpRequest<T>("POST", url, { ...options, data });
  return response.data;
}

export async function put<T>(
  url: string,
  data?: unknown,
  options?: Omit<RequestOptions, "data">
): Promise<T> {
  const response = await httpRequest<T>("PUT", url, { ...options, data });
  return response.data;
}

export async function patch<T>(
  url: string,
  data?: unknown,
  options?: Omit<RequestOptions, "data">
): Promise<T> {
  const response = await httpRequest<T>("PATCH", url, { ...options, data });
  return response.data;
}

export async function del<T>(
  url: string,
  options?: RequestOptions
): Promise<T> {
  const response = await httpRequest<T>("DELETE", url, options);
  return response.data;
}

const http = {
  get,
  post,
  put,
  patch,
  delete: del,
  request: httpRequest,
};

export default http;
