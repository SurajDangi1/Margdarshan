import { Header, MaterialThemeContext } from "@/ui";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { Footer } from "@/ui/footer";
import { Poppins } from "next/font/google";
import { ApiDataProvider } from "./api/api-context";
import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});
interface ScholarshipData {
  _id :'string'
  endDate:'string'
  isFemaleOnly:'string'
  image:'string'
  scholarshipDescription:'string'
  title:'string'
  slug:'string'
}

export const ApiContext = createContext<ScholarshipData[]>([]);

export default function App({ Component, pageProps }: AppProps) {
  const path = useRouter().asPath;

  const [apidata, setApiData] = useState<ScholarshipData[]>([]);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const accessToken = sessionStorage.getItem('token');
        const response = await axios.get('http://localhost:9000/scholarship', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setApiData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApiData();
  }, []);

  return (
    <ApiContext.Provider value={apidata}>
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
    </ApiContext.Provider>


  );
}