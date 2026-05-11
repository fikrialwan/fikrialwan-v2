import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&display=swap",
  },
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "icon", type: "image/png", href: "/favicon-32x32.png", sizes: "32x32" },
  { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
  { rel: "shortcut icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  { rel: "manifest", href: "/site.webmanifest" }
];

export const meta: Route.MetaFunction = () => [
  { title: "Fikri Alwan Ramadhan — Frontend Engineer" },
  { name: "description", content: "Frontend Engineer specializing in Flutter, React, and Next.js. Based in Jakarta, Indonesia." },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "apple-mobile-web-app-title", content: "Fikri Alwan Ramadhan" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:site", content: "@fikrialwan" },
  { name: "twitter:title", content: "Fikri Alwan Ramadhan — Frontend Engineer" },
  { name: "twitter:description", content: "Frontend Engineer specializing in Flutter, React, and Next.js. Based in Jakarta, Indonesia." },
  { name: "twitter:image", content: "/favicon-96x96.png" },
  { name: "og:title", content: "Fikri Alwan Ramadhan — Frontend Engineer" },
  { name: "og:description", content: "Frontend Engineer specializing in Flutter, React, and Next.js. Based in Jakarta, Indonesia." },
  { name: "og:image", content: "/favicon-96x96.png" },
  { name: "og:url", content: "https://fikrialwan.com" },
  { name: "og:type", content: "website" },
  { charSet: "utf-8" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
