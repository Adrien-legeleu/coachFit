"use server";
import { prisma } from "./prisma";

export const getCoach = async (userId: string) => {
  const coach = await prisma.coach.findUnique({
    where: { userId },
    include: {
      diplome: true,
      speciality: true,
      type_clients: true,
      reviews: true,
    },
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

export const updateCoach = async (
  formData: FormData,
  typeClients: string[],
  specialities: string[],
  diplomes: string[],
  id: string
) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const tel = formData.get("tel") as string;
  const bio = formData.get("bio") as string;
  const priceData = formData.get("price");
  const price =
    priceData !== null
      ? parseFloat(priceData.toString().replace(",", "."))
      : null;
  const ageData = formData.get("age");
  const age = ageData !== null ? Number(ageData) : null;
  const year_exp = formData.get("year_exp") as string;
  const gender = formData.get("sex") as string;

  console.log(
    name,
    age,
    email,
    tel,
    gender,
    year_exp,
    bio,
    price,
    typeClients,
    specialities,
    diplomes
  );

  await prisma.coach.update({
    where: { id },
    data: {
      name,
      age,
      email,
      tel,
      gender,
      year_exp,
      bio,
      price,
      isQuiz: true,
    },
  });

  const typeClient = typeClients.map((title) => ({ title, coachId: id }));
  const speciality = specialities.map((title) => ({ title, coachId: id }));
  const diplomaEntries = diplomes.map((title) => ({ title, coachId: id }));

  // Clear existing entries
  await prisma.typeClients.deleteMany({ where: { coachId: id } });
  await prisma.specialityCoach.deleteMany({ where: { coachId: id } });
  await prisma.diplome.deleteMany({ where: { coachId: id } }); // Clear existing diplomas

  // Create new entries
  await prisma.typeClients.createMany({ data: typeClient });
  await prisma.specialityCoach.createMany({ data: speciality });
  await prisma.diplome.createMany({ data: diplomaEntries }); // Add new diplomas
};

export const updateCoachImageProfil = async (image: string, id: string) => {
  await prisma.coach.update({
    where: { id },
    data: {
      image,
    },
  });
};
