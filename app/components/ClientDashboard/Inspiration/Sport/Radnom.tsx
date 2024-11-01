"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getExercices } from "@/services/sport/getExercices";
import Image from "next/image";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// Importer la fonction

export default function SportRandom() {
  const [exercises, setExercises] = useState<any[]>([]); // Spécifier le type comme tableau
  const [exercicesLoading, setExercicesLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setExercicesLoading(true);
        const exercices = await getExercices(); // Appeler la fonction pour récupérer les exercices
        setExercises(exercices);
      } catch (error) {
        console.log(error);
        toast.error("Erreur lors du chargement des exercices");
      } finally {
        setExercicesLoading(false); // Assurez-vous que le chargement se termine
      }
    })();
  }, []);

  return (
    <div className="p-20 w-full overflow-y-auto">
      <h1>Liste des Exercices</h1>
      {exercicesLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className="grid grid-col-3 gap-8">
          {exercises.map((exercise, idx) => (
            <Card key={"exercice number : " + idx}>
              <CardHeader>
                <CardTitle>{exercise.name}</CardTitle>
                <CardDescription>
                  Partie du corps : {exercise.bodyPart}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Image
                    unoptimized
                    width={50}
                    height={50}
                    src={exercise.gifUrl}
                    alt="image exercice"
                  />
                  <p>Muscle visée : {exercise.target}</p>
                  <div>
                    <h3>Muscle secondaire</h3>
                    {exercise.secondaryMuscles.map(
                      (muscle: string, idx: number) => {
                        return (
                          <div key={"secondaryMuscle :" + idx}>{muscle}</div>
                        );
                      }
                    )}
                  </div>
                  <div>
                    <h3>Instructions</h3>
                    {exercise.instructions.map((instr: string, idx: number) => {
                      return (
                        <div key={"secondaryMuscle :" + idx}>
                          {" "}
                          {idx} : {instr}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </ul>
      )}
    </div>
  );
}
