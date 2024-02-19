import { Link } from "@remix-run/react";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export interface ISession {
    id: number;
    name: string;
    users: string[];
    userId: string;
    owned: boolean;
}

export const columns: ColumnDef<ISession>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Session Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const session = row.original;
            return (
                <Link to={`/session/${session.id}`} className="transition duration-100 hover:text-primary">
                    {session.name}
                </Link>
            );
        },
    },
    {
        accessorKey: "users",
        header: "Users",
        cell: ({ row }) => {
            const session = row.original;
            return (
                <div className="flex flex-1 flex-col w-full">
                    {session.users.map((value, index) => (
                        <h1 key={index}>{"- " + value}</h1>
                    ))}
                </div>
            );
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const session = row.original;

            if (!session.owned)
                return <></>;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => {
                                console.log(`add user for session ${session.id}`);
                            }}
                        >
                            Add User
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                console.log(`remove user for session ${session.id}`);
                            }}
                        >
                            Remove User
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => {
                                console.log(`delete ${session.id} for user ${session.userId}`);
                            }}
                            className="text-red-700"
                        >
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

