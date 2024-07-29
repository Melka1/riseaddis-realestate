import axios from "axios";

import { chosenBackendUrl } from "..";

import Head from "next/head";
import RealEstateCarousel from "../../features/Realestates/components/RealEstateCarousel";
import Footer from "@/features/Home/Footer";
import RealEstateList from "../../features/Realestates/components/RealEstate";
import NavBar from "@/features/Home/NavBar";
import WhatsappContainer from "@/components/whatsappContainer";
import ContactUsContainer from "@/components/ContactUsContainer";
import ErrorPage from "@/components/ErrorPage";
import logger from "@/utils/logger";

function RealEstate({ realEstates, sites, articles, error }) {
  if (error) {
    return <ErrorPage />;
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
        <NavBar
          page={"/project"}
          realEstates={realEstates}
          articles={articles}
        />
        <RealEstateCarousel sites={sites} />
        <RealEstateList realEstates={realEstates} />
        <Footer realEstates={realEstates} />
        <WhatsappContainer />
        <ContactUsContainer />
      </main>
    </>
  );
}

export default RealEstate;

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
