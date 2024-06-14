import {
  CalendarDaysIcon,
  ClockIcon,
  MedalIcon,
  TrophyIcon,
} from "lucide-react";
import Link from "next/link";

import NavBar from "@/components/NavBar";
import ProfileBar from "@/components/ProfileBar";

export default function Home() {
  return (
    <main className="flex flex-row">
      <NavBar />
      <div className="flex flex-col min-h-[100dvh]">
        <header className="py-12 md:py-20 lg:py-28 rounded-lg mt-4 relative bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Hackifier V1.0.0
                </h1>
                <p className="text-lg text-gray-200 md:text-xl">
                  A hackathon management platform for developers, designers, and
                  creators.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-[#6366f1] shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6366f1]"
                    prefetch={false}
                  >
                    Register Now
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-[#6366f1] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6366f1]"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://mruhacks.ca/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout3.d83c2fa2.jpg&w=3840&q=75"
                  width="500"
                  height="500"
                  alt="Hackathon Hero"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </header>
        <main>
          <section className="py-4 md:py-16 lg:py-24">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Featured Speakers
                  </h2>
                  <p className="mt-4 text-gray-500 md:text-lg">
                    Learn from industry experts and thought leaders in the field
                    of software engineering.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
                    <img
                      src="https://dummyimage.com/200x200/ccc/fff"
                      width="200"
                      height="200"
                      alt="Speaker 1"
                      className="mx-auto h-24 w-24 rounded-full object-cover"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold">John Doe</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Software Engineer, Acme Inc.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
                    <img
                      src="https://dummyimage.com/200x200/ccc/fff"
                      width="200"
                      height="200"
                      alt="Speaker 2"
                      className="mx-auto h-24 w-24 rounded-full object-cover"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold">Jane Smith</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        CTO, Acme Inc.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
                    <img
                      src="https://dummyimage.com/200x200/ccc/fff"
                      width="200"
                      height="200"
                      alt="Speaker 3"
                      className="mx-auto h-24 w-24 rounded-full object-cover"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold">Michael Johnson</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Lead Engineer, Acme Inc.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-950">
                    <img
                      src="https://dummyimage.com/200x200/ccc/fff"
                      width="200"
                      height="200"
                      alt="Speaker 4"
                      className="mx-auto h-24 w-24 rounded-full object-cover"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold">Emily Davis</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Product Manager, Acme Inc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] py-12 md:py-20 lg:py-28 rounded-lg">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                    Event Schedule
                  </h2>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3 text-white shadow-sm transition-colors hover:bg-white/20 dark:bg-gray-950/10 dark:hover:bg-gray-950/20">
                      <div>
                        <h3 className="text-lg font-semibold">
                          Opening Ceremony
                        </h3>
                        <p className="text-sm">June 15, 2023 - 9:00 AM</p>
                      </div>
                      <CalendarDaysIcon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3 text-white shadow-sm transition-colors hover:bg-white/20 dark:bg-gray-950/10 dark:hover:bg-gray-950/20">
                      <div>
                        <h3 className="text-lg font-semibold">
                          Hacking Begins
                        </h3>
                        <p className="text-sm">June 15, 2023 - 10:00 AM</p>
                      </div>
                      <ClockIcon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3 text-white shadow-sm transition-colors hover:bg-white/20 dark:bg-gray-950/10 dark:hover:bg-gray-950/20">
                      <div>
                        <h3 className="text-lg font-semibold">
                          Demos and Judging
                        </h3>
                        <p className="text-sm">June 16, 2023 - 9:00 AM</p>
                      </div>
                      <TrophyIcon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-white/10 px-4 py-3 text-white shadow-sm transition-colors hover:bg-white/20 dark:bg-gray-950/10 dark:hover:bg-gray-950/20">
                      <div>
                        <h3 className="text-lg font-semibold">
                          Awards Ceremony
                        </h3>
                        <p className="text-sm">June 16, 2023 - 5:00 PM</p>
                      </div>
                      <MedalIcon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    width="500"
                    height="500"
                    alt="Hackathon Schedule"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="py-12 md:py-20 lg:py-28">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Join the Hackathon
                  </h2>
                  <p className="text-gray-500 md:text-lg">
                    Register now to secure your spot and start building your
                    next big project.
                  </p>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-[#6366f1] px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2"
                      prefetch={false}
                    >
                      Register Now
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-[#6366f1] bg-transparent px-6 text-sm font-medium text-[#6366f1] shadow-sm transition-colors hover:bg-[#6366f1] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2"
                      prefetch={false}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    width="500"
                    height="500"
                    alt="Hackathon CTA"
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-gray-100 py-6 dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                &copy; 2024 Hackathon 2023. All rights reserved.
              </p>
              <nav className="flex items-center space-x-4">
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Terms of Service
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </div>
      <ProfileBar />
    </main>
  );
}
