import {
  BlogFrontMatter,
  getParsedFileContentBySlug,
  mdxElements,
  renderMarkdown,
  BLOG_PATH,
  getHeadings,
  ArticleContext,
} from "@/markdown";
import H1 from "@/markdown/mdx-elements/h1";
import { HeroBanner } from "@/ui";

import fs from "fs";
import { MDXRemote } from "next-mdx-remote";
import { ArticleJsonLd, NextSeo } from "next-seo";
import { renderToString } from "react-dom/server";

export function BlogArticle({
  frontMatter,
  html,
  articlesData,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.title + " " + frontMatter.description}
      />
      <ArticleContext.Provider value={frontMatter}>
        <HeroBanner
          padding={false}
          backgroundColor="cherry-300"
          className="min-h-[400px]"
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

        <div className="gap-x-15 container mt-8 grid-cols-12 xl:grid">
          <div className="prose col-span-8 mb-10 max-w-full">
            <MDXRemote
              {...html}
              components={{
                h1: H1,
              }}
            />
          </div>
          <div className="hidden xl:col-span-4 xl:block">
            <div className="">Side Bar</div>
          </div>
        </div>
      </ArticleContext.Provider>
    </>
  );
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  // read markdown file into content and frontmatter
  const blogMarkdownContent = getParsedFileContentBySlug<BlogFrontMatter>(
    params.slug,
    BLOG_PATH
  );

  // generate HTML
  const renderedHTML = await renderMarkdown(blogMarkdownContent.content);

  const MarkdownComponent = (
    <MDXRemote {...renderedHTML} components={mdxElements} />
  );

  const headings = getHeadings(renderToString(MarkdownComponent));

  const blogsDir = fs.readdirSync(BLOG_PATH);
  const articlesData = blogsDir.map((blogFile) => {
    const blogSlug = blogFile.replace(/\.mdx?$/, "");
    const mdContent = getParsedFileContentBySlug<BlogFrontMatter>(
      blogSlug,
      BLOG_PATH
    );

    return { ...mdContent.frontMatter, slug: blogSlug };
  });
  return {
    props: {
      frontMatter: {
        ...blogMarkdownContent.frontMatter,
        slug: params.slug,
      },
      html: renderedHTML,
      headings,
      articlesData,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = [];
  fs.readdirSync(BLOG_PATH).forEach((file) => {
    paths.push({
      params: {
        slug: file.replace(/\.mdx?$/, ""),
      },
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export default BlogArticle;
