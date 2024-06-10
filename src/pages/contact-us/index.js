import Head from "next/head";
import React from "react";
import Footer from "@/components/Home/Footer";
import NavBar from "@/components/Home/NavBar";
import WhatsappContainer from "@/components/whatsappContainer";
import ContactUsContainer from "@/components/ContactUsContainer";
import axios from "axios";
import { backEndUrls } from "..";

function ContactUs({ realEstates }) {
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
        <Footer realEstates={realEstates} />
        <WhatsappContainer />
        <ContactUsContainer />
      </main>
    </>
  );
}

export default ContactUs;

export async function getStaticProps() {
  const realestatesResponse = await axios.get(
    `${backEndUrls.vercel}realestate`
  );
  return {
    props: {
      realEstates: realestatesResponse.data.realEstates,
    },
  };
}
