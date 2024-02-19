import { Link } from "@remix-run/react";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";

export type WatchState = "watch" | "watched" | "watching";
export type ContentType = "show" | "movie";
export interface IContent {
    id: number;
    name: string;
    year: string;
    watchedDate: Date | null;
    type: ContentType;
    state: WatchState;
}

export function getColumns(onWatchStateChanged: (id: number, newState: WatchState) => void): ColumnDef<IContent>[] {
    return [
        {
            accessorKey: "name",
            header: ({ column }) => {
                return (
                    <Button
                      variant="ghost"
                      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Name
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({ row }) => {
                const content = row.original;
                return (
                    <Link to={`/${content.type}/${content.id}/links`} className="transition duration-100 hover:text-primary">
                        {`${content.name} (${content.year})`}
                    </Link>
                );
            },
        },
        {
            accessorKey: "watchedDate",
            header: "Watched",
            cell: ({ row }) => {
                return row.original.watchedDate !== null ?
                    row.original.watchedDate.toLocaleString() : "Not watched";
            },
        },
        {
            accessorKey: "type",
            header: "Type",
        },
        {
            accessorKey: "state",
            header: "State",
            cell: ({ row }) => {
                const content = row.original;
                return (
                    <Select defaultValue={content.state} onValueChange={(value => {
                        onWatchStateChanged(content.id, value as WatchState);
                    })}>
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="watch">Watch</SelectItem>
                                <SelectItem value="watched">Watched</SelectItem>
                                <SelectItem value="watching">Watching</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                );
            },
        },
    ];
}

