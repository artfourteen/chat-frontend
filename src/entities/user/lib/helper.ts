import { AVATAR_COLORS } from "@/entities/user/lib/consts";
import type { AvatarColor } from "@/entities/user/model/types";

export const getAvatarColor = (username: string): AvatarColor => {
  const hash = getUserHash(username);
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
};

const getUserHash = (username: string): number => {
  let hash = 0;
  for (const char of username) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }
  return hash;
};
