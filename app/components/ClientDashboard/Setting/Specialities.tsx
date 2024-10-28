import { specialties } from "@/data/data";
import React from "react";

interface SpecialityProps {}

export default function Specialities({
  findSpecialities,
  isSelectedSpecialities,
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {specialties.map((specialty, idx) => {
        return (
          <div
            key={`specialty : ${idx}`}
            className={`shadow-2xl shadow-neutral-200/50 dark:shadow-neutral-800 p-3 dark:bg-neutral-900 dark:border-neutral-700/70 border-neutral-200/70 border-[1px] rounded-2xl flex items-center cursor-pointer ease-in-out duration-200 ${
              isSelected.includes(idx)
                ? "bg-neutral-100 dark:bg-neutral-950 dark:border-neutral-600"
                : "dark:bg-neutral-800 bg-neutral-50"
            }`}
            onClick={() => selectLevel(idx, specialty.title)}
          >
            <h3>{specialty.title}</h3>
          </div>
        );
      })}
    </div>
  );
}
