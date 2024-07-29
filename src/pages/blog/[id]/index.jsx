import Head from "next/head";
import axios from "axios";
import BlogHeroSection from "@/features/Blog/HeroSection";
import RecentArticles from "@/features/Blog/RecentArticles";
import Footer from "@/features/Home/Footer";
import { Box, Divider, Typography } from "@mui/material";
import NavBar from "@/features/Home/NavBar";
import WhatsappContainer from "@/components/whatsappContainer";
import ContactUsContainer from "@/components/ContactUsContainer";
import { chosenBackendUrl } from "@/pages";
import logger from "@/utils/logger";
import ErrorPage from "@/components/ErrorPage";
import { riseFont } from "@/pages/_app";

function BlogPage({ realEstates, articles, article, error }) {
  if (error) {
    return <ErrorPage errorCode={error.code} />;
  }

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
        >
          <Box
            position={"absolute"}
            top={0}
            left={0}
            width={1}
            height={"100vh"}
            sx={{ backgroundImage: "url(/images/image7.png)" }}
          ></Box>
          <BlogHeroSection
            image={article.author.image}
            name={article.author.name}
            date={new Date(article.createdAt).toDateString()}
            header={"Real estate"}
            title={article.title}
            role={article.author.role}
          />
          <Box
            width={{ xs: "100%", sm: "85", md: "70%" }}
            component={"img"}
            src={article.imageUrl}
            zIndex={10}
            sx={{ objectFit: "cover", mb: "2rem", aspectRatio: 16 / 8 }}
            alt="blog image"
          />
          {article.paragraphs.map((paragraph, index) => (
            <Typography
              key={index}
              width={{ sm: "85", md: "70%" }}
              p={{ xs: "2rem", sm: "1rem 6rem" }}
              fontSize={{ xs: "0.85rem", sm: "1.25rem" }}
              className={riseFont.className}
              color={"riseDark.main"}
              zIndex={10}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>

        {articles.filter((a) => a.id !== article.id).length > 0 && (
          <RecentArticles
            articles={articles.filter((a) => a.id !== article.id)}
          />
        )}

        <Divider orientation="horizontal" sx={{ my: "2rem", opacity: 0 }} />
        <Footer realEstates={realEstates} />
        <WhatsappContainer />
        <ContactUsContainer />
      </main>
    </>
  );
}

export default BlogPage;

export async function getServerSideProps({ params }) {
  try {
    const realestatesRequest = axios.get(`${chosenBackendUrl}realestate`);
    const articlesRequest = axios.get(`${chosenBackendUrl}article`);
    const articleRequest = axios.get(`${chosenBackendUrl}article/${params.id}`);

    const [realEstatesResponse, articlesResponse, articleResponse] =
      await Promise.all([realestatesRequest, articlesRequest, articleRequest]);

    return {
      props: {
        realEstates: realEstatesResponse.data.realEstates,
        articles: articlesResponse.data.articles,
        article: articleResponse.data.article,
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
