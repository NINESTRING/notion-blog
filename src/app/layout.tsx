import Navbar from "@/components/blog/Navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { headers } from "next/dist/client/components/headers";
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
  const headersList = headers();
  const referer = headersList.get("referer");

  console.log("PATHNAME", referer, referer?.split("/")?.[3]);

  return referer === null ||
    ["food", "reddit"].includes(referer?.split("/")?.[3] ?? "") ? (
    <html lang="en">
      <body className={`${abeezee.className}`}>{children}</body>
    </html>
  ) : (
    <html lang="en">
      <body className={`${abeezee.className} dark:bg-slate-800`}>
        <Navbar />
        <div className="max-w-7xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
