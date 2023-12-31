import { cn } from "@/lib/common";
import "./globals.css";
import { Poppins, Arvo, Roboto } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Script from "next/script";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "700"],
});

const arvo = Arvo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arvo",
  weight: ["400"],
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "fallback",
  variable: "--font-roboto",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        poppins.variable,
        arvo.variable,
        roboto.variable,
        "scroll-smooth",
        // You need that both for the HTML and body tags because of Mobile Firefox weird behavior
        "w-screen overflow-x-hidden"
      )}
      suppressHydrationWarning
    >
      {/* You need that both for the HTML and body tags because of Mobile Firefox weird behavior */}
      <body className="font-normal overflow-x-hidden w-screen dark:bg-background-dark-theme">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        {process.env.NEXT_PUBLIC_PLAYWRIGHT_MODE !== "on" && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
