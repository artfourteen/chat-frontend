import type { UpdateProfileRequest, User } from "@/entities/user/model/types";
import { api } from "@/shared/api";

class UserService {
  async getMe() {
    const res = await api.get<User>("/users/me");
    return res.data;
  }

  async updateProfile(data: UpdateProfileRequest) {
    const res = await api.patch<User>("/users/me", data);
    return res.data;
  }
}
export const userService = new UserService();
