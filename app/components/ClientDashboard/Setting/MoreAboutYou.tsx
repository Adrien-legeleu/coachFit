import React from "react";
import { UserProps } from "./SettingForm";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function MoreAboutYou({ user }: UserProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-neutral-800 dark:text-neutral-100">
        Un peu plus sur vous
      </h2>
      <div className="flex gap-32">
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>
            <Label htmlFor="height">Taille</Label>
            <Input
              defaultValue={user?.height ?? ""}
              id="height"
              name="height"
            />
          </li>
          <li>
            <Label htmlFor="weight">Poids</Label>
            <Input
              defaultValue={user?.weight ?? ""}
              id="weight"
              name="weight"
            />
          </li>
          <li>
            <Label htmlFor="age">Age</Label>
            <Input defaultValue={user?.age ?? ""} id="age" name="age" />
          </li>
        </ul>

        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>
            <Label htmlFor="health_conditions">Votre condition physique</Label>
            <Input
              defaultValue={user?.health_conditions ?? ""}
              id="health_conditions"
              name="health_conditions"
            />
          </li>
          <li>
            <Label htmlFor="activity_level">Votre niveau d'activité</Label>
            <Input
              defaultValue={user?.activity_level ?? ""}
              id="activity_level"
              name="activity_level"
            />
          </li>
          <li>
            <Label htmlFor="gender">Votre sexe</Label>
            <Input
              defaultValue={user?.gender ?? ""}
              id="gender"
              name="gender"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
