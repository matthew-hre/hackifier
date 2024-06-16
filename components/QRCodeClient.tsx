"use client";

import { QRCode as QRGen } from "react-qrcode-logo";
import { Skeleton } from "./ui/skeleton";

export default function QRCodeClient({ value }: { value: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg mx-8">
      {!value || value === "" ? (
        <Skeleton className="w-96 h-96" />
      ) : (
        <QRGen value={value} size={250} />
      )}
    </div>
  );
}
