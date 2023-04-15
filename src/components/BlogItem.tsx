import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import Image from "next/image";

type Props = {
  pageInfo: NotionPageInfo;
};

export default function BlogItem({ pageInfo }: Props) {
  const { id, cover, title, tags, date } = pageInfo;
  // const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="transition duration-300 hover:scale-105"
        href={`/notionPages/${id}`}
      >
        <div className="flex flex-col rounded-xl shadow-lg overflowh">
          <div className="flex-shrink-0">
            <Image
              className="h-64 w-full object-fill"
              src={cover}
              alt="cover"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-1 bg-gray-50 pt-2 pb-6 flex flex-col justify-between">
            <div className="flex-1">
              <span className="block mt-2">
                <h4 className="text-xsm font-medium text-gray-600">{date}</h4>
              </span>
            </div>
          </div>
        </div>
      </Link>
      <br />
      <p className="text-sm mt-1">{title}</p>
    </li>
  );
}
