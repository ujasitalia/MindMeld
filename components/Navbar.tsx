import React from "react";
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
// import { getApiLimitCount } from "@/lib/api-limit";

type Props = {};

export default async function Navbar({}: Props) {
  // const apiLimitCount = await getApiLimitCount();
  return (
    <div className="flex items-center p-4">
      {/* <MobileSidebar apiLimitCount={apiLimitCount} /> */}
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
