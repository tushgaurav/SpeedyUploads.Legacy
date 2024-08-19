import { Grid, SimpleGrid } from "@chakra-ui/react";
import {
    IoCloudUploadSharp,
    IoCloudDownloadSharp,
    IoServerSharp,
    IoDocument,
    IoLogoGithub,
} from "react-icons/io5";
import type { User } from "@clerk/nextjs/server";
import NumberTicker from "@/components/UI/NumberTicker";
import MiniStatistics from "@/components/MiniStatistics";
import SimpleCard from "@/components/UI/Card/SimpleCard";
import DownloadsOverview from "@/components/DownloadsOverview";
import LineChart from "@/components/Charts/LineChart";
import { getDataForDashboard } from "@/server/db/db_operations";

export default async function Home({ user }: { user: User }) {
    const data = await getDataForDashboard(user.id);
    console.log(data);
    return (
        <div>
            <h1 className="text-2xl">Welcome, {`${user?.firstName} 😁!`}</h1>
            {/* Divider */}
            <div className="border-b border-gray-200 dark:border-gray-700 my-4" />
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
                <MiniStatistics
                    title={"Total Uploads"}
                    amount={data.totalUploads === 0 ? 0 : <NumberTicker value={data.totalUploads} />}
                    percentage={55}
                    icon={<IoCloudUploadSharp className="h-[24px] w-[24px]" />}
                />
                <MiniStatistics
                    title={"Total Downloads"}
                    amount={data.totalDownloads === 0 ? 0 : <NumberTicker value={data.totalDownloads} />}
                    percentage={5}
                    icon={<IoCloudDownloadSharp className="h-[24px] w-[24px]" />}
                />
                <MiniStatistics
                    title={"Storage Used"}
                    amount={data.storageUsed}
                    percentage={-14}
                    icon={<IoServerSharp className="h-[24px] w-[24px]" />}
                />
                <MiniStatistics
                    title={"Total Files"}
                    amount={data.totalFiles === 0 ? 0 : <NumberTicker value={data.totalFiles} />}
                    percentage={8}
                    icon={<IoDocument className="h-[24px] w-[24px]" />}
                />
            </SimpleGrid>

            <Grid
                templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
                templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
                gap="24px"
                mt={{ lg: "26px" }}
                alignItems={'center'}
            >
                <SimpleCard
                    title="We are Now Open Source"
                    body="
              We're excited to announce that SpeedyUploads.com is now open source! Dive into our codebase,
              contribute your ideas, and help shape the future of file sharing and content delivery. 
              Together, we can make seamless, instant uploads and effortless file sharing accessible to everyone.
              Join our community and be part of the innovation!"
                    link="https://github.com/tushgaurav/speedyuploads"
                    linkText={
                        <div className="flex gap-2 items-center">
                            <IoLogoGithub className="h-6 w-6 inline-block mr-2" />
                            <span>Source Code</span>
                        </div>
                    }
                />

                <DownloadsOverview
                    title="Downloads Overview"
                    chart={<LineChart />}
                />
            </Grid>
        </div>
    );
}
