"use client";

import SportRandom from "@/app/components/ClientDashboard/Inspiration/Sport/ModalExercices";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { exerciceSportAPI } from "@/services/sport";
import { inspirationSport } from "@/data/dataInspiration";

interface SportData {
  id: number;
  value: string;
  title: string;
  //   img: string;
}

export default function PageSport() {
  const [exercises, setExercises] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchExercisesRandom = async () => {
    try {
      const randomExercises = await exerciceSportAPI.getAllExercisesRandom();
      setExercises(randomExercises);
    } catch (error) {
      console.error("Erreur lors du chargement des exercices : ", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchExercisesBodyPart = async (bodyPart: string) => {
    try {
      const randomExercises = await exerciceSportAPI.getExercisesByBodyPart(
        bodyPart
      );
      setExercises(randomExercises);
    } catch (error) {
      console.error("Erreur lors du chargement des exercices : ", error);
    } finally {
      setLoading(false);
    }
  };
  const handleFetch = (value: string) => {
    if (value === "random") {
      fetchExercisesRandom();
    } else {
      fetchExercisesBodyPart(value);
    }
  };
  return (
    <div className="p-20 w-full overflow-y-auto">
      <h1>Type d'exercices</h1>
      <div className="grid grid-cols-2 gap-10 mt-10">
        {inspirationSport.map((data: SportData) => {
          return (
            <Dialog>
              <div className="bg-red-400 rounded-3xl shadow-xl flex justify-center items-center p-8 shadow-black/20">
                <DialogTrigger asChild onClick={() => handleFetch(data.value)}>
                  <h3 className="text-3xl text-neutral-50">{data.title}</h3>
                </DialogTrigger>
              </div>
              <DialogContent
                className="sm:max-w-[825px] overflow-y-auto"
                style={{ height: "calc(100vh - 80px)" }}
              >
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <SportRandom exercises={exercises} />
                )}
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
}
