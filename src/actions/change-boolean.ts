"use server";

import { prisma } from "@/utils/prisma";

export async function changeBoolean(id: string) {
  const task = await prisma.tasks.findUnique({
    where: { id },
    select: { done: true },
  });

  if (!task) return;

  await prisma.tasks.update({
    where: { id },
    data: { done: !task.done },
  });
}
