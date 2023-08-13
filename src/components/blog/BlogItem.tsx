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
    <Link
      // className="transition duration-300 hover:scale-105"
      className="grid aspect-[1/1.5]"
      href={`/notionPages/${id}`}
    >
      {/* <li className="mt-4 text-2xl dark:text-white/90"> */}
      <div className="col-[1/2] row-[1/2]">
        <Image
          className="w-full aspect-[1/1.25] object-cover"
          src={cover}
          alt="cover"
          width={500}
          height={500}
        />
      </div>
      <div className="col-[1/2] row-[1/2] bg-white self-end mx-2 mt-2 mb-8 p-2 shadow-lg">
        <h2 className="text-sm mt-1 text-gray-600">{title}</h2>
        <h4 className="text-xsm font-medium text-gray-600">{date}</h4>
        <h4 className="text-xsm font-medium text-gray-600">{date}</h4>
      </div>
      {/* </li> */}
    </Link>
  );
}
