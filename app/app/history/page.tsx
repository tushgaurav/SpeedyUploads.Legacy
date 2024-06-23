import { Metadata } from "next";
import TableView from "./_components/TableView";

export const metadata: Metadata = {
    title: "History - Speedy Uploads",
    description: "View all your created Uploads here.",
};

export default function HistoryPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const page = searchParams["page"] as string ?? '1';
    const per_page = searchParams["per_page"] as string ?? '5';

    return (
        <div>
            <h1 className="text-xl font-bold">History</h1>
            <div>
                <p>View all your created Uploads here.</p>
                <TableView page={page} perPage={per_page} />
            </div>
        </div>
    )
}