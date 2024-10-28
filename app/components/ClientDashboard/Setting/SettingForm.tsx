"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useUserSettingContext } from "@/context/userSettingContext";
import { IconChecklist, IconArrowBack } from "@tabler/icons-react";
import Goals from "./Goals";
import { useEffect, useState } from "react";
import InformationsPersonnal from "./InformationsPersonnal";
import { User } from "@/type/User";
import MoreAboutYou from "./MoreAboutYou";
import { goals, specialties } from "@/data/data";
import { getUser } from "@/lib/actionsUser";

export interface UserProps {
  user: User | null;
}

export default function SettingForm() {
  const { user } = useUserSettingContext();

  //Goal
  const [valueSelectedGoals, setValueSelectedGoals] = useState<string[]>([]);
  const [isSelectedGoals, setIsSelectedGoals] = useState<number[]>([]);
  const selectGoals = (idx: number, value: string) => {
    if (isSelectedGoals.includes(idx)) {
      setIsSelectedGoals((prev) => prev.filter((item) => item !== idx));
      setValueSelectedGoals((prev) => prev.filter((item) => item !== value));
    } else {
      setIsSelectedGoals((prev) => [...prev, idx]);
      setValueSelectedGoals((prev) => [...prev, value]);
    }
  };
  const findGoals = async () => {
    const userToGoals = await getUser();
    const selectedGoals = new Set<number>();
    goals.map((goal, idx) => {
      userToGoals?.goals?.forEach((goalExisted) => {
        if (goal.title === goalExisted.title) {
          selectedGoals.add(idx);
        }
      });
    });

    setIsSelectedGoals(Array.from(selectedGoals));
  };

  //Specialities
  const [valueSelectedSpecialities, setValueSelectedSpecialities] = useState<
    string[]
  >([]);
  const [isSelectedSpecialities, setIsSelectedSpecialities] = useState<
    number[]
  >([]);
  const selectSpecialities = (idx: number, value: string) => {
    if (isSelectedSpecialities.includes(idx)) {
      setIsSelectedSpecialities((prev) => prev.filter((item) => item !== idx));
      setValueSelectedSpecialities((prev) =>
        prev.filter((item) => item !== value)
      );
    } else {
      setIsSelectedSpecialities((prev) => [...prev, idx]);
      setValueSelectedSpecialities((prev) => [...prev, value]);
    }
  };
  const findSpecialities = async () => {
    const userToSpecialities = await getUser();
    const selectedSpecialities = new Set<number>();
    specialties.map((speciality, idx) => {
      userToSpecialities?.speciality?.forEach((specialityExisted) => {
        if (speciality.title === specialityExisted.title) {
          selectedSpecialities.add(idx);
        }
      });
    });

    setIsSelectedGoals(Array.from(selectedSpecialities));
  };

  useEffect(() => {
    findGoals();
  }, []);

  return (
    <form className="flex w-2/3 flex-col mx-auto mt-20">
      <div className="fixed bottom-10 right-32">
        <Button variant="secondary">
          <IconArrowBack stroke={1.5} />
          Annuler
        </Button>
        <Button>
          <IconChecklist stroke={1.5} />
          Sauvegarder
        </Button>
      </div>

      <h1 className="text-4xl mb-16 text-center font-bold tracking-wide">
        Votre profil
      </h1>

      <div className="space-y-8">
        <InformationsPersonnal user={user} />
        <Separator />
        <MoreAboutYou user={user} />
        <Separator />
        <div className="space-y-4">
          <h2 className="text-xl text-neutral-800 dark:text-neutral-100">
            Vos domaine de compétences
          </h2>
          <div></div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h2 className="text-xl text-neutral-800 dark:text-neutral-100">
            Vos buts
          </h2>
          <Goals selectGoals={selectGoals} isSelectedGoals={isSelectedGoals} />
        </div>
      </div>
    </form>
  );
}
