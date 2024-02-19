import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { DataTable } from "~/components/data-table";
import { getColumns, IContent, WatchState } from "~/components/table/content-columns";

export const loader: LoaderFunction = async (args: LoaderFunctionArgs) => {
    const { userId } = await getAuth(args);
    if (!userId) {
        return redirect("/log-in");
    }

    const example: IContent[] = [
        {
            id: 0,
            name: "Move 0",
            year: "2000",
            watchedDate: new Date(),
            type: "movie",
            state: "watch",
        },
        {
            id: 1,
            name: "Move 1",
            year: "2000",
            watchedDate: new Date(),
            type: "movie",
            state: "watch",
        },
        {
            id: 2,
            name: "Move 2",
            year: "2000",
            watchedDate: new Date(),
            type: "movie",
            state: "watch",
        }
    ];

    return json(example);
};

export default function SessionId() {
    const data = useLoaderData();
    const [content, setContent] = useState(data as IContent[]);

    const handleWatchStateChange = (id: number, state: WatchState) => {
        setContent(prevContent =>
            prevContent.map(content =>
                content.id === id ? { ...content, state: state } : content
            )
        );
    };

    return <DataTable
        columns={getColumns(handleWatchStateChange)}
        data={content}
        pageSize={10}
        filtered={{
            column: "name",
            placeholder: "Search name...",
        }}
    />;
}

