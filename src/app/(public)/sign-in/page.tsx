import { FormSignIn } from "@/components/internal/form-sign-in";

export default function SignIn() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <section className="bg-zinc-900 p-3 sm:p-6 rounded-xl w-1/4">
        <h1 className="text-xl font-semibold mb-4">Sign In</h1>

        <FormSignIn />
      </section>
    </main>
  );
}
