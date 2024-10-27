import { prisma } from "./prisma";

export const getCoach = async (userId: string) => {
  const coach = prisma.coach.findUnique({
    where: { userId },
  });
  return coach;
};
