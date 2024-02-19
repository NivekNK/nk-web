import { Link } from "@remix-run/react";
import useMediaQuery from "~/lib/hooks/useMediaQuery";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "~/components/ui/navigation-menu";
import { cva } from "class-variance-authority";
import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { SearchBar } from "~/components/search-bar";
import { Button } from "~/components/ui/button";
import { SignInButton, SignUpButton, useAuth } from "@clerk/remix";

const navigationMenuTriggerStyle = cva(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent text-gray-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

interface INavbarRoute {
    name: string;
    path: string;
}

interface INavbarProps {
    routes: INavbarRoute[];
}

function DesktopNavbar(props: INavbarProps) {
    const { isLoaded, userId } = useAuth();

    return (
        <div className="flex w-full justify-between items-center">
            <div className="flex space-x-4 items-center">
                <Link
                    to="/"
                    prefetch="intent"
                    style={{
                        fontSize: "1.5rem",
                    }}
                >
                    Binge
                    <span className="text-primary uppercase tracking-tighter font-bold">
                        Watch
                    </span>
                </Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        {props.routes.map((route, index) => (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    asChild
                                >
                                    <Link to={route.path} prefetch="intent">
                                        {route.name}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <SearchBar />
            <div className="md:space-x-2 flex items-center justify-center ml-2">
                {!isLoaded || !userId && (
                    <>
                        <SignInButton>
                            <Button>
                                Log In
                            </Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button variant="outline">
                                Sign In
                            </Button>
                        </SignUpButton>
                    </>
                ) || (
                    <>
                        <Button variant="outline" asChild>
                            <Link to={"/profile/invitations"}>
                                Profile
                            </Link>
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}

interface IMobileButtonProps {
    toggled: boolean;
    setToggled: () => void;
}

function MobileButton(props: IMobileButtonProps) {
    return (
        <>
            <Link
                to="/"
                prefetch="intent"
                className="flex space-x-4"
                style={{
                    fontSize: "1.5rem",
                }}
            >
                Binge
                <span className="text-primary uppercase tracking-tighter font-bold">
                    Watch
                </span>
            </Link>
            <button className="space-y-1" onClick={props.setToggled}>
                <Motion.span
                    animate={{
                        rotateZ: props.toggled ? 45 : 0,
                        y: props.toggled ? 8 : 0,
                        height: props.toggled ? 4 : 6,
                    }}
                    className="block h-1.5 w-8 bg-primary"
                />
                <Motion.span
                    animate={{
                        width: props.toggled ? 0 : 24,
                    }}
                    className="block h-1 w-6 bg-primary"
                />
                <Motion.span
                    animate={{
                        rotateZ: props.toggled ? -45 : 0,
                        y: props.toggled ? -8 : 0,
                        height: props.toggled ? 4 : 2,
                        width: props.toggled ? 32 : 16,
                    }}
                    className="block h-0.5 w-4 bg-primary"
                />
            </button>
        </>
    );
}

function MobileNavbar(props: INavbarProps) {
    return (
        <div className="z-40 w-full fixed top-0 left-0 h-screen flex justify-center">
            <Motion.div
                variants={{
                    visible: {
                        opacity: 1,
                        transition: {
                            when: "beforeChildren",
                            staggerChildren: 0.1,
                        },
                    },
                    hidden: {
                        opacity: 0,
                    },
                }}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center gap-24 text-lg"
            >
                <Motion.div
                    variants={{
                        visible: {
                            opacity: 1,
                            x: 0,
                        },
                        hidden: {
                            opacity: 0,
                            x: -25,
                        },
                    }}
                >
                    <SearchBar />
                </Motion.div>
                {props.routes.map((route, index) => (
                    <Motion.button
                        key={index}
                        variants={{
                            visible: {
                                opacity: 1,
                                x: 0,
                            },
                            hidden: {
                                opacity: 0,
                                x: -25,
                            },
                        }}
                    >
                        <Link to={route.path} prefetch="intent">
                            {route.name}
                        </Link>
                    </Motion.button>
                ))}
                <Motion.div
                    variants={{
                        visible: {
                            opacity: 1,
                            x: 0,
                        },
                        hidden: {
                            opacity: 0,
                            x: -25,
                        },
                    }}
                >
                    <SignInButton>
                        <Button>
                            Log In
                        </Button>
                    </SignInButton>
                </Motion.div>
                <Motion.div
                    variants={{
                        visible: {
                            opacity: 1,
                            x: 0,
                        },
                        hidden: {
                            opacity: 0,
                            x: -25,
                        },
                    }}
                >
                    <SignUpButton>
                        <Button variant="outline">
                            Sign In
                        </Button>
                    </SignUpButton>
                </Motion.div>
            </Motion.div>
        </div>
    );
}

export function Navbar(props: INavbarProps) {
    const [toggled, setToggle] = useState(false);
    const screenMatch = useMediaQuery("(min-width: 720px)");

    return (
        <>
            <div className="z-50 pt-5 bg-transparent w-full fixed top-0 left-0 px-5 pb-5">
                <div className="space-y-5 max-w-7xl mx-auto sm:mx-8 md:mx-16 lg:mx-32">
                    <div className="flex justify-between items-center">
                        {screenMatch && <DesktopNavbar routes={props.routes} />}
                        {!screenMatch && (
                            <MobileButton
                                toggled={toggled}
                                setToggled={() => setToggle(!toggled)}
                            />
                        )}
                    </div>
                </div>
            </div>
            {!screenMatch && toggled && <MobileNavbar routes={props.routes} />}
        </>
    );
}

