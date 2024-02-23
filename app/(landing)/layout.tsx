import React from "react";

type Props = {};

const LandingLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#1B2436] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
