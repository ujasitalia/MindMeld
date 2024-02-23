"use client";
import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

type Props = {};

export default function LandingNavbar({}: Props) {
  const { isSignedIn } = useAuth();
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 md:h-12  md:w-12 mr-4">
          <Image fill src="/logo.png" alt="logo" className="rounded-full" />
        </div>
        <h1 className={cn("text-[#f0eff4] text-2xl font-bold", font.className)}>
          MindMeld
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full bg-[#f0eff4]">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}
