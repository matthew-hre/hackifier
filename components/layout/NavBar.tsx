import { createClient } from "@/lib/supabase/server";
import NavBarClient from "./NavBarClient";

const getUser = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

export default async function NavBar() {
  const user = await getUser();
  return <NavBarClient user={user} />;
}
