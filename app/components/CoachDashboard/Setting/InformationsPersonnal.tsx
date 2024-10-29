import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

import { CoachProps } from "./SettingForm";
import { updateCoachImageProfil } from "@/lib/actionsCoach";
import { toast } from "react-toastify";
import { ImageProfil } from "../../Image/ImageProfil";

export default function InformationsPersonnal({ coach }: CoachProps) {
  const onSubmit = async (imageSelected: string) => {
    if (coach?.id) {
      try {
        await updateCoachImageProfil(imageSelected, coach?.id);
        toast.success(
          "Modification de votre image de profil réalisé avec succès"
        );
      } catch (error) {
        toast.error("erreur lors de la modification de l'image de profil");
      }
    } else {
      toast.error(
        "coach n'est pas défini (votre id) , veuillez vous reconnectez s'il vous plait"
      );
    }
  };
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-neutral-800 dark:text-neutral-100">
        Vos informations essentielles
      </h2>
      <div className="flex justify-between">
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-8">
          <div className="space-y-1">
            <Label htmlFor="name" className="ml-1">
              Nom
            </Label>
            <Input
              defaultValue={coach?.name ?? ""}
              id="name"
              name="name"
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email" className="ml-1">
              Email
            </Label>
            <Input
              defaultValue={coach?.email ?? ""}
              id="email"
              name="email"
              disabled
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="tel" className="ml-1">
              Téléphone
            </Label>
            <Input
              defaultValue={coach?.tel ?? ""}
              id="tel"
              name="tel"
              required
            />
          </div>
        </ul>

        <div className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <span className="ml-1">Votre bio</span>
          <textarea
            required
            defaultValue={coach?.bio ?? ""}
            id="bio"
            name="bio"
            className="border border-gray-300 rounded-md p-2 w-full"
            rows={4}
          />
        </div>

        <div>
          <ImageProfil image={coach?.image ?? ""} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}
