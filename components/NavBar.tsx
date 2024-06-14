import { createClient } from "@/lib/supabase/server";
import NavBarClient from "./NavBarClient";

const logout = async () => {
  "use server";

  console.log("logging out");

  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }
};

const getUser = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

export default async function NavBar() {
  const user = await getUser();
  return <NavBarClient user={user} logout={logout} />;
}
