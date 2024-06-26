import type { Metadata } from "next";
import { Inter, Gabarito } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavBar from "@/components/layout/NavBar";
import ProfileBar from "@/components/user/ProfileBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const gabarito = Gabarito({ subsets: ["latin"], variable: "--font-gabarito" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  searchParams,
}: Readonly<{
  children: React.ReactNode;
  searchParams?: { message: string };
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          gabarito.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="dark"
        >
          <TooltipProvider delayDuration={300}>
            <main className="flex flex-row w-full">
              <NavBar />
              <div className="flex flex-col min-h-[100dvh] flex-1 my-4 space-y-4">
                {children}
              </div>
              <ProfileBar searchParams={searchParams} />
            </main>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
