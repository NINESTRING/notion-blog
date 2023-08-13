import { Inter } from "next/font/google";
// import { NotionRenderer } from "react-notion-x";
import Blogs from "@/components/blog/Blogs";
import MyProfilePic from "@/components/blog/MyProfilePic";
import Posts from "@/components/blog/Posts";
import getNotionDatabase from "@/lib/blog/getNotionDatabase";

export const dynamic = "force-dynamic"; // dynamic rendering (fetch method 사용 안할때)

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
    /* // .container {
  //   max-width: 1366px;
  //   min-height: 100vh;
  //   margin: 0 auto;
  //   padding: 0 60px;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  // } */

    <main className="px-6 mx-auto">
      <MyProfilePic />

      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Koo</span>.
        </span>
      </p>
      {/* <Posts /> */}
      <Blogs notionPageinfo={notionPageInfo} />
    </main>
  );
}
