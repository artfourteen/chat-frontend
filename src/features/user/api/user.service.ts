import type {
  UpdateProfileRequest,
  UserResponse,
} from "@/features/user/model/types";
import { api } from "@/shared/api";

class UserService {
  async getMe() {
    const res = await api.get<UserResponse>("/users/me");
    return res.data;
  }

  async updateProfile(data: UpdateProfileRequest) {
    const res = await api.patch<UserResponse>("/users/me", data);
    return res.data;
  }
}
export const userService = new UserService();
