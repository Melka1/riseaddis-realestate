import axios from "axios";

import { backEndUrls } from "..";

import Head from "next/head";
import RealEstateCarousel from "../../components/Realestates/components/RealEstateCarousel";
import Footer from "@/components/Home/Footer";
import RealEstateList from "../../components/Realestates/components/RealEstate";
import NavBar from "@/components/Home/NavBar";
import WhatsappContainer from "@/components/whatsappContainer";
import ContactUsContainer from "@/components/ContactUsContainer";

function RealEstate({ realEstates, sites }) {
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
        <NavBar page={"/project"} realEstates={realEstates} />
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

export async function getStaticProps() {
  const sitesResponse = await axios.get(`${backEndUrls.vercel}site`);

  const realestatesResponse = await axios.get(
    `${backEndUrls.vercel}realestate`
  );
  return {
    props: {
      sites: await sitesResponse.data.sites,
      realEstates: await realestatesResponse.data.realEstates,
    },
  };
}
