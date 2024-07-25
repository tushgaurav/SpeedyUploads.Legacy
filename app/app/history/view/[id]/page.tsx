import type { Metadata } from 'next';
import { getUpload } from "@/server/db/db_operations";
import FileExplorer from '@/components/FileExplorer';

export const metadata: Metadata = {
    title: 'View Upload - SpeedyUploads',
    description: 'View Upload'
}

export default async function ViewUpload({ params }: { params: { id: string } }) {
    // const uploadData = await getUpload(parseInt(params.id));
    // console.log(uploadData);
    const uploadData = {
        id: 18,
        userId: 'user_2ij8k4UluqSLnyZuHGRzmqT494f',
        slug: 'https://speedyuploads.blob.core.windows.net/files/1720012528300.png',
        permission: 'PUBLIC',
        createdAt: '2024-07-03T13:15:33.211Z',
        password: null,
        files: [
            {
                id: 27,
                permaLink: 'https://speedyuploads.blob.core.windows.net/files/1720012528300.png',
                name: 'hero.png',
                extension: 'png',
                size: 123343434,
                userId: 'user_2ij8k4UluqSLnyZuHGRzmqT494f',
                metadata: null,
                createdAt: '2024-07-03T13:15:32.397Z',
                updatedAt: '2024-07-03T13:15:33.211Z',
                deleted: false,
                deletedAt: null,
                downloads: 0,
                shaHash: null,
                uploadId: 18,
            },
            {
                id: 27,
                permaLink: 'https://speedyuploads.blob.core.windows.net/files/1720012528300.png',
                name: 'hero.png',
                extension: 'png',
                size: 123343434,
                userId: 'user_2ij8k4UluqSLnyZuHGRzmqT494f',
                metadata: null,
                createdAt: '2024-07-03T13:15:32.397Z',
                updatedAt: '2024-07-03T13:15:33.211Z',
                deleted: false,
                deletedAt: null,
                downloads: 0,
                shaHash: null,
                uploadId: 18,
            },
            {
                id: 27,
                permaLink: 'https://speedyuploads.blob.core.windows.net/files/1720012528300.png',
                name: 'hero.png',
                extension: 'png',
                size: 123343434,
                userId: 'user_2ij8k4UluqSLnyZuHGRzmqT494f',
                metadata: null,
                createdAt: '2024-07-03T13:15:32.397Z',
                updatedAt: '2024-07-03T13:15:33.211Z',
                deleted: false,
                deletedAt: null,
                downloads: 0,
                shaHash: null,
                uploadId: 18,
            },
            {
                id: 27,
                permaLink: 'https://speedyuploads.blob.core.windows.net/files/1720012528300.png',
                name: 'hero.png',
                extension: 'png',
                size: 123343434,
                userId: 'user_2ij8k4UluqSLnyZuHGRzmqT494f',
                metadata: null,
                createdAt: '2024-07-03T13:15:32.397Z',
                updatedAt: '2024-07-03T13:15:33.211Z',
                deleted: false,
                deletedAt: null,
                downloads: 0,
                shaHash: null,
                uploadId: 18,
            },
        ],
    };

    console.log(params.id)
    return (
        <div>

            <FileExplorer upload={uploadData} />
        </div>
    )
}