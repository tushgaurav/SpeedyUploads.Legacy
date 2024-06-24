import TableComponent from "./TableComponent";
import Pagination from "./Pagination";
import { getUploads } from "@/server/db/db_operations";

export default async function TableView({ page, perPage, userId }: { page: string, perPage: string, userId: string }) {
    const header = ["name", "files", "actions"];

    const start = (parseInt(page) - 1) * parseInt(perPage);
    const end = start + parseInt(perPage);

    const uploads = await getUploads(userId);
    console.log(uploads);

    const data = uploads.map((upload) => {
        return {
            name: upload.slug,
            files: upload.files.length,
        }
    });

    return (
        <div>

            <TableComponent
                header={header}
                data={data.slice(start, end)}
            />

            <Pagination currentPage={parseInt(page)} totalPages={Math.ceil(data.length / parseInt(perPage))} />
        </div>
    );


}

