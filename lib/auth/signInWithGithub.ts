import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
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

export default signInWithGithub;
