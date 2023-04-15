import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
  post: NotionPageInfo;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="underline transition duration-300 hover:text-black/70 dark:hover:scale-105"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
}
