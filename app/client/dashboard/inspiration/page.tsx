"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getExercices } from "@/services/coachfit/getExercices";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// Importer la fonction

export default function PageInspiration() {
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
    <div className="p-20">
      <h1>Liste des Exercices</h1>
      {exercicesLoading ? (
        <div>Loading...</div>
      ) : (
        <ul className="grid grid-col-3 gap-8">
          {exercises.map((exercise, idx) => (
            <li key={idx}>
              <h2>{exercise.name}</h2>
              <p>Instructions : {exercise.instructions}</p>
              <p>Équipement : {exercise.equipment}</p>
              <p>Muscle : {exercise.bodyPart}</p>
              <p>Difficulté : {exercise.difficulty}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
