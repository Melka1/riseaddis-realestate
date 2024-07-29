import axios from "axios";

import { chosenBackendUrl } from "@/pages";

import Head from "next/head";
import NavBar from "@/features/Home/NavBar";
import RealEstateIntro from "../../../features/Realestate/components/RealEstateIntro";
import ProjectList from "../../../features/Realestate/components/ProjectList";
import Projects from "@/features/Home/Projects";
import Footer from "@/features/Home/Footer";
import WhatsappContainer from "@/components/whatsappContainer";
import ContactUsContainer from "@/components/ContactUsContainer";
import ErrorPage from "@/components/ErrorPage";
import logger from "@/utils/logger";

function RealEstate({ realEstate, realEstates, articles, error }) {
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
        <NavBar
          page={"/real-estate"}
          realEstates={realEstates}
          articles={articles}
        />
        <RealEstateIntro realEstateImages={realEstate?.images || []} />
        <ProjectList
          sites={realEstate?.sites}
          link={realEstate?.link}
          background={realEstate?.background}
        />
        <Projects
          title={"Other Projects for you"}
          realEstates={realEstates}
          realEstate={realEstate}
        />
        <Footer realEstates={realEstates} />
        <WhatsappContainer />
        <ContactUsContainer />
      </main>
    </>
  );
}

export default RealEstate;

export async function getServerSideProps({ params }) {
  try {
    const realEstateRequest = axios.get(
      `${chosenBackendUrl}realestate/${params.realestate}`
    );
    const realEstatesRequest = axios.get(`${chosenBackendUrl}realestate`);
    const articlesRequest = axios.get(`${chosenBackendUrl}article`);
    const [realEstateResponse, realEstatesResponse, articlesResponse] =
      await Promise.all([
        realEstateRequest,
        realEstatesRequest,
        articlesRequest,
      ]);

    return {
      props: {
        realEstate: realEstateResponse.data.realEstate,
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
