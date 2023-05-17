import fs from "fs";
import matter from "gray-matter";
// import { BlogArticleFrontMatter, MarkdownDocument } from './types';
import { serialize } from "next-mdx-remote/serialize";

import { join } from "path";

export function getParsedFileContentBySlug<FrontMatterFormat>(
  fileNameWithoutExt: string,
  filePath: string
) {
  const postFilePath = join(filePath, `${fileNameWithoutExt}.mdx`);
  const fileContents = fs.readFileSync(postFilePath);

  const { data, content } = matter(fileContents);

  return {
    frontMatter: data as FrontMatterFormat,
    content,
  };
}


export const renderMarkdown = (markdownContent: string) => {
  return serialize(markdownContent || "");
};
