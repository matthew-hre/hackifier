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
  HelpCircleIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

import { usePathname } from "next/navigation";

export default function NavBarClient({ user }: { user: any }) {
  return (
    <nav className="bg-muted rounded-2xl h-[calc(100dvh-2rem)] flex flex-col justify-between items-center w-min px-2 py-4 m-4 z-10 sticky top-4 left-4">
      <h1 className="text-2xl font-bold tracking-tight font-title">
        <CoffeeIcon className="w-8 h-8" />
      </h1>
      <div className="flex flex-col space-y-4 items-center">
        <NavItem text="Home" href="/" icon={<HomeIcon className="w-6 h-6" />} />
        <NavItem
          text="Schedule"
          href="/schedule"
          icon={<CalendarIcon className="w-6 h-6" />}
        />
        <NavItem
          text="FAQ"
          href="/faq"
          icon={<MessageCircleQuestionIcon className="w-6 h-6" />}
        />
      </div>
      <div className="flex flex-col space-y-4">
        <NavItem
          text="Support"
          href="/support"
          icon={<HelpCircleIcon className="w-6 h-6" />}
        />
      </div>
    </nav>
  );
}

interface NavItemProps {
  text: string;
  href: string;
  icon: React.ReactNode;
}

export function NavItem({ text, href, icon }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="default"
          className={
            pathname === href
              ? "p-3 bg-primary rounded-full h-min w-min"
              : "p-3 rounded-full h-min w-min bg-transparent hover:bg-black hover:bg-opacity-10"
          }
        >
          <Link
            href={href}
            className={`text-lg ${
              pathname === href ? "text-background" : "text-foreground"
            }`}
          >
            {icon}
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" align="start" alignOffset={-8}>
        {text}
      </TooltipContent>
    </Tooltip>
  );
}
