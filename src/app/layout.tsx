import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Navigation/Header";

export const metadata: Metadata = {
  title: "Apple tv",
  description: "Watch you favourite series",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
