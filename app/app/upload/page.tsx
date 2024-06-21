import { Metadata } from "next";
import UploadCore from "./UploadCore";
import { Section, SectionTitle, SectionContent } from "@/app/_components/SectionEssentials/Section";

export const metadata: Metadata = {
    title: "Upload Files - SpeedyUploads",
    description: "Upload",
}

export default function UploadPage() {
    return (
        <div>
            <UploadCore />
        </div>
    )
}