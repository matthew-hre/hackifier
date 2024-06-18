import { createClient } from "@/lib/supabase/server";

const getUserInfo = async () => {
  "use server";

  const supabase = createClient();

  const user = await supabase.auth.getUser();

  const userId = user?.data.user?.id;

  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("id", userId)
    .single();

  if (error) {
    console.error(error);
    return;
  }

  return data;
};
