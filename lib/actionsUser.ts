"use server";
import { getRequiredAuthSession } from "./auth";
import { prisma } from "./prisma";
import { specialties } from "../data/data";

export const getUser = async () => {
  const session = await getRequiredAuthSession();
  const id = session.user.id;
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      speciality: true,
      goals: true,
      Review: true,
    },
  });

  if (!user) {
    throw new Error(`User not found at id:` + id);
  }

  return user;
};

export const updateUser = async (
  formData: FormData,
  goals: string[],
  specialities: string[],
  id: string
) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const tel = formData.get("tel") as string;
  const bio = formData.get("bio") as string;
  // const imageUrl=formData.get("image-url")
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
    },
  });
  console.log(
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
    specialities,
    goals,
    id
  );

  const goal = goals.map((title) => ({ title, userId: id }));
  const speciality = specialities.map((title) => ({ title, userId: id }));

  await prisma.goal.deleteMany({ where: { userId: id } });
  await prisma.speciality.deleteMany({ where: { userId: id } });
  await prisma.goal.createMany({ data: goal });
  await prisma.speciality.createMany({ data: speciality });
};

export const updateUserImageProfil = async (image: string, id: string) => {
  await prisma.user.update({
    where: { id },
    data: {
      image,
    },
  });
};
