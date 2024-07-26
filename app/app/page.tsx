import { currentUser } from '@clerk/nextjs/server';
import { Metadata } from "next"
import NumberTicker from '@/components/UI/NumberTicker';
import Home from './AppHome';

export const metadata: Metadata = {
    title: "Dashboard - SpeedyUploads",
    description: "Dashboard",
}

export default async function DashboardPage() {
    const user = await currentUser();

    return (
        <div>
            <Home user={user!} />
        </div>
    )
}