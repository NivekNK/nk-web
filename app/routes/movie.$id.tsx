import { Outlet } from "@remix-run/react";

interface IGenre {
    id: number;
    name: string;
}

interface IContent {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    genres: IGenre[];
    original_language: string;
}

const data: IContent = {
    id: 1,
    title: "Movie 1",
    overview:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    release_date: "2018-12-01",
    vote_average: 8.5,
    vote_count: 100,
    genres: [ {id: 0, name: "comedy"} , { id: 1, name: "drama"}, { id: 2, name: "mystery"}],
    original_language: "english",
};

export default function MovieId() {
    return (
        <div className="min-h-screen p-10">
            <img
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                className="h-[40vh] object-cover w-full rounded-lg"
            />
            <h1 className="text-4xl font-bold text-center pt-5">{data.title}</h1>
            <div className="grid gap-10 md:grid-cols-2 sm:grid-cols-1 mt-10">
                <div className="w-full font-medium space-y-3">
                    <div className="flex w-full space-x-2 items-baseline">
                        <h1 className="text-xl">Release Date:</h1>
                        <p>{data.release_date}</p>
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
