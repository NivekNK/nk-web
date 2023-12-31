import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "~/components/pagination-no-link";
import { useState } from "react";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

interface NumberedPaginationLinkProps {
    pageIndex: number;
    pageCount: number;
    setPageIndex: (index: number) => void;
}

function PaginationLink1(props: NumberedPaginationLinkProps) {
    const isActive = props.pageIndex > 1;
    let pageIndex: number;
    if (props.pageIndex === 1) {
        pageIndex = props.pageIndex;
    } else if (props.pageIndex === props.pageCount) {
        pageIndex = props.pageIndex - 2;
    } else {
        pageIndex = props.pageIndex - 1;
    }

    return (
        <PaginationLink
            onClick={() => props.setPageIndex(pageIndex)}
            isActive={isActive}
        >
            {pageIndex}
        </PaginationLink>
    );
}

function PaginationLink2(props: NumberedPaginationLinkProps) {
    const isActive =
        props.pageIndex === 1 || props.pageIndex === props.pageCount;

    let pageIndex: number;
    if (props.pageIndex === 1) {
        pageIndex = props.pageIndex + 1;
    } else if (props.pageIndex === props.pageCount) {
        pageIndex = props.pageIndex - 1;
    } else {
        pageIndex = props.pageIndex;
    }

    return (
        <PaginationLink
            onClick={() => props.setPageIndex(pageIndex)}
            isActive={isActive}
        >
            {pageIndex}
        </PaginationLink>
    );
}

function PaginationLink3(props: NumberedPaginationLinkProps) {
    const isActive = props.pageIndex !== props.pageCount;

    let pageIndex: number;
    if (props.pageIndex === 1) {
        pageIndex = props.pageIndex + 2;
    } else if (props.pageIndex === props.pageCount) {
        pageIndex = props.pageIndex;
    } else {
        pageIndex = props.pageIndex + 1;
    }

    return (
        <PaginationLink
            onClick={() => props.setPageIndex(pageIndex)}
            isActive={isActive}
        >
            {pageIndex}
        </PaginationLink>
    );
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [pageIndex, setPageIndex] = useState(1);
    const table = useReactTable({
        data,
        columns,
        initialState: {
            pagination: {
                pageSize: 5,
            },
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext(),
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {table.getPageCount() > 1 && (
                <div className="flex items-center justify-end space-x-2 py-4">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => {
                                        setPageIndex(pageIndex - 1);
                                        table.previousPage();
                                    }}
                                    disabled={!table.getCanPreviousPage()}
                                    isActive={!table.getCanPreviousPage()}
                                />
                            </PaginationItem>
                            {table.getPageCount() > 2 && (
                                <>
                                    {table.getPageCount() > 3 &&
                                        pageIndex > 2 && (
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        )}
                                    <PaginationItem>
                                        <PaginationLink1
                                            pageIndex={pageIndex}
                                            pageCount={table.getPageCount()}
                                            setPageIndex={(index) => {
                                                setPageIndex(index);
                                                table.setPageIndex(index - 1);
                                            }}
                                        />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink2
                                            pageIndex={pageIndex}
                                            pageCount={table.getPageCount()}
                                            setPageIndex={(index) => {
                                                setPageIndex(index);
                                                table.setPageIndex(index - 1);
                                            }}
                                        />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink3
                                            pageIndex={pageIndex}
                                            pageCount={table.getPageCount()}
                                            setPageIndex={(index) => {
                                                setPageIndex(index);
                                                table.setPageIndex(index - 1);
                                            }}
                                        />
                                    </PaginationItem>
                                    {table.getPageCount() > 3 &&
                                        pageIndex < table.getPageCount() - 1 && (
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        )}
                                </>
                            )}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => {
                                        setPageIndex(pageIndex + 1);
                                        table.nextPage();
                                    }}
                                    disabled={!table.getCanNextPage()}
                                    isActive={!table.getCanNextPage()}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
}

