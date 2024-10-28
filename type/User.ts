import { Goal, Speciality, Review } from "@prisma/client";

export type User = {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;

  createdAt: Date;
  updatedAt: Date;
  isQuiz: boolean;
  age: number | null;
  gender: string | null;
  height: number | null;
  weight: number | null;
  activity_level: string | null;
  goals: Goal[] | null;
  status: string | null;
  bio: string | null;
  health_conditions: string | null;
  speciality: Speciality[] | null;
  tel: string | null;
  coachId: string | null;
  Review: Review[] | null;
};
