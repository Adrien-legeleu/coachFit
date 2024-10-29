"use client";

import { clientTypes } from "@/data/dataCoach";
import { IconChecklist } from "@tabler/icons-react";

interface GoalProps {
  selectTypeClients: (idx: number, value: string) => void;
  isSelectedTypeClients: number[];
}

export default function TypeClients({
  selectTypeClients,
  isSelectedTypeClients,
}: GoalProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {clientTypes.map((exp: any, idx: number) => {
        return (
          <div
            key={`level : ` + idx}
            className={`shadow-2xl shadow-neutral-200/50 relative flex-col gap-4 dark:shadow-neutral-800 p-3 dark:bg-neutral-900 dark:border-neutral-700/70  border-neutral-200/70  border-[1px] rounded-2xl flex items-center   cursor-pointer ease-in-out duration-200 ${
              isSelectedTypeClients.includes(idx)
                ? "bg-neutral-100 dark:bg-neutral-950 dark:border-neutral-600"
                : "dark:bg-neutral-800 bg-neutral-50"
            }`}
            onClick={() => selectTypeClients(idx, exp.title)}
          >
            <div
              className={`absolute top-1/2 right-4 -translate-y-1/2 ${
                isSelectedTypeClients.includes(idx) ? "block" : "hidden"
              }`}
            >
              <IconChecklist stroke={1.5} />
            </div>
            <h3>{exp.title}</h3>
            <p className="text-xs text-muted-foreground">{exp.description}</p>
          </div>
        );
      })}
    </div>
  );
}
