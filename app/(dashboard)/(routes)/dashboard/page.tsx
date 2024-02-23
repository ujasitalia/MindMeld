"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  MessageSquare,
  Music,
  Video,
  Image,
  CodeIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};
const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-teal-400",
    bgColor: "bg-teal-400/10",
    href: "/conversation",
  },
  {
    label: "Image Generator",
    icon: Image,
    bgColor: "bg-fuchsia-500/10",
    color: "text-fuchsia-500",
    href: "/image",
  },
  {
    label: "Video Generator",
    icon: Video,
    href: "/video",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    label: "Music Generator",
    icon: Music,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/music",
  },
  {
    label: "Code Generator",
    icon: CodeIcon,
    href: "/code",
    color: "text-lime-500",
    bgColor: "bg-lime-500/10",
  },
];

export default function DashboardPage({}: Props) {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#291528]">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between shadow-md hover:shadow-lg transition cursor-pointer bg-[#f8f9fa]/50"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold text-[#291528]">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#291528]" />
          </Card>
        ))}
      </div>
    </div>
  );
}
