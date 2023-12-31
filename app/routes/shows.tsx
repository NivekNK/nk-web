import { Link } from "@remix-run/react";
import { CardDescription, CardTitle } from "~/components/ui/card";

interface IShow {
    first_air_date: string;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
}

const content: IShow[] = [
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

export default function Shows() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 mb-8">
            {content.map((value) => (
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
    );
}
