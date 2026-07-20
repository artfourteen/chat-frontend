import axios, { type AxiosError } from "axios";
import { authCookies } from "@/shared/api/cookies";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  headers: { "Content-Type": "application/json", Accept: "*/*" },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = authCookies.getAccess();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      authCookies.clear();
      if (typeof window !== "undefined" && window.location.pathname !== "/login") {
        window.location.assign("/login");
      }
    }
    return Promise.reject(err);
  },
);
