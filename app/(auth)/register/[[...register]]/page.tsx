import { Metadata } from "next";
import { SignUp } from "@clerk/nextjs";

export const metadata: Metadata = {
    title: 'Sign In - SpeedyUploads',
    description: 'Sign in to your SpeedyUploads account',
}

export default function Page() {
    return <SignUp />;
}