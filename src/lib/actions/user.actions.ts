"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "../prisma";

export const onAuthenticationUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return { status: 403 };
    }

    // Checking user exist in db or not
  } catch (error) {}
};
