import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from "@/features/auth/model/types";
import { api } from "@/shared/api";

class AuthService {
  async login(data: LoginRequest) {
    const res = await api.post<AuthResponse>("/auth/login", data);
    return res.data;
  }

  async register(data: RegisterRequest) {
    const res = await api.post<AuthResponse>("/auth/register", data);
    return res.data;
  }
}
export const authService = new AuthService();
