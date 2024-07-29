import Head from "next/head";
import axios from "axios";
import Footer from "@/features/Home/Footer";
import NavBar from "@/features/Home/NavBar";
import WhatsappContainer from "@/components/whatsappContainer";
import ContactUsContainer from "@/components/ContactUsContainer";
import logger from "@/utils/logger";
import { chosenBackendUrl } from "..";

function ContactUs({ realEstates, articles }) {
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
        <Footer realEstates={realEstates} />
        <WhatsappContainer />
        <ContactUsContainer />
      </main>
    </>
  );
}

export default ContactUs;

export async function getServerSideProps() {
  try {
    const realEstatesRequest = axios.get(`${chosenBackendUrl}realestate`);
    const articlesRequest = axios.get(`${chosenBackendUrl}article`);

    const [realEstatesResponse, articlesResponse] = await Promise.all([
      realEstatesRequest,
      articlesRequest,
    ]);

    return {
      props: {
        realEstates: realEstatesResponse.data.realEstates,
        articles: articlesResponse.data.articles,
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
