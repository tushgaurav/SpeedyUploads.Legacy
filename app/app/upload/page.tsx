import { Metadata } from "next";
import { currentUser } from '@clerk/nextjs/server';
import UploadCore from "./UploadCore";

export const metadata: Metadata = {
    title: "Upload Files - SpeedyUploads",
    description: "Upload files here to share with others.",
}

export default async function UploadPage() {
    const user = await currentUser();

    return (
        <div>
            <UploadCore userId={user!.id} />
        </div>
    )
}