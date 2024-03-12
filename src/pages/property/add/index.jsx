import ResponsiveAppBar from "@/components/Home/Menubar";
import Head from "next/head";
import React from "react";

function AddPropeertyPage() {
  return (
    <>
      <Head>
        <title>Rise Addis Realestate</title>
        <meta
          name="description"
          content="The best Realestate Agency to buy appartments"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <main>
        <ResponsiveAppBar />
      </main>
    </>
  );
}

export default AddPropeertyPage;
