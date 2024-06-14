import QRCodeClient from "./QRCodeClient";

export default async function QRCode({ user }: { user: any }) {
  const userId = user.id;

  return <QRCodeClient value={userId} />;
}
