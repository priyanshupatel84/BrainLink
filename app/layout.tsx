import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "../components/providers/theme-provider";
import { cn } from "../lib/utils";
import { ModalProvider } from "../components/providers/modal-provider";
import { SocketProvider } from "../components/providers/socket-provider";
import { QueryProvider } from "@/components/providers/query-provider";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrainLink",
  description: "BrainLink - Suggests real-time, smart connections.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="icon"
            type="image/svg+xml"
            href="/brainLink-logo.svg"
            sizes="small"
          />
          <link rel="icon" type="image/png" href="/brainLink-logo-clerk.png" sizes="32x32" />
          <link rel="icon" href="/brainLink-logo-clerk-ico.ico" />
        </head>
        <body
          className={cn(font.className, "bg-white dark:bg-[#313338]")}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            storageKey="discord-clone-theme"
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>{children}</QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
