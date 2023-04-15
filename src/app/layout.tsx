import "../styles/globals.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { ABeeZee } from "@next/font/google";
import Navbar from "@/components/Navbar";
import MyProfilePic from "@/components/MyProfilePic";
import type { Metadata } from "next";

const abeezee = ABeeZee({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-abeezee",
});

export const metadata: Metadata = {
  title: "Ninestring's Blog",
  description: "Created by ninestring",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${abeezee.className} dark:bg-slate-800`}>
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
