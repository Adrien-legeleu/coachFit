"use server";

import { prisma } from "./prisma";

export const getAllCoachs = async () => {
  const allCoachs = await prisma.coach.findMany({
    include: {
      reviews: true,
      diplome: true,
      type_clients: true,
      speciality: true,
    },
  });
  return allCoachs;
};

export const getCoachToId = async (id: string) => {
  const coachToId = await prisma.coach.findUnique({
    where: { id },
    include: {
      reviews: true,
      diplome: true,
      type_clients: true,
      speciality: true,
    },
  });
  if (!coachToId) {
    throw new Error("coach not find at ID: " + id);
  }
  return coachToId;
};
