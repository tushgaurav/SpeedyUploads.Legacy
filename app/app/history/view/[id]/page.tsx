import type { Metadata } from 'next';
import { getUpload } from "@/server/db/db_operations";
import FileExplorer from '@/components/FileExplorer';

export const metadata: Metadata = {
    title: 'View Upload - SpeedyUploads',
    description: 'View Upload'
}

export default async function ViewUpload({ params }: { params: { id: string } }) {
    const uploadData = await getUpload(parseInt(params.id));

    console.log(params.id)
    return (
        <div>

            <FileExplorer upload={uploadData} />
        </div>
    )
}