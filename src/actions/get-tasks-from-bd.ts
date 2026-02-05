"use server";

import { prisma } from "@/utils/prisma";

export const getTasks = async () => {
  return await prisma.tasks.findMany();
};
