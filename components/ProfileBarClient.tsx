"use client";

import { Button } from "@/components/ui/button";
import { BellIcon, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function ProfileBarClient({
  user,
  QRCode,
  logout,
}: {
  user: any;
  QRCode: any;
  logout: any;
}) {
  return (
    <nav className="bg-muted rounded-2xl h-[calc(100dvh-2rem)] flex flex-col items-center w-min px-2 py-4 m-4 z-10 min-w-[300px] sticky top-4 right-4">
      <div className="flex flex-row items-center justify-between w-full px-2">
        <Button
          variant="ghost"
          className="rounded-full w-min h-min p-3 hover:bg-black hover:bg-opacity-10"
        >
          <BellIcon className="w-6 h-6" />
        </Button>
        <ProfileOptions user={user} logout={logout} />
      </div>
      <div className="flex flex-col items-center justify-between mb-8">
        <Avatar className="w-24 h-24 mb-4">
          <AvatarFallback>
            <UserIcon className="w-16 h-16" />
          </AvatarFallback>
          <AvatarImage
            src={user?.user_metadata?.avatar_url}
            alt={user?.user_metadata?.full_name}
            className="rounded-full"
          />
        </Avatar>
        <p className="text-xl font-bold tracking-tight">
          {user?.user_metadata?.full_name}
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

function ProfileOptions({ user, logout }: { user: any; logout: any }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className="rounded-full w-min h-min p-3 hover:bg-black hover:bg-opacity-10"
              >
                <SettingsIcon className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" align="start" alignOffset={6}>
              Settings
            </TooltipContent>
          </Tooltip>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56" side="bottom">
        <DropdownMenuLabel className="font-semibold">
          {user?.user_metadata?.full_name}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {user?.email}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <UserIcon className="mr-2 h-4 w-4" />
          View Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon className="mr-2 h-4 w-4" />
          Account Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <form action={logout}>
          <button type="submit" className="w-full">
            <DropdownMenuItem>
              <LogOutIcon className="mr-2 h-4 w-4" />
              Log Out
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
