import { useStore } from "@/Context/store";
import ResponsiveAppBar from "@/components/Home/Menubar";
import TopAddressBar from "@/components/Home/TopAddress";
import Head from "next/head";
import React from "react";
import RealEstateCarousel from "./components/RealEstateCarousel";
import Footer from "@/components/Home/Footer";
import RealEstateList from "./components/RealEstate";

function RealEstate() {
  const { user } = useStore();
  return (
    <>
      <Head>
        <title>Rise Addis Realestate</title>
        <meta
          name="description"
          content="The best Realestate Agency to buy appartments"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo1.png" />
      </Head>
      <main>
        <TopAddressBar />
        <ResponsiveAppBar user={user} type={"/project"} />
        <RealEstateCarousel />
        <RealEstateList />
        <Footer />
      </main>
    </>
  );
}

export default RealEstate;
