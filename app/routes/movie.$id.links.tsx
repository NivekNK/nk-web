import { Links } from "~/components/links";
import { ILink } from "~/components/table/link-columns";

const data: ILink[] = [
    {
        id: 0,
        link: "https://link0.com",
        userId: "myuserId",
        owned: false,
        contentId: 0,
        contentName: "Titanic",
        contentDate: "2018-12-01",
        backdropUrl: "",
        inWatchList: false,
    },
];

export default function MovieIdLinks() {
    return <Links data={data} />
}

