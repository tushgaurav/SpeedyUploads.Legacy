import { createUpload } from "@/server/db/db_operations";

export async function POST(request: Request) {
  console.log("SYNCING DATABASE");
  try {
    const data = await request.json();
    console.log(data);
    await createUpload(data.userId, data.dataUrl, [
      { permaLink: data.dataUrl, userId: data.userId },
    ]);
    return Response.json({ message: "Success" });
  } catch (error) {
    return Response.json({ message: "Error" });
  }
}
