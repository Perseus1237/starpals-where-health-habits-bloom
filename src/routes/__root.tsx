import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportError } from "../lib/error-reporting";
import { StarPalsProvider } from "../lib/starpals/store";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-card rounded-3xl p-8">
        <div className="text-6xl mb-3">✨</div>
        <h1 className="font-display text-3xl">Lost among the stars</h1>
        <p className="mt-2 text-muted-foreground">This page is somewhere else in the sky.</p>
        <Link to="/" className="btn-magical inline-block mt-6">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-card rounded-3xl p-8">
        <div className="text-5xl mb-3">🌙</div>
        <h1 className="font-display text-2xl">A little cloud passed by</h1>
        <p className="mt-2 text-sm text-muted-foreground">Let's try again together.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="btn-magical mt-6"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "StarPals — Care for a pet. Care for yourself." },
      { name: "description", content: "A magical world where kids with chronic health needs care for tiny creatures and grow together. Tiny quests. Big hearts. Brave kids." },
      { name: "author", content: "StarPals" },
      { property: "og:title", content: "StarPals — Care for a pet. Care for yourself." },
      { property: "og:description", content: "A magical world where kids with chronic health needs build daily care habits through pets, quests, and safe peer support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "StarPals" },
      { name: "twitter:description", content: "Care for a pet. Care for yourself." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Nunito:wght@400;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <StarPalsProvider>
        <div className="starfield" aria-hidden />
        <Outlet />
      </StarPalsProvider>
    </QueryClientProvider>
  );
}
