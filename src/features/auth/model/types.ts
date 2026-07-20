export interface AuthResponse {
  access_token: string;
}

export interface LoginRequest {
  login: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}
