import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { Navbar } from "~/components/navbar";
import { ReactNode } from "react";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

interface ILayoutProps {
    children: ReactNode;
}

function Layout(props: ILayoutProps) {
    return (
        <>
            <Navbar routes={[
                {
                    name: "Movies",
                    path: "/movies",
                },
                {
                    name: "Shows",
                    path: "/shows",
                },
            ]}/>
            <main className="pt-24 sm:mx-8 md:mx-16 lg:mx-32">
                {props.children}
            </main>
        </>
    );
}

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Layout>
                    <Outlet />
                    <ScrollRestoration />
                    <Scripts />
                    <LiveReload />
                </Layout>
            </body>
        </html>
    );
}
