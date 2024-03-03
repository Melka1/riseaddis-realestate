"use client";

import ResponsiveAppBar from "@/components/Home/Menubar";
import PropertyBody from "@/components/Property/PropertyBody";
import PropertySearchBar from "@/components/Property/PropertySearchBar";
import PropertyDetail from "@/components/Property/PropertyDetail";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Property() {
  const router = useRouter();

  const [detail, openDetail] = useState(false);
  console.log(router.query);

  if (!detail && router.query?.id) {
    openDetail(true);
  }

  useEffect(() => {
    console.log(router.query);

    if (router.query?.id) {
      openDetail(true);
    } else {
      openDetail(false);
    }

    console.log(detail, "2");
  }, [detail, router.query]);

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
      <main
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <ResponsiveAppBar />
        <PropertySearchBar />
        <PropertyBody openDetail={openDetail} />
        {detail && <PropertyDetail openDetail={openDetail} />}
      </main>
    </>
  );
}

export default Property;
