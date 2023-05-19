import {
  BLOG_PATH,
  BlogFrontMatter,
  getParsedFileContentBySlug,
} from "@/markdown";
import { HeroBanner } from "@/ui";
import React from "react";
import fs from "fs";

const Blog = (props: ReturnType<typeof getStaticProps>["props"]) => {
  console.log("props:", props);
  return (
    <div>
      <HeroBanner
        padding={false}
        backgroundColor="cherry-300"
        className="min-h-[300px]"
      >
        <div className="container">
          <div className="text-center">
            <h1 style={{ fontSize: 40 }} className="mb-4 font-bold">
              MargDarshan Scholarships
            </h1>
            <h6 className="text-title-6 ">
              Paving the way for the youth of India
            </h6>
          </div>
        </div>
      </HeroBanner>
      <h2>Scholarship</h2>
    </div>
  );
};

export const getStaticProps = () => {
  const blogsDir = fs.readdirSync(BLOG_PATH);
  const articlesData = blogsDir.map((blogFile) => {
    const blogSlug = blogFile.replace(/\.mdx?$/, "");
    const mdContent = getParsedFileContentBySlug<BlogFrontMatter>(
      blogSlug,
      BLOG_PATH
    );

    return { ...mdContent.frontMatter, slug: blogSlug };
  });

  const latestArticle = articlesData.reduce((acc, curr) => {
    if (new Date(curr.date) > new Date(acc.date)) {
      acc = curr;
    }
    return acc;
  });

  return { props: { articlesData, latestArticle } };
};

export default Blog;
