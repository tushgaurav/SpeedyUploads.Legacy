import { currentUser } from '@clerk/nextjs/server';
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Dashboard - SpeedyUploads",
    description: "Dashboard",
}

export default async function DashboardPage() {
    const user = await currentUser();

    return (
        <div>
            <h1 className='text-2xl font-bold'>Welcome, {`${user?.firstName} 😁`}</h1>
        </div>
    )
}