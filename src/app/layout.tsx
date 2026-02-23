import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

c<title>Corevia Home V1 - Webflow HTML website template</title>
    <meta
        content="Corevia is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes."
        name="description">
    <meta content="Corevia Home V1 - Webflow HTML website template" property="og:title">
    <meta
        content="Corevia is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes."
        property="og:description">
    <meta content="Corevia Home V1 - Webflow HTML website template" property="twitter:title">
    <meta
        content="Corevia is a modern Webflow template. Customize it to match your brand and create a unique, professional experience in minutes."
        property="twitter:description">
    <meta property="og:type" content="website">
    <meta content="summary_large_image" name="twitter:card">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="Webflow" name="generator">
    <link
        href="https://cdn.prod.website-files.com/687a676ef5e70f7d641d3080/css/corevia-temlis.webflow.shared.808fac99b.css"
        rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com" rel="preconnect">
    <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CInter:500%7CBricolage+Grotesque:regular"
        media="all">
    <script
        type="text/javascript">WebFont.load({ google: { families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic", "Inter:500", "Bricolage Grotesque:regular"] } });</script>
    <script
        type="text/javascript">!function (o, c) { var n = c.documentElement, t = " w-mod-"; n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch") }(window, document);</script>
    <link href="https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a4535765980c07e93225b_Group%202942.png"
        rel="shortcut icon" type="image/x-icon">
    <link href="https://cdn.prod.website-files.com/665687d713145087b3ce1703/665a45115482c06bb38d0091_Group%202940.png"
        rel="apple-touch-icon">

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body>
    <div class="page-wrapper">
      <nav/>
      <main class="main-wrapper">
        {children}
      </main>
       <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=687a676ef5e70f7d641d3080"
        type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"></script>
    <script src="https://cdn.prod.website-files.com/687a676ef5e70f7d641d3080/js/webflow.schunk.36b8fb49256177c8.js"
        type="text/javascript"></script>
    <script src="https://cdn.prod.website-files.com/687a676ef5e70f7d641d3080/js/webflow.d39fac05.2e9e16e1de0ebdcd.js"
        type="text/javascript"></script>
      </body>
    </html>
  );
}
