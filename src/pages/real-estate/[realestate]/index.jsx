import axios from "axios";

import { backEndUrls } from "@/pages";

import Head from "next/head";
import NavBar from "@/components/Home/NavBar";
import RealEstateIntro from "../../../components/Realestate/components/RealEstateIntro";
import ProjectList from "../../../components/Realestate/components/ProjectList";
import Projects from "@/components/Home/Projects";
import Footer from "@/components/Home/Footer";
import WhatsappContainer from "@/components/whatsappContainer";
import ContactUsContainer from "@/components/ContactUsContainer";
import { useRouter } from "next/router";

function RealEstate({ realEstate, realEstates }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
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
        <NavBar page={"/real-estate"} realEstates={realEstates} />
        <RealEstateIntro realEstateImages={realEstate?.images || []} />
        <ProjectList
          sites={realEstate?.sites}
          link={realEstate?.link}
          background={realEstate?.background}
        />
        <Projects title={"Other Projects for you"} realEstates={realEstates} />
        <Footer realEstates={realEstates} />
        <WhatsappContainer />
        <ContactUsContainer />
      </main>
    </>
  );
}

export default RealEstate;

export async function getStaticPaths() {
  const response = await axios.get(`${backEndUrls.vercel}realestate`);

  let paths = response.data.realEstates.map((realEstate) => ({
    params: {
      realestate: realEstate.link,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const realestateResponse = await axios.get(
    `${backEndUrls.vercel}realestate/${params.realestate}`
  );

  const realestatesResponse = await axios.get(
    `${backEndUrls.vercel}realestate`
  );
  return {
    props: {
      realEstate: await realestateResponse.data.data,
      realEstates: await realestatesResponse.data.realEstates,
    },
  };
}
