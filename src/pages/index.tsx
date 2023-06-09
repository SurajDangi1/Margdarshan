import Image from "next/image";
import { Inter } from "next/font/google";
import { NextSeo } from "next-seo";
import {
  Button,
  ButtonLink,
  Container,
  HeroBanner,
  ScholarshipCard,
  ImagesArray,
} from "@/ui";
import { useWindowWidth } from "@/hooks";
import backgroundImage from "@/images/background-home.jpg";
import dayjs from "dayjs";
import fs from "fs";
import {
  BLOG_PATH,
  BlogFrontMatter,
  getParsedFileContentBySlug,
} from "@/markdown";
import SuggestedScholarships from "@/ui/suggested-scholarships";



const inter = Inter({ subsets: ["latin"] });

const Home = (props: ReturnType<typeof getStaticProps>["props"]) => {


  return (
    <div>
      <NextSeo description="Margdarshan" />
      <LandingHero articles={props} />
    </div>
  );
};

const LandingHero = (props: {
  articles: ReturnType<typeof getStaticProps>["props"];
}) => {
  return (
    <div>




      <section
        id="banner"
        aria-labelledby="faq-title"
        className="bg-slate-100"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container className="pt-20 pb-16 text-center lg:pt-60 lg:pb-40 container relative z-20">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight leading-loose text-slate-900 sm:text-7xl lg:px-24">
            Paving{" "}
            <span className="relative whitespace-nowrap text-cherry-400 ">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">the way</span>
            </span>{" "}
            for young and curious minds.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Find life-changing scholarships made for you
          </p>

          <div className="mt-10 flex justify-center space-x-6">
            <Button href="/ai" text="Ask your AI "></Button>
            <Button
              href="/ai"
              text="Free Consultation"
              theme="primary"
              variant="secondary"
            ></Button>
          </div>
        </Container>
      </section>
      <section className="bg-slate-100">
        <SuggestedScholarships />
      </section>
      <section id="recent-scholarships" className="bg-slate-100 pb-10">
        <div className="container pt-10 pb-10">
          <div
            className="text-center pb-10
          "
          >
            <h2 className="text-title-2 lg:text-title-1">
              Scholarships of {dayjs(new Date()).format("MMMM")}
            </h2>
          </div>
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {props.articles.latestArticles.map((article, idx) => (
              <div key={idx}>
                <ScholarshipCard
                  deadlineDate={article.endDate}
                  image={
                    ImagesArray[Math.floor(Math.random() * ImagesArray.length)]
                  }
                  scholarshipDescription={article.description}
                  scholarshipName={article.title}
                  slug={`/scholarship/${article.slug}`}
                />

              </div>
            ))}
          </div>
        </div>
      </section>


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

  const latestArticles = articlesData.slice(0, 9);

  return { props: { articlesData, latestArticle, latestArticles } };
};

export default Home;
