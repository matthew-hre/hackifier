import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const signUp = async (formData: FormData) => {
  "use server";

  const origin = headers().get("origin") as string;
  const path = headers().get("referer")?.split(origin)[1] || "/signup";
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback?next=/registration`,
    },
  });

  if (error) {
    console.error(error);
    return redirect(`${path}?message=Invalid%20credentials`);
  }

  return redirect(
    `${path}?message=Check%20your%20email%20for%20a%20login%20link`
  );
};

export default signUp;
