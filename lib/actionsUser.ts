"use server";
import { getRequiredAuthSession } from "./auth";
import { prisma } from "./prisma";

export const getUser = async () => {
  const session = await getRequiredAuthSession();
  const id = session.user.id;
  const user = await prisma.user.findUnique({
    where: { id },
  });
  if (!user) {
    throw new Error(`User not found at id:` + id);
  }
  return user;
};
