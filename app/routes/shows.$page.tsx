import { LoaderFunction, LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { CardDescription, CardTitle } from "~/components/ui/card";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "~/components/ui/pagination";

interface IContent {
    first_air_date: string;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
}

interface ILoaderData {
    page: number;
    results: IContent[];
    total_pages: number;
    total_results: number;
}

export const loader: LoaderFunction = async (args: LoaderFunctionArgs) => {
    // TODO: Check for page not bigger that maxPages or less than 1.
    const page: number = Number(args.params.page);
    const example: IContent[] = [
        {
            first_air_date: "2019-12-01",
            id: 0,
            name: "Doctor Who",
            overview: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
            poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        },
        {
            first_air_date: "2019-12-01",
            id: 0,
            name: "Doctor Who",
            overview: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
            poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        },
        {
            first_air_date: "2019-12-01",
            id: 0,
            name: "Doctor Who",
            overview: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
            poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        },
        {
            first_air_date: "2019-12-01",
            id: 0,
            name: "Doctor Who",
            overview: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
            poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        },
        {
            first_air_date: "2019-12-01",
            id: 0,
            name: "Doctor Who",
            overview: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
            poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        },
    ];

    const data: ILoaderData = {
        page: page,
        results: example,
        total_pages: 50,
        total_results: example.length,
    };

    return json(data);
}

interface NumberedPaginationLinkProps {
    pageIndex: number;
    pageCount: number;
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
            to={`/shows/${pageIndex}`}
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
            to={`/shows/${pageIndex}`}
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
            to={`/shows/${pageIndex}`}
            isActive={isActive}
        >
            {pageIndex}
        </PaginationLink>
    );
}

export default function Shows() {
    const data = useLoaderData() as ILoaderData;

    return (
        <div className="w-full">
            <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 mb-8">
                {data.results.map((value) => (
                    <div key={value.id} className="flex flex-col overflow-hidden rounded-lg border bg-white">
                        <Link
                            prefetch="intent"
                            className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                            to={`/show/${value.id}/links`}
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                        </Link>
                        <div className="flex flex-1 flex-col p-4 sm:p-6 bg-card">
                            <CardTitle className="mb-2 text-lg font-semibold">
                                <Link
                                    prefetch="intent"
                                    className="transition duration-100 hover:text-primary"
                                    to={`/show/${value.id}/links`}
                                >
                                    {value.name}{" "}({value.first_air_date.slice(0, 4)})
                                </Link>
                            </CardTitle>
                            <CardDescription className="line-clamp-3">
                                {value.overview}
                            </CardDescription>
                        </div>
                    </div>
                ))}
            </div>
            {data.total_pages > 1 &&
                <div className="flex items-center justify-end space-x-2 py-4">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    to={`/shows/${data.page - 1 < 1 ? 1 : data.page - 1}`}
                                    isActive={data.page > 1}
                                />
                            </PaginationItem>
                            {data.total_pages > 2 && (
                                <>
                                    {data.total_pages > 3 &&
                                        data.page > 2 && (
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        )}
                                    <PaginationItem>
                                        <PaginationLink1
                                            pageIndex={data.page}
                                            pageCount={data.total_pages}
                                        />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink2
                                            pageIndex={data.page}
                                            pageCount={data.total_pages}
                                        />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink3
                                            pageIndex={data.page}
                                            pageCount={data.total_pages}
                                        />
                                    </PaginationItem>
                                    {data.total_pages > 3 &&
                                        data.page < data.total_pages && (
                                            <PaginationItem>
                                                <PaginationEllipsis />
                                            </PaginationItem>
                                        )}
                                </>
                            )}
                            <PaginationItem>
                                <PaginationNext
                                    to={`/shows/${data.page + 1 <= data.total_pages ? data.page + 1 : data.total_pages}`}
                                    isActive={data.page <= data.total_pages}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            }

        </div>
    );
}
