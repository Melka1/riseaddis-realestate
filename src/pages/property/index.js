import ResponsiveAppBar from "@/components/Home/Menubar";
import PropertySearchBar from "@/components/Property/PropertySearchBar";
import Head from "next/head";
import React from "react";

function Property() {
  return (
    <>
      <Head>
        <title>Rise Addis Realestate</title>
        <meta
          name="description"
          content="The best Realestate Agency to buy appartments"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ResponsiveAppBar />
        <PropertySearchBar />
      </main>
    </>
  );
}

export default Property;
