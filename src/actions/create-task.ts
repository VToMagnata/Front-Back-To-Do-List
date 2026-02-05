"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createTask(task: string) {
  await prisma.tasks.create({
    data: {
      task,
      done: false,
    },
  });

  revalidatePath("/");
}
