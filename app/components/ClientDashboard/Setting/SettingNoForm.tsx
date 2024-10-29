import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useUserSettingContext } from "@/context/userSettingContext";
import React from "react";
import { IconEdit } from "@tabler/icons-react";
interface SettingNoFormProps {
  openFormSetting: () => void;
}

export default function SettingNoForm({ openFormSetting }: SettingNoFormProps) {
  const { user } = useUserSettingContext();
  return (
    <div className="flex w-2/3 flex-col mx-auto mt-20">
      <div className="fixed bottom-10 right-32">
        <Button onClick={openFormSetting}>
          <IconEdit stroke={1.5} />
          Modifier
        </Button>
      </div>
      <h1 className="text-4xl mb-16 text-center font-bold tracking-wide">
        Votre profil
      </h1>
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl text-neutral-800 dark:text-neutral-100">
            Vos information essentiels
          </h2>
          <div className="flex justify-between ">
            <ul className="text-neutral-600 dark:text-neutral-400  space-y-1">
              <li>{user?.name}</li>
              <li>{user?.email}</li>
              <li>{user?.tel}</li>
            </ul>

            <div className="text-neutral-600 dark:text-neutral-400">
              <span>Votre bio</span>
              <p>{user?.bio}</p>
            </div>

            <div>image</div>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h2 className="text-xl text-neutral-800 dark:text-neutral-100">
            Un peu plus sur vous
          </h2>
          <div className="flex gap-32 ">
            <ul className="text-neutral-600 dark:text-neutral-400  space-y-1">
              <li>Taille: {user?.height} cm</li>
              <li>Poids : {user?.weight} kg</li>
              <li>Age : {user?.age} ans</li>
            </ul>
            <ul className="text-neutral-600 dark:text-neutral-400  space-y-1">
              <li>Votre conditions physique :{user?.health_conditions}</li>
              <li>Votre level d'activité : {user?.activity_level}</li>
              <li>Votre sexe : {user?.gender}</li>
            </ul>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h2 className="text-xl text-neutral-800 dark:text-neutral-100">
            Vos domaine de compétences
          </h2>
          <div className="flex  ">
            <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
              {user?.speciality?.map((spe: any, idx: number) => {
                return <li key={"spe number" + idx}>{spe.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h2 className="text-xl text-neutral-800 dark:text-neutral-100">
            Vos buts
          </h2>
          <div className="flex  ">
            <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
              {user?.goals?.map((goal: any, idx: number) => {
                return <li key={"spe number" + idx}>{goal.title}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
