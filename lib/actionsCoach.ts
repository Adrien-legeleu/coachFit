"use server";
import { prisma } from "./prisma";
import TypeClients from "../app/components/CoachDashboard/Setting/TypeClients";

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
  const heightData = formData.get("height");
  const height = heightData !== null ? Number(heightData) : null;
  const weightData = formData.get("weight");
  const weight =
    weightData !== null
      ? parseFloat(weightData.toString().replace(",", "."))
      : null;
  const ageData = formData.get("age");
  const age = ageData !== null ? Number(ageData) : null;
  const health_conditions = formData.get("health_conditions") as string;
  const activity_level = formData.get("activity_level") as string;
  const gender = formData.get("sex") as string;

  await prisma.user.update({
    where: { id },
    data: {
      name,
      age,
      height,
      weight,
      activity_level,
      health_conditions,
      email,
      tel,
      gender,
      bio,
      price: Number(formData.get("price")), // Capture price from form
    },
  });

  const goal = typeClients.map((title) => ({ title, coachId: id }));
  const speciality = specialities.map((title) => ({ title, coachId: id }));

  // Update diplomas associated with the coach
  const diplomaEntries = diplomes.map((title) => ({ title, coachId: id }));

  // Clear existing entries
  await prisma.goal.deleteMany({ where: { coachId: id } });
  await prisma.speciality.deleteMany({ where: { coachId: id } });
  await prisma.diplome.deleteMany({ where: { coachId: id } }); // Clear existing diplomas

  // Create new entries
  await prisma.goal.createMany({ data: goal });
  await prisma.speciality.createMany({ data: speciality });
  await prisma.diplome.createMany({ data: diplomaEntries }); // Add new diplomas
};

export const updateCoachImageProfil = async (image: string, id: string) => {
  await prisma.user.update({
    where: { id },
    data: {
      image,
    },
  });
};
