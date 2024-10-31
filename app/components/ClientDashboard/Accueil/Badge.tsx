import { Coach } from "@/type/Coach";
import { cn } from "@/lib/utils";
import React from "react";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Sparkles } from "lucide-react";

interface BadgeProps {
  coach: Coach;
}

export default function Badge({ coach }: BadgeProps) {
  const gapTime = Math.floor(
    Math.abs(coach.createdAt.getTime() - new Date().getTime()) /
      3600 /
      24 /
      1000
  );
  return (
    <div className="space-y-2">
      {" "}
      {gapTime < 10 && (
        <div
          className={cn(
            "group rounded-full border-[1px] border-orange-500 bg-orange-200 text-base transition-all ease-in  hover:bg-orange-200/80 dark:border-orange-900 dark:bg-orange-300 brightness-105 dark:hover:bg-orange-300 dark:hover:brightness-100"
          )}
        >
          <AnimatedShinyText className=" text-xs flex items-center justify-center px-3 py-1 transition ease-out text-orange-600 dark:text-orange-700 hover:text-orange-500 hover:duration-300 hover:dark:text-orange-600">
            <span className="flex items-center justify-center gap-2">
              <Sparkles className="h-3 w-3" /> <span>Nouveau</span>
            </span>
          </AnimatedShinyText>
        </div>
      )}
      {coach?.reviews &&
        coach.reviews.length > 30 &&
        coach?.note &&
        coach?.note > 4.9 && (
          <div
            className={cn(
              "group rounded-full border-[1px] border-indigo-500 bg-indigo-300/80 text-base transition-all ease-in  hover:bg-indigo-300 dark:border-indigo-900 dark:bg-indigo-300 brightness-105 dark:hover:bg-indigo-300 dark:hover:brightness-100"
            )}
          >
            <AnimatedShinyText className=" text-xs flex items-center justify-center px-3 py-1 transition ease-out text-indigo-600 dark:text-indigo-700 hover:text-indigo-500 hover:duration-300 hover:dark:text-indigo-600">
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="h-3 w-3" />{" "}
                {coach.gender === "female" ? " Ambassadrice" : " Ambassadeur"}
              </span>
            </AnimatedShinyText>
          </div>
        )}
    </div>
  );
}
