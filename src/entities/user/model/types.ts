import type { AVATAR_COLORS } from "@/entities/user/lib/consts";

export type AvatarColor = (typeof AVATAR_COLORS)[number];

export interface PublicUser {
  id: string;
  username: string;
  created_at: string;
}

export interface User extends PublicUser {
  email: string;
}

export interface UpdateProfileRequest {
  username?: string;
  email?: string;
}
