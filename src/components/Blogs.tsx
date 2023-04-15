import getNotionDatabase from "@/lib/getNotionDatabase";
import ListItem from "./ListItem";
import BlogItem from "./BlogItem";

type Props = {
  notionPageinfo: NotionPageInfo[];
};

export default function Blogs({ notionPageinfo }: Props) {
  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">
        {notionPageinfo.map((pageInfo) => (
          <BlogItem key={pageInfo.id} pageInfo={pageInfo} />
        ))}
        {/* {prop.prop.map((data: any) => (
          <pre key={data.id}>{JSON.stringify(data, undefined, 2)}</pre>
        ))} */}
      </ul>
    </section>
  );
}
