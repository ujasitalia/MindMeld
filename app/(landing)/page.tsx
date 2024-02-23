import LandingHero from "@/components/LandingHero";
import LandingNavbar from "@/components/LandingNavbar";
import React from "react";

type Props = {};

export default function LandingPage({}: Props) {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
    </div>
  );
}
