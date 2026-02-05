"use server";

import { prisma } from "@/utils/prisma";

export async function deleteTask(id: string) {
  await prisma.tasks.delete({
    where: { id },
  });
}
