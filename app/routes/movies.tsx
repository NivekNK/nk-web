import { Link } from "@remix-run/react";
import { CardDescription, CardTitle } from "~/components/ui/card";

interface IContent {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
}

const content: IContent[] = [
    {
        id: 0,
        title: "Movie 0",
        overview:
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        release_date: "2018-12-01",
        vote_average: 6.5,
        vote_count: 100,
    },
    {
        id: 1,
        title: "Movie 1",
        overview:
            "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
        backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        release_date: "2018-12-01",
        vote_average: 8.5,
        vote_count: 100,
    },
    {
        id: 3,
        title: "Movie 3",
        overview: "This is movie 3",
        backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
        poster_path: "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
        release_date: "2018-12-01",
        vote_average: 5,
        vote_count: 100,
    },
    {
        id: 4,
        title: "Movie 4",
        overview: "This is movie 4",
        backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        release_date: "2018-12-01",
        vote_average: 6.7,
        vote_count: 100,
    },
    {
        id: 5,
        title: "Movie 5",
        overview: "This is movie 5",
        backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        release_date: "2018-12-01",
        vote_average: 9.1,
        vote_count: 100,
    },
];

export default function Movies() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 mb-8">
            {content.map((value) => (
                <div key={value.id} className="flex flex-col overflow-hidden rounded-lg border bg-white">
                    <Link
                        prefetch="intent"
                        className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
                        to={`/movie/${value.id}/links`}
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
                                to={`/movie/${value.id}/links`}
                            >
                                {value.title}{" "}({value.release_date.slice(0, 4)})
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
