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

export default async function ProfileBar() {
  const user = await getUser();
  return <ProfileBarClient user={user} QRCode={<QRCode user={user} />} />;
}
