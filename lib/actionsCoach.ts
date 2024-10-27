"use server";
import { prisma } from "./prisma";

export const getCoach = async (userId: string) => {
  const coach = await prisma.coach.findUnique({
    where: { userId },
  });
  console.log("Coach found in DB:", coach);
  return coach;
};

export const getCoachId = async (userId: string) => {
  const coach = await getCoach(userId);
  if (!coach) {
    throw new Error("Coach not found");
  }
  return coach.id;
};
