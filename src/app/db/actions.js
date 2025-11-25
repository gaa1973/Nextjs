"use server";//ServerActionsを使うときには必須

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addUser(formData){
  const name = formData.get("name");
  await prisma.user.create({
    data:{name},
  });

  revalidatePath("/db");
}