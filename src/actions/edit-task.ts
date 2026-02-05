"use server";

import { prisma } from "@/utils/prisma";

export async function uptadeTaskText(id: string, task: string) {
  await prisma.tasks.update({
    where: { id },
    data: { task },
  });
}
