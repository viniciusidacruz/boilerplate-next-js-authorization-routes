import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid e-mail" }),
  password: z.string(),
});

export type SignInSchema = z.infer<typeof signInSchema>;

export const initialStateSignIn: SignInSchema = {
  email: "",
  password: "",
};
