import { Inter } from "@next/font/google";
// import { NotionRenderer } from "react-notion-x";
import Posts from "@/components/Posts";
import getNotionDatabase from "@/lib/getNotionDatabase";
import Blogs from "@/components/Blogs";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const notionPageInfo = await getNotionDatabase();

  return (
    // <main className="bg-white text-lg text-black">{JSON.stringify(data)}</main>
    // <div style={{ maxWidth: 768 }}>
    //   <Link href="/page">dddd</Link>
    //   <pre>
    //     <code>{JSON.stringify(data, null, 2)}</code>
    //   </pre>
    //   {/* <NotionRenderer blockMap={data} /> */}
    // </div>
    <main className="px-6 mx-auto max-w-5xl min-h-screen">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Koo</span>.
        </span>
      </p>
      <Posts />
      <Blogs notionPageinfo={notionPageInfo} />
    </main>
  );
}
