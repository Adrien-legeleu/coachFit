"use server";

import { prisma } from "./prisma";

export const createCoach = async (formdata: FormData, id: string) => {
  const name = formdata.get("name") as string;
  const email = formdata.get("email") as string;
  const tel = formdata.get("tel") as string;
  const age = formdata.get("age");
  const ageCorrected = age !== null ? Number(age) : null;
  const price = formdata.get("price");
  const pricetCorrected =
    price !== null ? parseFloat(price.toString().replace(",", ".")) : null;
  const sex = formdata.get("sex") as string;

  console.log(name, price, pricetCorrected, ageCorrected, sex, tel);
  const coach = await prisma.coach.findUnique({
    where: { userId: id },
  });
  console.log("ueizueizueiuueiuz" + coach);

  if (coach) {
    await prisma.coach.update({
      where: { id: coach.id },
      data: {
        name,
        email,
        age: ageCorrected,
        gender: sex,
        tel,
        price: pricetCorrected,
      },
    });
  } else {
    await prisma.coach.create({
      data: {
        name,
        email,
        age: ageCorrected,
        gender: sex,
        tel,
        price: pricetCorrected,
        userId: id,
      },
    });
  }
};

export const updateCoachTwo = async (valueSelected: string, id: string) => {
  console.log(valueSelected);

  await prisma.coach.update({
    where: { userId: id },
    data: {
      year_exp: valueSelected,
    },
  });
};
export const updateCoachThree = async (valueSelected: string[], id: string) => {
  console.log(valueSelected);

  const diplomes = valueSelected.map((title) => ({ title, coachId: id }));
  await prisma.diplome.createMany({ data: diplomes });
};

export const updateCoachFour = async (valueSelected: string[], id: string) => {
  console.log(valueSelected);
  const coach = await prisma.coach.findUnique({
    where: { id },
  });
  console.log("ezezjjeizujei");

  console.log(coach);

  const type_clients = valueSelected.map((title) => ({ title, coachId: id }));
  await prisma.typeClients.createMany({ data: type_clients });
};

export const updateCoachFive = async (valueSelected: string[], id: string) => {
  console.log(valueSelected);
  const coach = await prisma.coach.findUnique({
    where: { id },
  });
  console.log("ezezjjeizujei");

  console.log(coach);

  const speciality = valueSelected.map((title) => ({ title, coachId: id }));
  await prisma.specialityCoach.createMany({ data: speciality });
};

export const updateCoachSix = async (formdata: FormData, id: string) => {
  let bio = formdata.get("bio") as string;
  if (!bio) {
    bio = "";
  }

  console.log(bio);

  await prisma.coach.update({
    where: { id },
    data: {
      bio,
      isQuiz: true,
    },
  });
};
