"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useRegister } from "@/features/auth/api/queries";
import {
  type RegisterFormData,
  registerSchema,
} from "@/features/auth/model/schemas";
import { Button } from "@/shared/ui/button";
import { LabelInput } from "@/shared/ui/label-input";

export const RegisterForm = () => {
  const registerMutate = useRegister();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    registerMutate.mutate(data, {
      onSuccess: () => router.push("/"),
    });
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <LabelInput
        id="username"
        label="Username"
        autoComplete="username"
        {...register("username")}
        error={errors.username?.message}
      />
      <LabelInput
        id="email"
        label="Email"
        type="email"
        autoComplete="email"
        {...register("email")}
        error={errors.email?.message}
      />
      <LabelInput
        id="password"
        label="Password"
        type="password"
        autoComplete="new-password"
        {...register("password")}
        error={errors.password?.message}
      />

      <Button
        size="lg"
        type="submit"
        className="mt-1"
        isPending={registerMutate.isPending}
      >
        Create account
      </Button>
    </form>
  );
};
