type StructuredRows = {
  Name: string;
  FirstName: string;
}[];

type Tag = {
  color: string;
  id: string;
  name: string;
};

type NotionPageInfo = {
  id: string;
  cover: string;
  title: string;
  tags: Tag[];
  date: string;
};
