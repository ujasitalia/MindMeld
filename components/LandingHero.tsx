"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import TypeWriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

type Props = {};

export default function LandingHero({}: Props) {
  const { isSignedIn } = useAuth();
  return (
    <div className="text-[#f0eff4] font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#9e829c] to-[#291528]">
          <TypeWriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Music Generation.",
                "Video Generation.",
                "Code Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI superfast🚀
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="bg-gradient-to-r from-[#8f6593] to-[#291528] md:text-lg p-4 md:p-6 rounded-full font-semibold text-[#f0eff4]">
            Start Generating For Free
          </Button>
        </Link>
      </div>
    </div>
  );
}
