import TableComponent from "./TableComponent";
import Pagination from "./Pagination";

export default function TableView({ page, perPage }: { page: string, perPage: string }) {
    const header = ["name", "created", "actions"];
    const data = [
        {
            name: "Daggy",
            created: "7 days ago",
        },
        {
            name: "Anubra",
            created: "23 hours ago",
        },
        {
            name: "Josef",
            created: "A few seconds ago",
        },
        {
            name: "Sage",
            created: "A few hours ago",
        },
        {
            name: "Sage",
            created: "A few hours ago",
        },
        {
            name: "Daggy",
            created: "7 days ago",
        },
        {
            name: "Anubra",
            created: "23 hours ago",
        },
        {
            name: "Josef",
            created: "A few seconds ago",
        },
        {
            name: "Sage",
            created: "A few hours ago",
        },
        {
            name: "Sage",
            created: "A few hours ago",
        },
        {
            name: "Daggy",
            created: "7 days ago",
        },
        {
            name: "Anubra",
            created: "23 hours ago",
        },
        {
            name: "Josef",
            created: "A few seconds ago",
        },
        {
            name: "Sage",
            created: "A few hours ago",
        },
        {
            name: "Sage",
            created: "A few hours ago",
        },
        {
            name: "Daggy",
            created: "7 days ago",
        },
        {
            name: "Anubra",
            created: "23 hours ago",
        },
        {
            name: "Josef",
            created: "A few seconds ago",
        },
        {
            name: "Sage",
            created: "A few hours ago",
        },
        {
            name: "Sage",
            created: "A few hours ago",
        },
        {
            name: "Daggy",
            created: "7 days ago",
        },
        {
            name: "Anubra",
            created: "23 hours ago",
        },
        {
            name: "Josef",
            created: "A few seconds ago",
        },
        {
            name: "Sage",
            created: "A few hours ago",
        },
        {
            name: "Sage",
            created: "A few hours ago",
        }
    ];

    const start = (parseInt(page) - 1) * parseInt(perPage);
    const end = start + parseInt(perPage);

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

