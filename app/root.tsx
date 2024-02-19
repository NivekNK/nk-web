import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
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
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp, ClerkErrorBoundary } from "@clerk/remix";

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
                    path: "/movies/1",
                },
                {
                    name: "Shows",
                    path: "/shows/1",
                },
            ]}/>
            <main className="pt-24 sm:mx-8 md:mx-16 lg:mx-32">
                {props.children}
            </main>
        </>
    );
}

export const loader: LoaderFunction = (args) => rootAuthLoader(args);
export const ErrorBoundary = ClerkErrorBoundary();

function App() {
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

export default ClerkApp(App);
