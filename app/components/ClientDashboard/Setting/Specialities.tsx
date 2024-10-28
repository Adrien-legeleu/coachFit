import { specialties } from "@/data/data";
import { IconChecklist } from "@tabler/icons-react";
import React from "react";

interface SpecialityProps {
  selectSpecialities: (idx: number, value: string) => void;
  isSelectedSpecialities: number[];
}

export default function Specialities({
  selectSpecialities,
  isSelectedSpecialities,
}: SpecialityProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {specialties.map((speciality, idx) => {
        return (
          <div
            key={`specialty : ${idx}`}
            className={`shadow-2xl relative  shadow-neutral-200/50 dark:shadow-neutral-800 p-3 dark:bg-neutral-900 dark:border-neutral-700/70 border-neutral-200/70 border-[1px] rounded-2xl flex items-center cursor-pointer ease-in-out duration-200 ${
              isSelectedSpecialities.includes(idx)
                ? "bg-neutral-100 dark:bg-neutral-950 dark:border-neutral-600"
                : "dark:bg-neutral-800 bg-neutral-50"
            }`}
            onClick={() => selectSpecialities(idx, speciality.title)}
          >
            <div
              className={`absolute top-1/2 right-4 -translate-y-1/2 ${
                isSelectedSpecialities.includes(idx) ? "block" : "hidden"
              }`}
            >
              <IconChecklist stroke={1.5} />
            </div>
            <h3>{speciality.title}</h3>
          </div>
        );
      })}
    </div>
  );
}
