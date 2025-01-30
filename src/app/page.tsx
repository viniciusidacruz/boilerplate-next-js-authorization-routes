import { FormSignIn } from "@/components/internal/form-sign-in";

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <section className="bg-zinc-900 p-3 sm:p-6 rounded-xl w-1/4">
        <FormSignIn />
      </section>
    </main>
  );
}
