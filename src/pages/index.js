import Head from "next/head";
import { Inter } from "next/font/google";
import ResponsiveAppBar from "@/components/Home/Menubar";
import AboutUsSection from "@/components/Home/AboutUsSection";
import SearchSection from "@/components/Home/SearchSection";
import Properties from "@/components/Home/Properties";
import EmailSubscription from "@/components/Home/EmailSubscription";
import Footer from "@/components/Home/Footer";
import HomeRecentBlogs from "@/components/Home/HomeRecentBlogs";
import { Box, Divider } from "@mui/material";
import { useStore } from "@/Context/store";
import TopAddressBar from "@/components/Home/TopAddress";
import Projects from "@/components/Home/Projects";
import { useEffect } from "react";
import ApartmentsList from "@/components/Home/ApartmentsList";
import axios from "axios";
import { PrismaClient } from "@prisma/client";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ realEstates }) {
  console.log(realEstates);
  const { user, searchList, setSearchList } = useStore();

  useEffect(() => {
    axios.get("../api/apartments").then((res) => {
      // console.log(res.data);
      setSearchList(res.data);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Rise Addis RealEstate</title>
        <meta
          name="description"
          content="The best RealEstate Agency to buy apartments"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo1.png" />
      </Head>
      <main>
        <Box position={"sticky"} top={0} left={0} zIndex={10000}>
          <TopAddressBar />
          <ResponsiveAppBar user={user} type={"/"} />
        </Box>
        <SearchSection />
        <AboutUsSection />
        <Divider flexItem orientation="horizontal" />
        {/* <Projects /> */}
        <ApartmentsList properties={searchList} />
        {/* <Properties /> */}
        <HomeRecentBlogs />
        <EmailSubscription />
        <Footer />
      </main>
    </>
  );
}

export async function getStaticProps() {
  // const prisma = new PrismaClient();
  const realEstates = await axios.get(process.env.LOCAL + "realestate");
  // .then((response) => response.json());

  console.log(realEstates.data);
  return {
    props: { realEstates: realEstates.data },
  };
}
