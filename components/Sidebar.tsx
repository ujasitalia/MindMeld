"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  CodeIcon,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
// import FreeCounter from "./FreeCounter";

type Props = {};
const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-red-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-teal-400",
  },
  {
    label: "Image Generator",
    icon: ImageIcon,
    href: "/image",
    color: "text-fuchsia-500",
  },
  {
    label: "Video Generator",
    icon: VideoIcon,
    href: "/video",
    color: "text-amber-500",
  },
  {
    label: "Music Generator",
    icon: MusicIcon,
    href: "/music",
    color: "text-violet-500",
  },
  {
    label: "Code Generator",
    icon: CodeIcon,
    href: "/code",
    color: "text-lime-500",
  },
];

export default function Sidebar({}: Props) {
  const pathName = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#1b1725] text-[#f0eff4]">
      <div className="px-3 py-2 flex-1">
        <Link
          href="/dashboard"
          className="flex flex-row items-center pl-3 mb-14"
        >
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" className="rounded-full" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            MindMeld
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg",
                pathName == route.href
                  ? "text-[#f0eff4] bg-[#f0eff4]/10"
                  : "text-[#f0eff4]/60"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <FreeCounter apiLimitCount={apiLimitCount} /> */}
    </div>
  );
}
