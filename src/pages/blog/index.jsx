import { useStore } from "@/stores/userStore";
import BlogHeroSection from "@/components/Blog/HeroSection";
import RecentArticles from "@/components/Blog/RecentArticles";
import TrendingArticle from "@/components/Blog/TrendingArticle";
import EmailSubscription from "@/components/Home/EmailSubscription";
import Footer from "@/components/Home/Footer";
import ResponsiveAppBar from "@/components/Home/Menubar";
import TopAddressBar from "@/components/Home/TopAddress";
import { Box, Divider } from "@mui/material";
import Head from "next/head";
import NavBar from "@/components/Home/NavBar";
import WhatsappContainer from "@/components/whatsappContainer";
import ContactUsContainer from "@/components/ContactUsContainer";
import axios from "axios";
import { backEndUrls } from "..";

function Blog({ realEstates }) {
  return (
    <>
      <Head>
        <title>Rise Addis Properties</title>
        <meta
          name="description"
          content="The best and affordable real-estate in ethiopia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <main style={{ position: "relative" }}>
        <NavBar page={"/blog"} realEstates={realEstates} />
        <Box
          position={"relative"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box
            position={"absolute"}
            top={0}
            left={0}
            width={1}
            zIndex={-1}
            component={"img"}
            sx={{
              backgroundImage: "url(/images/image7.png)",
              aspectRatio: "1",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
          <BlogHeroSection />
          <TrendingArticle />
        </Box>
        <Divider />
        <RecentArticles />
        <EmailSubscription />
        <Footer realEstates={realEstates} />
        <WhatsappContainer />
        <ContactUsContainer />
      </main>
    </>
  );
}

export default Blog;

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
