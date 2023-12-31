import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "~/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselApi,
} from "~/components/ui/carousel";
// import { IContent } from "~/lib/types/third-party";

export const meta: MetaFunction = () => {
    return [
        { title: "Binge Watch" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

// TODO: Remove this and replace for origical IContent
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

export default function Index() {
    const [selectedContent, setSelectedContent] = useState(0);

    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const plugin = useRef(
        Autoplay({
            delay: 2000,
            stopOnInteraction: true,
        }),
    );

    useEffect(() => {
        if (carouselApi) {
            carouselApi.on("select", () => {
                setSelectedContent(carouselApi.selectedScrollSnap());
            });
        }
    }, [carouselApi]);

    return (
        <>
            <img
                src={`https://image.tmdb.org/t/p/original${content[selectedContent].backdrop_path}`}
                className="fixed top-0 left-0 h-screen w-full object-cover object-center z-[-1]"
            />
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <Carousel
                    setApi={setCarouselApi}
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {content.map((value) => (
                            <CarouselItem key={value.id}>
                                <Link
                                    to={`/movie/${value.id}/links`}
                                >
                                    <Card className="bg-transparent border-transparent">
                                        <CardContent className="grid lg:grid-cols-2 md:grd-cols-2 sm:grid-cols-1 aspect-square lg:items-end md:items-end sm:items-center">
                                            <div className="flex flex-col-reverse h-full items-end lg:mr-3 md:mr-3">
                                                <img
                                                    src={`https://image.tmdb.org/t/p/original${value.poster_path}`}
                                                />
                                                <div
                                                    style={{
                                                        fontSize: "2.3rem",
                                                    }}
                                                    className="w-full h-full pt-20 font-outline-0-5"
                                                >
                                                    <h2 className="tracking-tighter">
                                                        Trending this
                                                    </h2>
                                                    <h2 className="text-primary uppercase tracking-tighter font-bold">
                                                        week
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto bg-black bg-opacity-50 w-full sm:mt-3">
                                                <div className="flex-wrap mx-3 my-6 space-y-3">
                                                    <CardTitle
                                                        className="transition duration-100 hover:text-primary"
                                                    >{value.title}{" "}({value.release_date.slice(0, 4)})</CardTitle>
                                                    <CardDescription className="text-gray-300">
                                                        {value.overview}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="w-full h-fit">
                    <div
                        style={{
                            fontSize: "2.3rem",
                        }}
                        className="flex w-full h-full pt-20 font-outline-0-5 space-x-2 justify-end"
                    >
                        <h2 className="tracking-tighter">Last</h2>
                        <h2 className="text-primary uppercase tracking-tighter font-bold">
                            watched
                        </h2>
                    </div>
                    <div className="flex flex-col-reverse w-full h-full mb-3">
                        {content.slice(0, 3).map((value, index) => (
                            <Card
                                key={value.id + index}
                                className="bg-black bg-opacity-50 mt-3"
                            >
                                <CardContent className="p-3">
                                    <div className="flex w-full">
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                                            style={{
                                                width: "13.5%",
                                                height: "13.5%",
                                            }}
                                        />
                                        <div className="flex-wrap w-full space-y-3 ml-6 overflow-hidden">
                                            <Link to={`/movie/${value.id}/links`}>
                                                <CardTitle
                                                    className="transition duration-100 hover:text-primary"
                                                >{value.title}{" "}({value.release_date.slice(0, 4)})</CardTitle>
                                            </Link>
                                            <div className="h-full w-full">
                                                <CardDescription className="text-gray-300 line-clamp-4">
                                                    {value.overview}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
