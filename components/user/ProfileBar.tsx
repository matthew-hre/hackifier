import { createClient } from "@/lib/supabase/server";
import ProfileBarClient from "./ProfileBarClient";
import QRCode from "./QRCode";
import logout from "@/lib/auth/logout";
import signUp from "@/lib/auth/signUp";
import signIn from "@/lib/auth/signIn";
import signInWithGithub from "@/lib/auth/signInWithGithub";

const getUser = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};

export default async function ProfileBar({
  searchParams,
}: {
  searchParams?: { message: string };
}) {
  const user = await getUser();
  return (
    <ProfileBarClient
      user={user}
      logout={logout}
      QRCode={<QRCode user={user} />}
      signUp={signUp}
      signIn={signIn}
      signInWithGithub={signInWithGithub}
      searchParams={searchParams}
    />
  );
}
