"use client";

import { FaLightbulb } from "react-icons/fa";
import { FiAlertTriangle, FiGithub } from "react-icons/fi";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Loader2 } from "lucide-react";

import { useState } from "react";

export default function SignUpFormClient({
  searchParams,
  signInWithGithub,
  signUp,
}: {
  searchParams: { message: string };
  signInWithGithub: () => void;
  signUp: (formData: FormData) => void;
}) {
  const [emailLoading, setEmailLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);

  const handleEmailSubmit = async (e: any) => {
    e.preventDefault();
    setEmailLoading(true);
    await signUp(new FormData(e.target));
    setEmailLoading(false);
  };

  const handleGithubSubmit = async (e: any) => {
    e.preventDefault();
    setGithubLoading(true);
    await signInWithGithub();
    setGithubLoading(false);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen py-2 space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Hackifier</h1>
        <p className="text-md text-foreground pb-6 md:pb-12">
          It&apos;s time for a better way to hackathon.
        </p>
        <div className="grid gap-6 w-full max-w-sm pt-2">
          <form onSubmit={handleEmailSubmit} className="space-y-2">
            <Input
              type="email"
              name="email"
              placeholder="name@example.com"
              className="bg-white/50"
              required
            />

            <Input
              type="password"
              name="password"
              placeholder="••••••••"
              className="bg-white/50"
            />
            {emailLoading ? (
              <Button disabled className="w-full">
                <Loader2 className="animate-spin w-4 h-4 mr-2" />
                Signing up...
              </Button>
            ) : (
              <Button type="submit" className="w-full bg-pink-500">
                Sign up
              </Button>
            )}
            {searchParams.message && (
              <p className="text-sm text-red-500 w-full text-center pt-2">
                <FiAlertTriangle className="inline-block w-4 h-4 mr-2" />
                {searchParams.message}
              </p>
            )}
          </form>

          <div className="relative">
            <div className="relative flex flex-1 justify-center text-xs uppercase">
              <span className="px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <form onSubmit={handleGithubSubmit}>
            {githubLoading ? (
              <Button disabled variant="outline" className="w-full">
                <Loader2 className="animate-spin w-4 h-4 mr-2" />
                Authenticating...
              </Button>
            ) : (
              <Button variant="outline" type="submit" className="w-full">
                <FiGithub className="w-4 h-4 mr-2" /> Github
              </Button>
            )}
          </form>
          <p className="text-sm text-muted-foreground text-center w-full">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary underline underline-offset-4 hover:no-underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
