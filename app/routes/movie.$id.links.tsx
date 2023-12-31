import { ILink, columns } from "~/components/table/link-columns";
import { DataTable } from "~/components/data-table";

const data: ILink[] = [
    {
        id: 0,
        link: "https://link0.com",
    },
    {
        id: 1,
        link: "https://link1.com",
    },
    {
        id: 2,
        link: "https://link2.com",
    },
    {
        id: 3,
        link: "https://link3.com",
    },
    {
        id: 4,
        link: "https://link4.com",
    },
    {
        id: 5,
        link: "https://link5.com",
    },
    {
        id: 6,
        link: "https://link6.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 0,
        link: "https://link0.com",
    },
    {
        id: 1,
        link: "https://link1.com",
    },
    {
        id: 2,
        link: "https://link2.com",
    },
    {
        id: 3,
        link: "https://link3.com",
    },
    {
        id: 4,
        link: "https://link4.com",
    },
    {
        id: 5,
        link: "https://link5.com",
    },
    {
        id: 6,
        link: "https://link6.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
    {
        id: 7,
        link: "https://link7.com",
    },
]

export default function Links() {
    return <DataTable columns={columns} data={data} />
}
