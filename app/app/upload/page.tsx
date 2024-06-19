import UploadCore from "./UploadCore";
import { Section, SectionTitle, SectionContent } from "@/app/_components/SectionEssentials/Section";

export default function UploadPage() {
    return (
        <Section>
            <SectionTitle>Upload</SectionTitle>
            <SectionContent className='mt-4'>

                <UploadCore />


            </SectionContent>
        </Section>
    )
}