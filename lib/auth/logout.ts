import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const logout = async () => {
  "use server";

  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  return redirect(`/`);
};

export default logout;
