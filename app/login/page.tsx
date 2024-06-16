import { LogIn, LogInProps } from "@/components/auth/AuthForms";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const signInWithGithub = async () => {
  "use server";

  const origin = headers().get("origin") as string;
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error);
    return;
  }

  return redirect(data.url as string);
};

const signIn = async (formData: FormData) => {
  "use server";

  const origin = headers().get("origin") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error);
    return redirect("/login?message=Invalid%20credentials");
  }

  return redirect(
    "/login?message=Check%20your%20email%20for%20a%20login%20link"
  );
};

export default function SignUpRoute() {
  return (
    <div className="flex flex-col items-center bg-muted min-h-screen">
      <div className="min-w-[400px]">
        <LogIn signIn={signIn} signInWithGithub={signInWithGithub} />
      </div>
      <p className="text-sm mt-2">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline hover:text-muted-foreground">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
