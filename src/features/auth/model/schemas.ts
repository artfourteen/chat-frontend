import { z } from "zod";

export const loginSchema = z.object({
  login: z.string("This field is required"),
  password: z.string().min(1, "This field is required"),
});

export const registerSchema = z.object({
  username: z.string().min(3, "Must be at least 3 characters"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Must be at least 8 characters"),
  // confirmPassword: z.string(),
});
// .refine((data) => data.password === data.confirmPassword, {
//   error: "Passwords do not match",
//   path: ["confirmPassword"],
// });

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
