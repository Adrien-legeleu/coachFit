"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select as CustomSelect, // Renommer le Select de votre bibliothèque
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Select as AntdSelect } from "antd"; // Renommer le Select d'antd

import { Coach } from "@/type/Coach";
import { diplomes, year_exp } from "@/data/dataCoach";

interface MoreAboutYouProps {
  coach: Coach | null;
  selectedAYearExp: string;
  selectedGender: string;
  handleSelectDiplomeChange: (value: string[]) => void;
  setSelectedGender: (value: string) => void;
  setSelectedAYearExp: (value: string) => void;
}

export default function MoreAboutYou({
  coach,
  handleSelectDiplomeChange,
  selectedGender,
  setSelectedGender,
  selectedAYearExp,
  setSelectedAYearExp,
}: MoreAboutYouProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl text-neutral-800 dark:text-neutral-100">
        Un peu plus sur vous
      </h2>

      <ul className="text-neutral-600 dark:text-neutral-400 grid grid-cols-3 gap-8">
        <li className="space-y-1">
          <Label className="ml-1" htmlFor="price">
            Prix
          </Label>
          <div className="relative">
            <Input
              defaultValue={coach?.price ?? ""}
              id="price"
              name="price"
              type="number"
              step="0.1"
              required
            />
            <span className="absolute top-1/2 -translate-y-1/2 right-4">
              euros
            </span>
          </div>
        </li>
        <li className="space-y-1"></li>
        <li className="space-y-1">
          <Label className="ml-1" htmlFor="age">
            Age
          </Label>
          <div className="relative">
            <Input
              defaultValue={coach?.age ?? ""}
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
          <Label className="ml-1" htmlFor="diplome">
            Vos diplômes
          </Label>

          <AntdSelect
            mode="multiple"
            placeholder="Veuillez sélectionner"
            onChange={handleSelectDiplomeChange}
            style={{ width: "100%" }}
            options={diplomes}
          />
        </li>
        <li className="space-y-1">
          <Label className="ml-1" htmlFor="year_exp">
            Vos années d'expérience
          </Label>
          <CustomSelect // Utilisez le Select de votre bibliothèque personnalisée
            name="year_exp"
            required
            value={selectedAYearExp}
            onValueChange={setSelectedAYearExp}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Sélectionnez votre niveau d'activité" />
            </SelectTrigger>

            <SelectContent>
              {year_exp.map((exp, idx) => (
                <SelectGroup key={idx}>
                  <SelectLabel className="text-center">{exp.title}</SelectLabel>
                  <SelectItem value={exp.value}>{exp.description}</SelectItem>
                </SelectGroup>
              ))}
            </SelectContent>
          </CustomSelect>
        </li>
        <li className="space-y-1">
          <Label className="ml-1" htmlFor="gender">
            Votre sexe
          </Label>
          <CustomSelect
            required
            name="sex"
            value={selectedGender}
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
          </CustomSelect>
        </li>
      </ul>
    </div>
  );
}
