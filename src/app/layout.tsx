import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "UIO - all people united",
    template: "%s - UIO",
  },
  description:
    "The United Individuals Organisation represents all people. Making polluters pay compensation distributed equally to all human beings.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <div className="mx-auto max-w-[1200px] px-[clamp(1.5rem,5vw,2rem)]">
          <Header />
          <main className="mt-[clamp(2.5rem,8vw,4.5rem)]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
