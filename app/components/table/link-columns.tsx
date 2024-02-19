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

export interface ILink {
    id: number;
    link: string;
    userId: string | null;
    owned: boolean;
    contentId: number;
    contentName: string;
    contentDate: string;
    backdropUrl: string;
    inWatchList: boolean;
}

export const columns: ColumnDef<ILink>[] = [
    {
        accessorKey: "link",
        header: ({ column }) => {
            return (
                <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Links
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
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
                        {link.userId !== null && !link.inWatchList &&
                            <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => {
                                        console.log(`Add ${link.contentName} to user ${link.userId} Watch List`);
                                    }}
                                >
                                    Add to Watch List
                                </DropdownMenuItem>
                            </>
                        }
                        {link.userId !== null &&
                            <>
                                <DropdownMenuSeparator />
                                {link.inWatchList &&
                                    <DropdownMenuItem
                                        onClick={() => {
                                            console.log(`delete ${link.link} for user ${link.userId}`);
                                        }}
                                        className="text-red-700"
                                    >
                                        Remove from Watch List
                                    </DropdownMenuItem>
                                }
                                {link.owned &&
                                    <DropdownMenuItem
                                        onClick={() => {
                                            console.log(`delete ${link.link} for user ${link.userId}`);
                                        }}
                                        className="text-red-600"
                                    >
                                        Delete
                                    </DropdownMenuItem>
                                }
                            </>
                        }
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
