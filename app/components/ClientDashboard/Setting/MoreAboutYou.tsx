"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { activityLevels, healthConditions } from "@/data/dataUser";
import { User } from "@/type/User";
interface MoreAboutYouProps {
  user: User | null;
  selectedActivityLevel: string;
  selectedGender: string;
  selectedHealthCondition: string;
  setSelectedHealthCondition: (value: string) => void;
  setSelectedGender: (value: string) => void;
  setSelectedActivityLevel: (value: string) => void;
}

export default function MoreAboutYou({
  user,
  setSelectedHealthCondition,
  selectedHealthCondition,
  selectedGender,
  setSelectedGender,
  selectedActivityLevel,
  setSelectedActivityLevel,
}: MoreAboutYouProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-neutral-800 dark:text-neutral-100">
        Un peu plus sur vous
      </h2>

      <ul className="text-neutral-600 dark:text-neutral-400 grid grid-cols-3 gap-8">
        <li className="space-y-1">
          <Label className="ml-1" htmlFor="height">
            Taille
          </Label>
          <div className="relative">
            <Input
              defaultValue={user?.height ?? ""}
              id="height"
              name="height"
              type="number"
              min={90}
              required
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-4">
              cm
            </span>
          </div>
        </li>
        <li className="space-y-1">
          <Label htmlFor="weight" className="ml-1">
            Poids
          </Label>
          <div className="relative">
            <Input
              defaultValue={user?.weight ?? ""}
              id="weight"
              name="weight"
              type="number"
              min={20}
              required
              step="0.1"
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-4">
              kg
            </span>
          </div>
        </li>
        <li className="space-y-1">
          <Label className="ml-1" htmlFor="age">
            Age
          </Label>
          <div className="relative">
            <Input
              defaultValue={user?.age ?? ""}
              id="age"
              type="number"
              min={12}
              name="age"
              required
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-4">
              ans
            </span>
          </div>
        </li>
        <li className="space-y-1">
          <Label className="ml-1" htmlFor="health_conditions">
            Votre condition physique
          </Label>

          <Select
            required
            value={selectedHealthCondition} // Utilisez l'état local pour la valeur contrôlée
            onValueChange={setSelectedHealthCondition}
            name="health_conditions"
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Sélectionnez votre condition physique" />
            </SelectTrigger>

            <SelectContent
            // style={{ maxHeight: "100px", overflowY: "auto" }}
            // className="text-center"
            >
              {healthConditions.map((condition, idx) => (
                <SelectGroup key={idx}>
                  <SelectLabel className="text-center">
                    {condition.title}
                  </SelectLabel>
                  <SelectItem value={condition.title}>
                    {condition.description}
                  </SelectItem>
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        </li>
        <li className="space-y-1">
          <Label className="ml-1" htmlFor="activity_level">
            Votre niveau d'activité
          </Label>
          <Select
            name="activity_level"
            required
            value={selectedActivityLevel} // Utilisez l'état local pour la valeur contrôlée
            onValueChange={setSelectedActivityLevel}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Sélectionnez votre niveau d'activité" />
            </SelectTrigger>

            <SelectContent
            // style={{ maxHeight: "100px", overflowY: "auto" }}
            // className="text-center"
            >
              {activityLevels.map((condition, idx) => (
                <SelectGroup key={idx}>
                  <SelectLabel className="text-center">
                    {condition.title}
                  </SelectLabel>
                  <SelectItem value={condition.title}>
                    {condition.description}
                  </SelectItem>
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        </li>
        <li className="space-y-1">
          <Label className="ml-1" htmlFor="gender">
            Votre sexe
          </Label>
          <Select
            required
            name="sex"
            value={selectedGender} // Utilisez l'état local pour la valeur contrôlée
            onValueChange={setSelectedGender}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez votre sexe" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sexe</SelectLabel>
                <SelectItem value="female">Femme</SelectItem>
                <SelectItem value="male">Homme</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </li>
      </ul>
    </div>
  );
}
