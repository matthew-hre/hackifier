"use client";

import { Button } from "@/components/ui/button";
import { BellIcon, SettingsIcon, UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ProfileBarClient({
  user,
  QRCode,
}: {
  user: any;
  QRCode: any;
}) {
  return (
    <nav className="bg-purple-300/20 rounded-2xl h-[calc(100dvh-2rem)] flex flex-col items-center w-min px-2 py-4 m-4 z-10 min-w-[300px] sticky top-4 right-4">
      <div className="flex flex-row items-center justify-between w-full">
        <Button variant="ghost" className="rounded-full">
          <BellIcon className="w-6 h-6" />
        </Button>
        <Button variant="ghost" className="rounded-full">
          <SettingsIcon className="w-6 h-6" />
        </Button>
      </div>
      <div className="flex flex-col items-center justify-between mb-8">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarFallback>
            <UserIcon className="w-16 h-16" />
          </AvatarFallback>
          <AvatarImage
            src={user.user_metadata?.avatar_url}
            alt={user.user_metadata?.full_name}
            className="rounded-full"
          />
        </Avatar>
        <p className="text-xl font-bold tracking-tight">
          {user.user_metadata?.full_name}
        </p>
        <p className="text-lg font-medium tracking-tight text-muted-foreground">
          Hacker - Application Pending
        </p>
      </div>
      {QRCode}
      <div className="flex flex-col space-y-4 mt-8 w-full px-8">
        <p className="text-md tracking-tight">My Activities</p>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center space-x-4">
            <div className="w-4 h-4 bg-orange-400 rounded-full" />
            <p className="text-md font-bold tracking-tight">Opening Ceremony</p>
          </div>
          <p className="text-md font-medium tracking-tight text-muted-foreground">
            11:30 PM
          </p>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center space-x-4">
            <div className="w-4 h-4 bg-green-600 rounded-full" />
            <p className="text-md font-bold tracking-tight">Check-In</p>
          </div>
          <p className="text-md font-medium tracking-tight text-muted-foreground">
            10:00 PM
          </p>
        </div>
      </div>
    </nav>
  );
}
