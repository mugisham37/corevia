import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "../components/navbar";

export const metadata: Metadata = {
  title: "Corevia - Financial Management & Consulting Platform",
  description: "Empower your business with Corevia's scalable financial tools. Expert consulting services for budgeting, investment management, and digital transformation.",
  openGraph: {
    title: "Corevia - Financial Management & Consulting Platform",
    description: "Empower your business with Corevia's scalable financial tools. Expert consulting services for budgeting, investment management, and digital transformation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corevia - Financial Management & Consulting Platform",
    description: "Empower your business with Corevia's scalable financial tools. Expert consulting services for budgeting, investment management, and digital transformation.",
  },
  icons: {
    icon: "https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a4535765980c07e93225b_Group%202942.png",
    apple: "https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a45115482c06bb38d0091_Group%202940.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.prod.website-files.com/687a676ef5e70f7d641d3080/css/corevia-temlis.webflow.shared.808fac99b.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <Script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" strategy="beforeInteractive" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CInter:500%7CBricolage+Grotesque:regular"
          media="all"
        />
        <Script id="webfont-loader" strategy="beforeInteractive">
          {`WebFont.load({ google: { families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic", "Inter:500", "Bricolage Grotesque:regular"] } });`}
        </Script>
        <Script id="webflow-modernizr" strategy="beforeInteractive">
          {`!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);`}
        </Script>
      </head>
      <body>
        <div className="page-wrapper">
          <Navbar />
          <main className="main-wrapper">
            {children}
          </main>
        </div>
        <Script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=687a676ef5e70f7d641d3080"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.prod.website-files.com/687a676ef5e70f7d641d3080/js/webflow.schunk.36b8fb49256177c8.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.prod.website-files.com/687a676ef5e70f7d641d3080/js/webflow.d39fac05.2e9e16e1de0ebdcd.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
