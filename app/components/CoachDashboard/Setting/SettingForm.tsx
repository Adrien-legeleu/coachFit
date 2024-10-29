"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconChecklist, IconArrowBack } from "@tabler/icons-react";

import { useEffect, useState } from "react";
import InformationsPersonnal from "./InformationsPersonnal";
import { getCoach, updateCoach } from "@/lib/actionsCoach";
import Specialities from "./Specialities";
import { toast } from "react-toastify";
import MoreAboutYou from "./MoreAboutYou";

import { useCoachSettingContext } from "@/context/coachSettingContext";
import { Coach } from "@/type/Coach";
import { clientTypes, specialties } from "@/data/dataCoach";
import TypeClients from "./TypeClients";

export interface CoachProps {
  coach: Coach | null;
}

export default function SettingForm() {
  const { coach, isLoading } = useCoachSettingContext();

  const refreshPage = () => {
    window.location.reload();
  };

  //select
  const [valuesDiplome, setvaluesDiplome] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAYearExp, setSelectedAYearExp] = useState("");

  const fetchCoach = async () => {
    if (coach) {
      console.log("udisuisudiuisudiuiduiduiuiuiuiuiu");
      console.log(coach?.diplome?.map((dipl) => dipl.title) ?? []);

      setvaluesDiplome(coach?.diplome?.map((dipl) => dipl.title) ?? []);
      setSelectedGender(coach.gender ?? "");
      setSelectedAYearExp(coach.year_exp ?? "");
    }
  };

  const handleSelectDiplomeChange = (value: string[]) => {
    setvaluesDiplome(value);
  };

  useEffect(() => {
    fetchCoach();
  }, [coach]);

  //Type de clients
  const [valueSelectedTypeClients, setValueSelectedTypeClients] = useState<
    string[]
  >([]);
  const [isSelectedTypeClients, setIsSelectedTypeClients] = useState<number[]>(
    []
  );

  const selectTypeClients = (idx: number, value: string) => {
    if (isSelectedTypeClients.includes(idx)) {
      setIsSelectedTypeClients((prev) => prev.filter((item) => item !== idx));
      setValueSelectedTypeClients((prev) =>
        prev.filter((item) => item !== value)
      );
    } else {
      setIsSelectedTypeClients((prev) => [...prev, idx]);
      setValueSelectedTypeClients((prev) => [...prev, value]);
    }
  };

  const findTypeClients = async () => {
    if (coach) {
      const selectedTypeClients = new Set<number>();
      const selectedTypeClientsValue = coach.type_clients || [];
      clientTypes.map((client, idx) => {
        coach.type_clients?.forEach((clientExisted) => {
          if (client.title === clientExisted.title) {
            selectedTypeClients.add(idx);
          }
        });
      });
      setValueSelectedTypeClients(
        selectedTypeClientsValue.map((goal) => goal.title)
      );
      setIsSelectedTypeClients(Array.from(selectedTypeClients));
    }
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
    if (coach) {
      const selectedSpecialities = new Set<number>();
      const coachSpecialities = coach.speciality || [];
      specialties.map((speciality, idx) => {
        coach.speciality?.forEach((specialityExisted) => {
          if (speciality.title === specialityExisted.title) {
            selectedSpecialities.add(idx);
          }
        });
      });
      setValueSelectedSpecialities(
        coachSpecialities.map((speciality) => speciality.title)
      );
      setIsSelectedSpecialities(Array.from(selectedSpecialities));
    }
  };

  useEffect(() => {
    findTypeClients();
    findSpecialities();
  }, [coach]); // Ajoutez coach comme dépendance

  //form send
  const submitSettingCoach = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (coach?.id) {
      try {
        const formData = new FormData(e.currentTarget);
        await updateCoach(
          formData,
          valueSelectedTypeClients,
          valueSelectedSpecialities,
          valuesDiplome,
          coach.id
        );
        toast.success("Sauvegarde du profil réalisé avec succès !");
      } catch (error) {
        toast.error("Erreur lors de la sauvegarde du profil");
      }
    } else {
      console.error("userId pas défini");
      toast.error("userId pas défini, veuillez vous reconnecter");
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form
          className="flex w-2/3 flex-col mx-auto mt-20"
          onSubmit={submitSettingCoach}
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
            <InformationsPersonnal coach={coach} /> <Separator />
            <MoreAboutYou
              coach={coach} // Remplacez user par coach
              handleSelectDiplomeChange={handleSelectDiplomeChange}
              selectedGender={selectedGender}
              setSelectedAYearExp={setSelectedAYearExp}
              valuesDiplome={valuesDiplome}
              setSelectedGender={setSelectedGender}
              selectedAYearExp={selectedAYearExp}
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
                Vos type de clients
              </h2>
              <TypeClients
                selectTypeClients={selectTypeClients}
                isSelectedTypeClients={isSelectedTypeClients}
              />
            </div>
          </div>
        </form>
      )}
    </>
  );
}
