"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateMe } from "@/entities/user/api/queries";
import { LogoutHeadless } from "@/features/auth";
import { useGetMe } from "@/entities/user";
import {
  type UpdateProfileFormData,
  updateProfileSchema,
} from "@/features/user-settings/model/schemas";
import { useSettingsModal } from "@/features/user-settings/model/use-settings-modal";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { LabelInput } from "@/shared/ui/label-input";

export const UpdateProfileForm = () => {
  const updateProfileMutation = useUpdateMe();
  const queryClient = useQueryClient();
  const { close } = useSettingsModal();
  const { data: userData } = useGetMe();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      username: userData?.username,
      email: userData?.email,
    },
  });

  const onSubmit = (data: UpdateProfileFormData) => {
    if (
      data.username === userData?.username &&
      data.email === userData?.email
    ) {
      close();
      return;
    }

    updateProfileMutation.mutate(data, {
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["me"] });
        close();
        toast.success("Profile updated");
      },
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

      <Badge className="rounded-input!">
        🔒 Your messages are end-to-end encrypted on this device. No one, not
        even us can read them.
      </Badge>

      <div className="flex items-center gap-2">
        <Button
          variant={
            watch("username") === userData?.username &&
            watch("email") === userData?.email
              ? "disabled"
              : "default"
          }
          size="lg"
          className="flex-1"
          isPending={updateProfileMutation.isPending}
        >
          Save changes
        </Button>
        <LogoutHeadless>
          <Button
            onClick={close}
            size="lg"
            variant="destructive"
            className="w-1/3"
          >
            Log out
          </Button>
        </LogoutHeadless>
      </div>
    </form>
  );
};
