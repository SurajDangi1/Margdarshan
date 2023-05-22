import { Header, MaterialThemeContext } from "@/ui";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { Footer } from "@/ui/footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  const path = useRouter().asPath;
  return (
    <>
      <MaterialThemeContext>
        <DefaultSeo
          title="MargDarshan"
          canonical={`${process.env.URL}${path}`}
          openGraph={{
            siteName: "MargDarshan",
            type: "website",
            locale: "en_IN",
            url: `${process.env.URL}`,
          }}
        />
        <div className={`${poppins.variable} font-sans`}>
          <Header />

          <main className="app">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </MaterialThemeContext>
    </>
  );
}
