import { slugify } from "@/ui";

export const getHeadings = (source: string) => {
  const regex = /<h2(.*?)>(.*?)<\/h2>/g;
  const matchObject = source.matchAll(regex);
  const headings: { text: string; link: string }[] = [];
  const matchArray = Array.from(matchObject);
  for (let i = 0; i < matchArray.length; i++) {
    const match = matchArray[i];
    headings.push({
      text: match[2],
      link: "#" + slugify(match[2]),
    });
  }

  return headings;
};

export default getHeadings;
