import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { UserProps } from "./SettingForm";

export default function InformationsPersonnal({ user }: UserProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-neutral-800 dark:text-neutral-100">
        Vos informations essentielles
      </h2>
      <div className="flex justify-between">
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <div>
            <Label htmlFor="name">Nom</Label>
            <Input
              defaultValue={user?.name ?? ""}
              id="name"
              name="name"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              defaultValue={user?.email ?? ""}
              id="email"
              name="email"
              disabled
              required
            />
          </div>
          <div>
            <Label htmlFor="tel">Téléphone</Label>
            <Input
              defaultValue={user?.tel ?? ""}
              id="tel"
              name="tel"
              required
            />
          </div>
        </ul>

        <div className="text-neutral-600 dark:text-neutral-400">
          <span>Votre bio</span>
          <textarea
            required
            defaultValue={user?.bio ?? ""}
            id="bio"
            name="bio"
            className="border border-gray-300 rounded-md p-2 w-full"
            rows={4}
          />
        </div>

        <div>image</div>
      </div>
    </div>
  );
}
