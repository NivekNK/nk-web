import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export interface ILink {
    id: number;
    link: string;
}

export const columns: ColumnDef<ILink>[] = [
    {
        accessorKey: "link",
        header: "Links",
        cell: ({row}) => {
            const link = row.original;
            return (<a href={link.link} className="transition duration-100 hover:text-primary">{link.link}</a>);
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const link = row.original;

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
                            onClick={() =>
                                navigator.clipboard.writeText(link.link)
                            }
                        >
                            Copy link
                        </DropdownMenuItem>
                        <DropdownMenuItem>Report</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => {
                                console.log(`delete ${link.link}`);
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
