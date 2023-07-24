import Navbar from "@/components/reddit/Navbar";
import Providers from "@/components/reddit/Providers";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/reddit/ui/Toaster";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reddit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

export default function RedditLayout({
  children,
}: // authModal,
{
  children: React.ReactNode;
  // authModal: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.className} text-slate-900 light min-h-screen pt-12 bg-slate-50 antialiased`}
    >
      <Providers>
        <Navbar />
        {/* {authModal} */}

        <div className="container max-w-7xl mx-auto h-full pt-12">
          {children}
        </div>
      </Providers>
      <Toaster />
    </div>
  );
}
