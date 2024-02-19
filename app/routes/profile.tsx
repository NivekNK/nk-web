import { SignOutButton, useUser } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { DataTable } from "~/components/data-table";
import { Button } from "~/components/ui/button";
import { ISession, columns } from "~/components/table/session-columns";

export interface ILoaderData {
    sessions: ISession[];
}

export const loader: LoaderFunction = async (args: LoaderFunctionArgs) => {
    const { userId } = await getAuth(args);
    if (!userId) {
        return redirect("/log-in");
    }

    const sessions: ISession[] = [
        {
            id: 0,
            name: "Name 0",
            users: [
                "paquito",
                "user0",
                "NivekNK"
            ],
            userId: "0",
            owned: true,
        },
        {
            id: 2,
            name: "Name 2",
            users: [
                "paquito",
                "user0",
                "NivekNK"
            ],
            userId: "",
            owned: false,
        },
        {
            id: 3,
            name: "Name 3",
            users: [
                "paquito",
                "user0",
                "NivekNK"
            ],
            userId: "",
            owned: false,
        },
    ];

    const data: ILoaderData = {
        sessions: sessions,
    }

    return json(data);
}

export default function Profile() {
    const { user } = useUser();
    const data = useLoaderData() as ILoaderData;

    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <div
                    style={{
                        fontSize: "2.3rem",
                    }}
                    className="font-outline-0-5 flex space-x-2"
                >
                    <h2 className="tracking-tighter">
                        Welcome
                    </h2>
                    <h2 className="text-primary uppercase tracking-tighter font-bold">
                        {user?.username || "User"}
                    </h2>
                </div>
                <SignOutButton>
                    <Button asChild>
                        <Link to={"/"} prefetch="none">
                            Sign Out
                        </Link>
                    </Button>
                </SignOutButton>
            </div>
            <div className="w-full flex">
                <div className="md:w-2/3 sm:w-full md:mr-5 sm:mb-5">
                    <DataTable
                        columns={columns}
                        data={data.sessions}
                        pageSize={5}
                        filtered={{
                            column: "name",
                            placeholder: "Search name...",
                        }}
                    />
                </div>
                <div className="md:w-1/3 sm:w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
