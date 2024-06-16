import { createClient } from "@/lib/supabase/server";
import ProfileBarClient from "./ProfileBarClient";
import QRCode from "./QRCode";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const getUser = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

const logout = async () => {
  "use server";

  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }
};

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

const signUp = async (formData: FormData) => {
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

const signIn = async (formData: FormData) => {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect("/login?message=Invalid%20credentials");
  }

  return redirect("/app");
};

export default async function ProfileBar({
  searchParams,
}: {
  searchParams?: { message: string };
}) {
  const user = await getUser();
  return (
    <ProfileBarClient
      user={user}
      logout={logout}
      QRCode={<QRCode user={user} />}
      signUp={signUp}
      signIn={signIn}
      signInWithGithub={signInWithGithub}
      searchParams={searchParams}
    />
  );
}
