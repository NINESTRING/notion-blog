// "use client";

import getNotionPage from "@/lib/getNotionPage";
import { GetStaticPathsContext } from "next";
import Link from "next/link";
import { NotionRenderer } from "react-notion";

export default async function Page({ params }: { params: { pageId: string } }) {
  // const router = useRouter();

  const data = await getNotionPage(params.pageId);

  return (
    <div>
      <pre>{JSON.stringify(data, undefined, 2)}</pre>
      <NotionRenderer blockMap={data} />
      <Link href="/">← Back to home</Link>
    </div>
  );
}
