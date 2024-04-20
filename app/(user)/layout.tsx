import type { Metadata } from "next";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Error from "./error";
import "@/app/global.css"
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Loading from "./loading";
import {localCustomFont} from "./fonts";

export const metadata: Metadata = {
	title: "Homework008 Web with NextJs SEO",
	description: "Class practice 008",
	openGraph: {
		title: "Homework008 Web with NextJs SEO",
		description: "Class practice 008",
    images: "https://i.pinimg.com/564x/5f/64/e3/5f64e3fa7b6ce8daf9d704db504f7bb3.jpg"
	}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${localCustomFont.variable}`}
>

      {/* here is the place that we render navbar component in every page in the user layout */}
      <header>
        <NavbarComponent/>
      </header>

      {/* here is the place that each page of child will be render (children) */}
      <ErrorBoundary errorComponent={Error}>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</ErrorBoundary>
      </body>
    </html>
  );
}
