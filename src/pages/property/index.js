"use client";

import ResponsiveAppBar from "@/components/Home/Menubar";
import PropertyBody from "@/components/Property/PropertyBody";
import PropertySearchBar from "@/components/Property/PropertySearchBar";
import PropertyDetail from "@/components/Property/PropertyDetail";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useStore } from "@/Context/store";
import axios from "axios";

function Property() {
  const router = useRouter();
  const { user, property, setProperty, searchList, setSearchList } = useStore();
  console.log(user, "property");

  const [detail, openDetail] = useState(false);
  console.log(router.query);

  if (!detail && router.query?.id) {
    openDetail(true);
  }

  useEffect(() => {
    var propDetail = document.getElementById("property-detail");
    if (propDetail) propDetail.scrollTop = 0;
    console.log(router.query);

    if (!detail) {
      axios
        .get("https://risesddis-realestate.vercel.app/api/search")
        .then((res) => {
          //http://localhost:3000
          console.log(res.data);
          setSearchList(res.data);
        });
    }

    if (router.query?.id) {
      axios
        .post("https://risesddis-realestate.vercel.app/api/property", {
          id: router.query?.id,
        })
        .then((res) => {
          console.log(res.data);
          setProperty(res.data);
          // setSearchList([res.data]);
        });
      openDetail(true);
    } else {
      openDetail(false);
    }
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
        <ResponsiveAppBar user={user} />
        <PropertySearchBar />
        <PropertyBody openDetail={openDetail} properties={searchList} />
        {detail && (
          <PropertyDetail openDetail={openDetail} property={property} />
        )}
      </main>
    </>
  );
}

export default Property;
