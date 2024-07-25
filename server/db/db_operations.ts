import prisma from "./db";
import type { User } from "@prisma/client";

// Create or update existing user in the database
export const upsertUser = async (user: User) => {
  console.log(user);
  return await prisma.user.upsert({
    where: { userId: user.userId },
    update: user,
    create: user,
  });
};

// New upload created with the given user ID and creation of file at the same time
export const createUpload = async (
  userId: string,
  slug: string,
  files: any
) => {
  // Creating seperate records for each file
  //   console.log(files);
  let fileArray = files.map((file: any) => ({
    permaLink: file.permaLink,
    userId,
    name: file.name,
    extension: file.extension,
  }));

  try {
    const fileRecords = await prisma.file.createManyAndReturn({
      data: fileArray,
    });

    console.log("FROM DB OPERATIONS.ts createmanyinvocation", fileRecords);
    return await prisma.upload.create({
      data: {
        userId,
        slug,
        files: {
          connect: fileRecords.map((file: any) => ({ id: file.id })),
        },
      },
    });
  } catch (error) {
    console.error(error);
  }

  // Creating a single record for the upload and associating the files with it
};

// Get all uploads for the given user ID
export const getUploads = async (userId: string) => {
  "use server";
  return await prisma.upload.findMany({
    where: { userId },
    include: { files: true },
    orderBy: { createdAt: "desc" },
  });
};
