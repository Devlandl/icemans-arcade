import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iceman's Arcade - Browser Games by Iceman",
  description:
    "Play Iceman's collection of browser games. Dungeon crawlers, trivia, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-arcade-border py-6 text-center text-arcade-muted text-xs">
            <p>
              Powered by{" "}
              <a
                href="https://tvrapp.app"
                className="text-arcade-cyan hover:underline"
              >
                TVR App Store
              </a>
            </p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
