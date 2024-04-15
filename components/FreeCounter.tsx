"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./ui/progress";

type Props = {
  apiLimitCount: number;
};

export default function FreeCounter({ apiLimitCount = 0 }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="px-3">
      <Card className="bg-[#f0eff4]/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-[#f0eff4] mb-4 space-y-2">
            <p>
              {apiLimitCount}/{MAX_FREE_COUNTS} Generations
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <p className="text-center text-sm text-[#f0eff4]">
            Setting a limit because it is a paid service.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
