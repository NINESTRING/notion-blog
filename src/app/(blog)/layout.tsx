import Navbar from "@/components/blog/Navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { ABeeZee } from "next/font/google";
import "prismjs/themes/prism-tomorrow.css";
import "react-notion/src/styles.css";

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
    <div className={`${abeezee.className} dark:bg-slate-800`}>
      <Navbar />
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}
