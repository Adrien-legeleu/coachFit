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
import { goals, specialties } from "@/data/dataUser";
import { getUser, updateUser } from "@/lib/actionsUser";
import Specialities from "./Specialities";
import { toast } from "react-toastify";

export interface UserProps {
  user: User | null;
}

export default function SettingForm() {
  const { user, isLoading } = useUserSettingContext();

  const refreshPage = () => {
    window.location.reload();
  };

  //select
  const [selectedActivityLevel, setSelectedActivityLevel] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedHealthCondition, setSelectedHealthCondition] = useState("");
  const fetchUser = async () => {
    const userData = await getUser();
    setSelectedActivityLevel(userData?.activity_level ?? "");
    setSelectedGender(userData?.gender ?? "");
    setSelectedHealthCondition(userData?.health_conditions ?? "");
  };

  useEffect(() => {
    fetchUser();
  }, []);

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
    setValueSelectedGoals(userToGoals.goals.map((goal) => goal.title));
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
    console.log(userToSpecialities);

    const selectedSpecialities = new Set<number>();

    specialties.map((speciality, idx) => {
      userToSpecialities?.speciality?.forEach((specialityExisted) => {
        console.log(speciality.title, specialityExisted.title);

        if (speciality.title === specialityExisted.title) {
          selectedSpecialities.add(idx);
        }
      });
    });
    console.log(selectedSpecialities);
    setValueSelectedSpecialities(
      userToSpecialities.speciality.map((speciality) => speciality.title)
    );
    setIsSelectedSpecialities(Array.from(selectedSpecialities));
  };

  useEffect(() => {
    findGoals();
    findSpecialities();
  }, []);

  //form send

  const submitSettingClient = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user?.id) {
      try {
        const formData = new FormData(e.currentTarget);
        await updateUser(
          formData,
          valueSelectedGoals,
          valueSelectedSpecialities,
          user.id
        );
        console.log(
          e.currentTarget,
          valueSelectedGoals,
          valueSelectedSpecialities,
          user.id
        );

        toast.success("Sauvegarde du profil réalisé avec succès !");
      } catch (error) {
        toast.error("erreur lors de la sauvegarde du profil");
      }
    } else {
      console.error("userId pas défini");
      toast.error("userId pas défini , veuillez vous reconnecter");
    }
  };

  return (
    <>
      {isLoading ? (
        <p>loading</p>
      ) : (
        <form
          className="flex w-2/3 flex-col mx-auto mt-20"
          onSubmit={submitSettingClient}
        >
          <div className="fixed bottom-10 right-32 z-50 space-x-2">
            <Button type="button" variant="secondary" onClick={refreshPage}>
              <IconArrowBack stroke={1.5} />
              Annuler
            </Button>
            <Button type="submit">
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
            <MoreAboutYou
              user={user}
              selectedHealthCondition={selectedHealthCondition}
              selectedGender={selectedGender}
              selectedActivityLevel={selectedActivityLevel}
              setSelectedHealthCondition={setSelectedHealthCondition}
              setSelectedGender={setSelectedGender}
              setSelectedActivityLevel={setSelectedActivityLevel}
            />
            <Separator />
            <div className="space-y-4">
              <h2 className="text-xl text-neutral-800 dark:text-neutral-100">
                Vos spécialités
              </h2>
              <Specialities
                selectSpecialities={selectSpecialities}
                isSelectedSpecialities={isSelectedSpecialities}
              />
            </div>
            <Separator />
            <div className="space-y-4">
              <h2 className="text-xl text-neutral-800 dark:text-neutral-100">
                Vos buts
              </h2>
              <Goals
                selectGoals={selectGoals}
                isSelectedGoals={isSelectedGoals}
              />
            </div>
          </div>
        </form>
      )}
    </>
  );
}
