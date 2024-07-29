import Head from "next/head";
import axios from "axios";
import { Box, Divider } from "@mui/material";
import BlogHeroSection from "@/features/Blog/HeroSection";
import RecentArticles from "@/features/Blog/RecentArticles";
import ErrorPage from "@/components/ErrorPage";
import TrendingArticle from "@/features/Blog/TrendingArticle";
import EmailSubscription from "@/features/Home/EmailSubscription";
import Footer from "@/features/Home/Footer";
import NavBar from "@/features/Home/NavBar";
import WhatsappContainer from "@/components/whatsappContainer";
import ContactUsContainer from "@/components/ContactUsContainer";
import { chosenBackendUrl } from "..";
import logger from "@/utils/logger";

function Blog({ realEstates, articles, error }) {
  if (error) {
    return <ErrorPage errorCode={error.code} />;
  }
  console.log(articles.slice(1));

  return (
    <>
      <Head>
        <title>Rise Addis Properties</title>
        <meta
          name="description"
          content="The best and affordable real-estate in ethiopia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <main style={{ position: "relative" }}>
        <NavBar page={"/blog"} realEstates={realEstates} articles={articles} />
        <Box
          position={"relative"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={1}
        >
          <Box
            position={"absolute"}
            top={0}
            left={0}
            width={1}
            zIndex={-1}
            component={"img"}
            src="/images/image7.png"
            sx={{
              objectFit: "cover",
              aspectRatio: { xs: "16/10", md: "16/6" },
            }}
            alt="blog background image"
          />
          <BlogHeroSection />
          <TrendingArticle article={articles[0]} />
        </Box>
        <Divider />
        {articles.slice(1).length > 0 && (
          <RecentArticles articles={articles.slice(1)} />
        )}
        <EmailSubscription />
        <Footer realEstates={realEstates} />
        <WhatsappContainer />
        <ContactUsContainer />
      </main>
    </>
  );
}

export default Blog;

export async function getServerSideProps() {
  try {
    const realEstatesRequest = axios.get(`${chosenBackendUrl}realestate`);
    const articlesRequest = axios.get(`${chosenBackendUrl}article`);

    const [realEstatesResponse, articlesResponse] = await Promise.all([
      realEstatesRequest,
      articlesRequest,
    ]);

    return {
      props: {
        realEstates: realEstatesResponse.data.realEstates,
        articles: articlesResponse.data.articles,
      },
    };
  } catch (error) {
    logger(error);
    return {
      props: {
        error: {
          status: true,
          code: error?.response?.status || null,
        },
      },
    };
  }
}
