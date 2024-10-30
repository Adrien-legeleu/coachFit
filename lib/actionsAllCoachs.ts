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
