import { authConfig } from "@/auth";
import { getServerSession } from "next-auth";

export const getAuthSession = () => {
  return getServerSession(authConfig);
};

export const getRequiredAuthSession = async () => {
  const session = await getAuthSession();
  if (!session?.user) {
    throw new Error("sesion not found");
  }
  return session;
};
