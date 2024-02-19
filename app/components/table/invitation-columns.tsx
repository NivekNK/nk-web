import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export interface IInvitation {
    id: number;
    userId: string;
    fromUser: string;
    date: Date;
}

export const columns: ColumnDef<IInvitation>[] = [
    {
        accessorKey: "fromUser",
        header: "User",
    },
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Received Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const invitation = row.original;

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
                                console.log(`Accepted invitation ${invitation.id} from user ${invitation.fromUser} at ${invitation.date.toLocaleString()}`);
                            }}
                        >
                            Accept
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => {
                                console.log(`Declined invitation ${invitation.id} from user ${invitation.fromUser} at ${invitation.date.toLocaleString()}`);
                            }}
                        >
                            Decline
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

