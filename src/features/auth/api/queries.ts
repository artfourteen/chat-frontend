import { useMutation } from "@tanstack/react-query";

import { authService } from "@/features/auth/api/auth.service";
import type {
  LoginRequest,
  RegisterRequest,
} from "@/features/auth/model/types";
import { authCookies } from "@/shared/api";
import { toastError } from "@/shared/lib";

export const useLogin = () =>
  useMutation({
    mutationFn: (data: LoginRequest) => authService.login(data),
    onSuccess: (res) => authCookies.setAccess(res.access_token),
    onError: (err) => {
      console.log("ERROR:", err);
      toastError(err);
    },
  });

export const useRegister = () =>
  useMutation({
    mutationFn: (data: RegisterRequest) => authService.register(data),
    onSuccess: (res) => authCookies.setAccess(res.access_token),
    onError: (err) => toastError(err),
  });
