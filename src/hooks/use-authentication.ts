import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  signInSchema,
  SignInSchema,
  initialStateSignIn,
} from "@/validations/schemas/sign-in";

export function useAuthentication() {
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: initialStateSignIn,
  });

  const onSubmit = useCallback((data: SignInSchema) => {
    console.log("Form submitted:", data);
  }, []);

  return {
    form,
    onSubmit,
  };
}
