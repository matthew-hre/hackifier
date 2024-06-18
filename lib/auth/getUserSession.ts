"use server";

import { createClient } from "@/lib/supabase/server";

export default async function getUserSession() {
  const supabase = createClient();
  const session = await supabase.auth.getSession();
  return session.data.session;
}
