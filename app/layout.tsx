import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // or any other valid weight value
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "M Riswan Portfolio",
  description: "Front End Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
