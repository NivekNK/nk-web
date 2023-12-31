import { Outlet } from "@remix-run/react";

interface IGenre {
    id: number;
    name: string;
}

interface IShow {
    backdrop_path: string;
    first_air_date: string;
    last_air_date: string;
    number_of_seasons: number;
    id: number;
    name: string;
    original_language: string;
    overview: string;
    poster_path: string;
    genres: IGenre[];
}

const data: IShow = {
    first_air_date: "2019-12-01",
    last_air_date: "2020-12-01",
    number_of_seasons: 100,
    original_language: "english",
    id: 0,
    name: "Doctor Who",
    overview: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    genres: [
        {
            id: 0,
            name: "terror",
        },
        {
            id: 1,
            name: "comedy",
        },
    ]
};

export default function ShowId() {
    return (
        <div className="min-h-screen p-10">
            <img
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                className="h-[40vh] object-cover w-full rounded-lg"
            />
            <h1 className="text-4xl font-bold text-center pt-5">{data.name}</h1>
            <div className="grid gap-10 md:grid-cols-2 sm:grid-cols-1 mt-10">
                <div className="w-full font-medium space-y-3">
                    <div className="flex w-full space-x-2 items-baseline">
                        <h1 className="text-xl">First Air Date:</h1>
                        <p>{data.first_air_date}</p>
                    </div>
                    <div className="flex w-full space-x-2 items-baseline">
                        <h1 className="text-xl">Last Air Date:</h1>
                        <p>{data.last_air_date}</p>
                    </div>
                    <div className="flex w-full space-x-2 items-baseline">
                        <h1 className="text-xl">Seasons:</h1>
                        <p>{data.number_of_seasons}</p>
                    </div>
                    <div className="flex w-full space-x-2 items-baseline">
                        <h1 className="text-xl">Language:</h1>
                        <p>{data.original_language}</p>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <h1 className="text-xl">Overview:</h1>
                        <p>{data.overview}</p>
                    </div>
                    <div className="flex w-full space-x-2 items-baseline">
                        <h1 className="text-xl">{`Genre${data.genres.length > 1 ? "s:" : ":"}`}</h1>
                        <p>{data.genres.map(genre => genre.name).join(", ") + "."}</p>
                    </div>
                </div>
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
