import { z } from "zod";

const loginValidationSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Invalid email address" }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(4, { message: "Password must be at least 4 characters long" }),
});

const signUpValidationSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(4, { message: "Name must be at least 4 characters long" }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email({ message: "Invalid email address" }),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(4, { message: "Password must be at least 4 characters long" }),
    confirmPassword: z
      .string({
        required_error: "Confirm password is required",
      })
      .min(4, {
        message: "Confirm password must be at least 4 characters long",
      }),
    address: z
      .string({
        required_error: "Address is required",
      })
      .min(5, { message: "Address must be at least 5 characters long" }),
    phone: z
      .string({
        required_error: "Phone number is required",
      })
      .min(11, { message: "Phone number must be at least 11 characters long" })
      .max(14, { message: "Phone number must be at most 14 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const authValidation = {
  loginValidationSchema,
  signUpValidationSchema,
};
