"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

import React from "react";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Props = {};

const LandingPageNavBar = (props: Props) => {
  const pathname = usePathname(); // Get the current pathname

  const isActive = (path: string) =>
    pathname === path ? "bg-[#7320DD] text-white" : "";

  return (
    <div className="flex w-full justify-between items-center">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <Image alt="logo" src="/opal-logo.svg" width={40} height={40} />
        Opal
      </div>
      <div className="hidden gap-x-10 items-center lg:flex">
        <Link
          href="/"
          className={`py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80 ${isActive(
            "/"
          )}`}
        >
          Home
        </Link>
        <Link
          href="/pricing"
          className={`py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80 ${isActive(
            "/pricing"
          )}`}
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className={`py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80 ${isActive(
            "/contact"
          )}`}
        >
          Contact
        </Link>
      </div>
      <div className="flex flex-row gap-3">
        <SignedOut>
          <Link href="/auth/sign-in">
            <Button className="text-base flex gap-x-2">
              <User fill="#000" />
              Login
            </Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <div>
          <Sheet>
            <SheetTrigger>
              <Menu className="w-8 h-8 sm:hidden mt-1" />
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px]" side={"right"}>
              <SheetTitle>
                <Link
                  href={"/"}
                  className="flex flex-row gap-2 items-center justify-center"
                >
                  <Image
                    src={"/opal-logo.svg"}
                    height={40}
                    width={40}
                    alt="Opal Logo"
                  />
                  <p className="text-2xl font-bold mt-1">Opal</p>
                </Link>
              </SheetTitle>
              <div className="flex flex-col gap-4 justify-center items-start md:items-center">
                <Link
                  href="/"
                  className={`py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80 ${isActive(
                    "/"
                  )}`}
                >
                  Home
                </Link>
                <Link
                  href="/pricing"
                  className={`py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80 ${isActive(
                    "/pricing"
                  )}`}
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className={`py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80 ${isActive(
                    "/contact"
                  )}`}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default LandingPageNavBar;
