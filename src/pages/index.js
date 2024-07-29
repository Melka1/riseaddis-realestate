import axios from "axios";

import Head from "next/head";
import { Divider } from "@mui/material";

import AboutUsSection from "@/features/Home/AboutUsSection";
import EmailSubscription from "@/features/Home/EmailSubscription";
import Footer from "@/features/Home/Footer";
import SitesList from "@/features/Home/SitesList";
import NavBar from "@/features/Home/NavBar";
import WhatsappContainer from "@/components/whatsappContainer";
import ContactUsContainer from "@/components/ContactUsContainer";
import IntroVideoSection from "@/features/Home/IntroVideoSection";
import HomeRecentBlogs from "@/features/Home/HomeRecentBlogs";
import ErrorPage from "@/components/ErrorPage";
import logger from "@/utils/logger";
import { useEffect, useRef } from "react";

export const backEndUrls = {
  local: "http://localhost:8080/api/",
  vercel: "https://riseaddis-backend.vercel.app/api/",
};

export const chosenBackendUrl = backEndUrls.vercel;

export default function Home({ realEstates, sites, articles, error }) {
  const player = useRef();

  useEffect(() => {
    console.log(player.current);
  }, []);

  if (error) {
    return <ErrorPage errorCode={error.code} />;
  }

  return (
    <>
      <Head>
        <title>Rise Addis Properties</title>
        <meta
          name="description"
          content="The best and affordable real-estate in ethiopia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo1.png" />
      </Head>
      <main style={{ position: "relative" }}>
        <NavBar page={"/"} realEstates={realEstates} articles={articles} />
        <IntroVideoSection />
        <SitesList realEstates={realEstates} sites={sites} />
        <AboutUsSection />
        {articles.length > 0 && <HomeRecentBlogs articles={articles} />}
        <Divider flexItem orientation="horizontal" />
        <EmailSubscription />
        <Footer realEstates={realEstates} />
        <WhatsappContainer />
        <ContactUsContainer />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const sitesRequest = axios.get(`${chosenBackendUrl}site`);
    const realEstatesRequest = axios.get(`${chosenBackendUrl}realestate`);
    const articlesRequest = axios.get(`${chosenBackendUrl}article`);

    const [sitesResponse, realEstatesResponse, articlesResponse] =
      await Promise.all([sitesRequest, realEstatesRequest, articlesRequest]);

    return {
      props: {
        sites: sitesResponse.data.sites,
        realEstates: realEstatesResponse.data.realEstates,
        articles: articlesResponse.data.articles,
        error: false,
      },
    };
  } catch (error) {
    logger(error);
    return {
      props: {
        error: {
          status: true,
          code: error?.response?.status || null,
        },
      },
    };
  }
}
