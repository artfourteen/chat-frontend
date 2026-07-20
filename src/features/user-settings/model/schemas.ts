import { z } from "zod";

export const updateProfileSchema = z.object({
  username: z.string().optional(),
  email: z.email().optional(),
});
export type UpdateProfileFormData = z.infer<typeof updateProfileSchema>;
