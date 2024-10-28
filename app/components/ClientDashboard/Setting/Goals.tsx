"use client";

import { goals } from "@/data/data";
import { IconChecklist } from "@tabler/icons-react";

interface GoalProps {
  selectGoals: (idx: number, value: string) => void;
  isSelectedGoals: number[];
}

export default function Goals({ selectGoals, isSelectedGoals }: GoalProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {goals.map((goa: any, idx: number) => {
        return (
          <div
            key={`level : ` + idx}
            className={`shadow-2xl shadow-neutral-200/50 relative dark:shadow-neutral-800 p-3 dark:bg-neutral-900 dark:border-neutral-700/70  border-neutral-200/70  border-[1px] rounded-2xl flex items-center   cursor-pointer ease-in-out duration-200 ${
              isSelectedGoals.includes(idx)
                ? "bg-neutral-100 dark:bg-neutral-950 dark:border-neutral-600"
                : "dark:bg-neutral-800 bg-neutral-50"
            }`}
            onClick={() => selectGoals(idx, goa.title)}
          >
            <div
              className={`absolute top-1/2 right-4 -translate-y-1/2 ${
                isSelectedGoals.includes(idx) ? "block" : "hidden"
              }`}
            >
              <IconChecklist stroke={1.5} />
            </div>
            <h3>{goa.title}</h3>
          </div>
        );
      })}
    </div>
  );
}
