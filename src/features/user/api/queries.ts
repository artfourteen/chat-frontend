import { useMutation, useQuery } from "@tanstack/react-query";
import { userService } from "@/features/user/api/user.service";
import type { UpdateProfileRequest } from "@/features/user/model/types";
import { toastError } from "@/shared/lib";

export const useGetMe = (enabled = true) =>
  useQuery({
    queryKey: ["me"],
    queryFn: userService.getMe,
    enabled,
  });

export const useUpdateMe = () =>
  useMutation({
    mutationFn: (data: UpdateProfileRequest) => userService.updateProfile(data),
    onError: (err) => toastError(err),
  });
