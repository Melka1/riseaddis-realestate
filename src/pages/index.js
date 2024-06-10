import axios from "axios";

import Head from "next/head";
import { Divider } from "@mui/material";

import AboutUsSection from "@/components/Home/AboutUsSection";
import EmailSubscription from "@/components/Home/EmailSubscription";
import Footer from "@/components/Home/Footer";
// import HomeRecentBlogs from "@/components/Home/HomeRecentBlogs";
import SitesList from "@/components/Home/SitesList";
import NavBar from "@/components/Home/NavBar";
import WhatsappContainer from "@/components/whatsappContainer";
import ContactUsContainer from "@/components/ContactUsContainer";
import IntroVideoSection from "@/components/Home/IntroVideoSection";

export const backEndUrls = {
  local: "http://localhost:8080/api/",
  vercel: "https://riseaddis-backend.vercel.app/api/",
};

export default function Home({ realEstates, sites }) {
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
        <NavBar page={"/"} realEstates={realEstates} />
        <IntroVideoSection />
        <SitesList realEstates={realEstates} sites={sites} />
        <AboutUsSection />
        {/* <HomeRecentBlogs /> */}
        <Divider flexItem orientation="horizontal" />
        <EmailSubscription />
        <Footer realEstates={realEstates} />
        <WhatsappContainer />
        <ContactUsContainer />
      </main>
    </>
  );
}

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
