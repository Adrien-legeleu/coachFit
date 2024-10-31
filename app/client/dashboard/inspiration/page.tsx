"use client";
import { useEffect, useState } from "react";

interface Exercise {
  id: string; // Assurez-vous que le type correspond à celui renvoyé par l'API
  name: string;
  steps: string;
  equipment: string;
  muscle: string;
}

export default function PageInspiration() {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch("/api/coachfit/getExercices"); // Chemin correct vers l'API
        const data = await response.json();

        if (response.ok) {
          setExercises(data.data); // Assurez-vous que `data.data` est correct
        } else {
          setError(
            data.error ||
              "Erreur lors de la récupération des exercices aaaaaaaa"
          );
        }
      } catch (error) {
        setError("Erreur lors de la récupération des exercices tytytyt.");
      }
    };

    fetchExercises();
  }, []);

  if (error) return <p>{error}</p>;
  if (exercises.length === 0) return <p>Chargement...</p>;

  return (
    <div>
      <h1>Liste des Exercices</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            <h2>{exercise.name}</h2>
            <p>Étapes : {exercise.steps}</p>
            <p>Équipement : {exercise.equipment}</p>
            <p>Muscle : {exercise.muscle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
