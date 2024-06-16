import { createClient } from "@/lib/supabase/server";
import ProfileBarClient from "./ProfileBarClient";
import QRCode from "./QRCode";

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

export default async function ProfileBar() {
  const user = await getUser();
  return (
    <ProfileBarClient
      user={user}
      logout={logout}
      QRCode={<QRCode user={user} />}
    />
  );
}
