"use server";

import { prisma } from "./prisma";

export const updateUserOne = async (formdata: FormData, id: string) => {
  const name = formdata.get("name") as string;
  const tel = formdata.get("tel") as string;
  const height = formdata.get("height");
  const heightCorrected = height !== null ? Number(height) : null;
  const age = formdata.get("age");
  const ageCorrected = age !== null ? Number(age) : null;
  const weight = formdata.get("weight");
  const weightCorrected =
    weight !== null ? parseFloat(weight.toString().replace(",", ".")) : null;
  const sex = formdata.get("sex") as string;

  console.log(name, weightCorrected, ageCorrected, sex, tel, heightCorrected);

  await prisma.user.update({
    where: { id },
    data: {
      name,
      age: ageCorrected,
      gender: sex,
      weight: weightCorrected,
      tel,
      height: heightCorrected,
    },
  });
};
export const updateUserTwo = async (valueSelected: string, id: string) => {
  console.log(valueSelected);

  await prisma.user.update({
    where: { id },
    data: {
      activity_level: valueSelected,
    },
  });
};
export const updateUserThree = async (valueSelected: string, id: string) => {
  console.log(valueSelected);

  await prisma.user.update({
    where: { id },
    data: {
      health_conditions: valueSelected,
    },
  });
};
export const updateUserFour = async (valueSelected: string[], id: string) => {
  console.log(valueSelected);

  const goals = valueSelected.map((title) => ({ title, userId: id }));
  await prisma.goal.createMany({ data: goals });
};
