import Head from "next/head";
import { Inter } from "next/font/google";
import ResponsiveAppBar from "@/components/Home/Menubar";
import SwipeableTextMobileStepper from "@/components/Home/CarouselHero";
import AboutUsSection from "@/components/Home/AboutUsSection";
import SearchSection from "@/components/Home/SearchSection";
import Properties from "@/components/Home/Properties";
import EmailSubscription from "@/components/Home/EmailSubscription";
import Footer from "@/components/Home/Footer";
import HomeRecentsBlogs from "@/components/Home/HomeRecentBlogs";
import { Divider } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        {/* <SwipeableTextMobileStepper /> */}
        <SearchSection />
        <AboutUsSection />
        <Divider flexItem orientation="horizontal" />
        <Properties />
        <HomeRecentsBlogs />
        <EmailSubscription />
        <Footer />
      </main>
    </>
  );
}
