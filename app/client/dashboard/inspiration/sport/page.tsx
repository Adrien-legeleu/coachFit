"use client";

import SportRandom from "@/app/components/ClientDashboard/Inspiration/Sport/ModalExercices";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { exerciceSportAPI } from "@/services/sport";
import { inspirationSport } from "@/data/dataInspiration";
import Image, { StaticImageData } from "next/image";

interface SportData {
  id: number;
  value: string;
  title: string;
  img: StaticImageData;
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
      <h1 className="text-6xl text-center font-bold">Type d'exercices</h1>
      <div className="grid grid-cols-2 gap-10 mt-10">
        {inspirationSport.map((data: SportData, idx) => {
          return (
            <Dialog key={`modal exercices numéro ${data.id} `}>
              <div className="rounded-3xl shadow-xl flex justify-center items-center mx-5 h-60  shadow-black/20">
                <DialogTrigger asChild onClick={() => handleFetch(data.value)}>
                  <div className="cursor-pointer h-full w-full relative">
                    <h3 className="text-5xl [text-shadow:_0_8px_8px_rgb(0_0_0_/_0.5)]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-100">
                      {data.title}
                    </h3>
                    <Image
                      width={200}
                      height={200}
                      src={data.img}
                      alt={`image de ${data.title}`}
                      className={`w-full max-h-full ${
                        data.value === "random"
                          ? "object-contain  "
                          : "object-cover  "
                      } rounded-3xl`}
                    />
                  </div>
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
