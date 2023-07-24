import Footer from "@/components/food/Footer";
import Navbar from "@/components/food/Navbar";
import Notification from "@/components/food/Notification";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function FoodLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} bg-white text-black min-h-screen`}>
      <Notification />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
