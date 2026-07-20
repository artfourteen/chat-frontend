"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useLogin } from "@/features/auth/api/queries";
import { type LoginFormData, loginSchema } from "@/features/auth/model/schemas";
import { Button } from "@/shared/ui/button";
import { LabelInput } from "@/shared/ui/label-input";

export const LoginForm = () => {
  const loginMutation = useLogin();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data, {
      onSuccess: () => router.push("/"),
    });
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <LabelInput
        {...register("login", { required: "This field is required" })}
        id="login"
        label="Username or email"
        autoComplete="username"
        error={errors.login?.message}
      />

      <LabelInput
        {...register("password", { required: "Password is required" })}
        id="password"
        label="Password"
        type="password"
        autoComplete="new-password"
        error={errors.password?.message}
      />

      <Button
        size="lg"
        type="submit"
        className="mt-1"
        isPending={loginMutation.isPending}
      >
        Log in
      </Button>
    </form>
  );
};
