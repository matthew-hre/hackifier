import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const signIn = async (formData: FormData) => {
  "use server";

  const origin = headers().get("origin") as string;
  const path = headers().get("referer")?.split(origin)[1] || "/login";
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect(`${path}?message=Invalid%20credentials`);
  }

  const user = await supabase.auth.getUser();

  console.log(user);

  return redirect(`/`);
};

export default signIn;
