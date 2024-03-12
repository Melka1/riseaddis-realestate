import { useStore } from "@/Context/store";
import BlogHeroSection from "@/components/Blog/HeroSection";
import RecentArticles from "@/components/Blog/RecentArticles";
import TrendingArticle from "@/components/Blog/TrendingArticle";
import EmailSubscription from "@/components/Home/EmailSubscription";
import Footer from "@/components/Home/Footer";
import ResponsiveAppBar from "@/components/Home/Menubar";
import { Box, Divider } from "@mui/material";
import Head from "next/head";

function Blog() {
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
      <main
        style={{
          minheight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <ResponsiveAppBar type={"/blog"} />
        <Box
          position={"absolute"}
          top={0}
          left={0}
          width={1}
          height={"100vh"}
          zIndex={-1}
          component={"img"}
          sx={{
            backgroundImage: "url(/images/image7.png)",
            backgroundPositionY: "500%",
          }}
        ></Box>
        <BlogHeroSection />
        <TrendingArticle />
        <Divider />
        <RecentArticles />
        <EmailSubscription />
        <Footer />
      </main>
    </>
  );
}

export default Blog;
