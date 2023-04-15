import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

const notionSecret = process.env.NOTION_SECRET;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export default async function getNotionDatabase(): Promise<NotionPageInfo[]> {
  if (!notionSecret || !notionDatabaseId)
    throw new Error("Missing notion secret or DB-ID");

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
    filter: {
      property: "published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "created",
        direction: "descending",
      },
    ],
  });

  const rows = query.results.map((page: any) => ({
    id: page.id,
    slug: "",
    cover:
      page.cover.type === "file"
        ? page.cover.file.url
        : page.cover.type === "external"
        ? page.cover.external.url
        : "",
    title: page.properties.Title.title[0].text.content,
    tags: page.properties.tag.rich_text,
    description: "",
    date: page.created_time,
  }));

  return rows;
}
