import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

type Props = {};

export default function BotAvatar({}: Props) {
  return (
    <div>
      <Avatar className="h-8 w-8">
        <AvatarImage
          className="rounded-full"
          src="/logo.png"
        ></AvatarImage>
      </Avatar>
    </div>
  );
}
