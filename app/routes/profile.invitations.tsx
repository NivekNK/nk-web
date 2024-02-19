import { DataTable } from "~/components/data-table";
import { IInvitation, columns } from "~/components/table/invitation-columns";

const data: IInvitation[] = [
    {
        id: 0,
        userId: "0",
        fromUser: "NivekNK",
        date: new Date(),
    }
];

export default function Invitations() {
    return (
        <DataTable
            columns={columns}
            data={data}
            pageSize={5}
            filtered={{
                column: "date",
                placeholder: "Search date...",
            }}
        />
    );
}
