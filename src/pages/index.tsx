import Image from "next/image";
import { Inter } from "next/font/google";
import OnboardingForm from "@/onboarding-form";
import { NextSeo } from "next-seo";
import { HeroBanner, ScholarshipCard } from "@/ui";
import { useWindowWidth } from "@/hooks";
import UserSignUp from "@/ui/folder";
import SignUp from "@/ui/folder";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NextSeo description="Margdarshan" />
      <LandingHero />
      <div className="h-[2000px]"></div>
    </div>
  );
}

const LandingHero = () => {
  const { isLg } = useWindowWidth(0);
  return (
    <HeroBanner
      padding={false}
      backgroundColor="cherry-300"
      className="min-h-[600px]"
      >
      <div className="container">
        <div className="text-center">
          <h1 style={{ fontSize: 40 }} className="mb-4 font-bold">
            MargDarshan
          </h1>
          <h6 className="text-title-6 ">
            Paving the way for the youth of India
          </h6>
        </div>
        {/* <div className="mb-5">
          <ScholarshipCard image={"/Scholarship-dum-images/log-in.jpg"} deadlineDate={"5 | 10 | 23"} scholarshipName={"The Colgate Scholarship"} scholarshipDescription={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci incidunt minima molestiae nulla. Eaque exercitationem eum aspernatur illo, dolorem alias molestias iusto, dolor non laudantium maxime quod? Nulla, nemo? Animi?"} />
        </div> */}
       
      </div>

    </HeroBanner>
  );
};
