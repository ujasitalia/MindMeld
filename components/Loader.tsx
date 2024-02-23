import React from "react";
import Image from "next/image";

type Props = {};

export default function Loader({}: Props) {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image 
            fill
            alt="logo"
            src="/logo.png"
            className="rounded-full shadow-md"
        />
      </div>
      <p className="text-sm text-muted-foreground">Agent is thinking...</p>
    </div>
  );
}
