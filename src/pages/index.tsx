import Image from "next/image";
import { Inter } from "next/font/google";
import OnboardingForm from "@/onboarding-form";
import { NextSeo } from "next-seo";
import { HeroBanner } from "@/ui";
import { useWindowWidth } from "@/hooks";

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
      </div>
    </HeroBanner>
  );
};
