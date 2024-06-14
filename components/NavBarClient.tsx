"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  CalendarIcon,
  CoffeeIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MessageCircleQuestionIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function NavBarClient({
  user,
  logout,
}: {
  user: any;
  logout: any;
}) {
  return (
    <nav className="bg-purple-300/20 rounded-2xl h-[calc(100dvh-2rem)] flex flex-col justify-between items-center w-min px-2 py-4 m-4 z-10 sticky top-4 left-4">
      <h1 className="text-2xl font-bold tracking-tight font-title">
        <CoffeeIcon className="w-8 h-8" />
      </h1>
      <div className="flex flex-col space-y-4 items-center">
        <Button
          variant="link"
          className="p-3 bg-primary rounded-full h-min w-min"
        >
          <Link href="/" className="text-lg text-background">
            <HomeIcon className="w-6 h-6" />
          </Link>
        </Button>
        <Button variant="link">
          <Link href="/schedule" className="text-lg">
            <CalendarIcon className="w-6 h-6" />
          </Link>
        </Button>
        <Button variant="link">
          <Link href="/faq" className="text-lg">
            <MessageCircleQuestionIcon className="w-6 h-6" />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col space-y-4">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full p-1 bg-clear"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={user.user_metadata?.avatar_url}
                    alt="Jared Palmer"
                  />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56" side="right">
              <DropdownMenuLabel className="font-semibold">
                {user.user_metadata?.full_name}
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
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
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full p-1 bg-clear"
              >
                <LogInIcon className="h-8 w-8" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56" side="right">
              <DropdownMenuItem>
                <Link href="/login" className="flex items-center">
                  <LogInIcon className="mr-2 h-4 w-4" />
                  Log In
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/signup" className="flex items-center">
                  <LogInIcon className="mr-2 h-4 w-4" />
                  Sign Up
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
}
