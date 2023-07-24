export default async function getNotionPage(pageId: string) {
  const res = await fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
