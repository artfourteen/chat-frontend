export interface PublicUserResponse {
  id: string;
  username: string;
  created_at: string;
}

export interface UserResponse extends PublicUserResponse {
  email: string;
}

export interface UpdateProfileRequest {
  username?: string;
  email?: string;
}
