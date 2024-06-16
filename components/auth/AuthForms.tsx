"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { AlertTriangleIcon } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { Loader2 } from "lucide-react";

export interface SignUpProps {
  signUp: (formData: FormData) => void;
  signInWithGithub: () => void;
  searchParams?: { message: string };
}

export interface LogInProps {
  searchParams?: { message: string };
  signIn: (formData: FormData) => void;
  signInWithGithub: () => void;
}

export function SignUp({
  signUp,
  signInWithGithub,
  searchParams,
}: SignUpProps) {
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
      <main className="flex flex-col items-center py-2 space-y-2 mt-16">
        <h1 className="text-6xl font-bold tracking-tight font-title">
          Hackifier
        </h1>
        <p className="text-md text-foreground pb-6 md:pb-12 text-center">
          No more meal tickets, no more paper schedules. Welcome to the 21st
          century.
        </p>
        <div className="grid gap-6 w-full max-w-sm pt-2">
          <form onSubmit={handleEmailSubmit} className="space-y-2">
            <Input
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />

            <Input type="password" name="password" placeholder="••••••••" />
            {emailLoading ? (
              <Button disabled className="w-full">
                <Loader2 className="animate-spin w-4 h-4 mr-2" />
                Signing up...
              </Button>
            ) : (
              <Button type="submit" className="w-full bg-purple-600">
                Sign up
              </Button>
            )}
            {searchParams?.message && (
              <p className="text-sm text-red-500 w-full text-center pt-2">
                <AlertTriangleIcon className="inline-block w-4 h-4 mr-2" />
                {searchParams.message}
              </p>
            )}
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-muted px-2 text-muted-foreground">
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
        </div>
      </main>
    </>
  );
}

export function LogIn({ searchParams, signIn, signInWithGithub }: LogInProps) {
  const [emailLoading, setEmailLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);

  const handleEmailSubmit = async (e: any) => {
    e.preventDefault();
    setEmailLoading(true);
    await signIn(new FormData(e.target));
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
      <main className="flex flex-col items-center py-2 space-y-2 mt-16">
        <h1 className="text-6xl font-bold tracking-tight font-title">
          Hackifier
        </h1>
        <p className="text-md text-foreground pb-6 md:pb-12 text-center">
          Welcome back, we missed you. Let&apos;s get back to hacking.
        </p>
        <div className="grid gap-6 w-full max-w-sm pt-2">
          <form onSubmit={handleEmailSubmit} className="space-y-2">
            <Input
              type="email"
              name="email"
              placeholder="name@example.com"
              required
            />

            <Input type="password" name="password" placeholder="••••••••" />
            {emailLoading ? (
              <Button disabled className="w-full">
                <Loader2 className="animate-spin w-4 h-4 mr-2" />
                Logging in...
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Log in
              </Button>
            )}
            {searchParams?.message && (
              <p className="text-sm text-red-500 w-full text-center pt-2">
                <AlertTriangleIcon className="inline-block w-4 h-4 mr-2" />
                {searchParams.message}
              </p>
            )}
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-muted px-2 text-muted-foreground">
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
        </div>
      </main>
    </>
  );
}
