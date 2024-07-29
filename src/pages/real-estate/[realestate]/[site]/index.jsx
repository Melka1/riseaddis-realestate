import { Box, Grid, Typography } from "@mui/material";
import Head from "next/head";

import axios from "axios";
import { addisFont, riseFont } from "@/pages/_app";

import { chosenBackendUrl } from "@/pages";

import ContactUs from "@/components/ContactUs";
import Amenities from "../../../../features/Site/components/Amenities";
import Payments from "../../../../features/Site/components/Payments";
import ProjectInfo from "../../../../features/Site/components/ProjectInfo";
import Apartments from "../../../../features/Site/components/Apartments";
import NavBar from "@/features/Home/NavBar";
import WhatsappContainer from "@/components/whatsappContainer";
import Footer from "@/features/Home/Footer";
import ContactUsContainer from "@/components/ContactUsContainer";
import ErrorPage from "@/components/ErrorPage";
import logger from "@/utils/logger";

function Project({ siteInfo, realEstates, articles, error }) {
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
        <link rel="icon" href="/images/logo1.png" />
      </Head>
      <main style={{ position: "relative" }}>
        <NavBar
          page={"/projects"}
          realEstates={realEstates}
          articles={articles}
        />
        <ProjectInfo site={siteInfo} />
        <Box
          p={{ xs: "1rem 1rem", sm: "2rem 4rem", md: "4rem 8rem" }}
          className={riseFont.className}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} md={9}>
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                {siteInfo?.units?.length ? (
                  <Apartments
                    site={siteInfo}
                    apartments={siteInfo?.units || []}
                  />
                ) : (
                  ""
                )}

                {siteInfo?.description && (
                  <Box display={"flex"} flexDirection={"column"} gap={"0.5rem"}>
                    <Typography
                      className={addisFont.className}
                      fontSize={{ xs: "1.5rem", md: "2rem" }}
                      color={"rise.dark"}
                      fontWeight={"bold"}
                    >
                      About the property
                    </Typography>
                    <Typography
                      fontFamily={"sans-serif"}
                      fontSize={{ xs: "0.85rem", md: "1.1rem" }}
                      color={"rise.light"}
                    >
                      {siteInfo.description}
                    </Typography>
                  </Box>
                )}

                <Amenities amenities={siteInfo?.amenities} />
                <Payments payments={siteInfo?.payments || []} />
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <ContactUs />
            </Grid>
          </Grid>
        </Box>
        <Footer realEstates={realEstates} />
        <WhatsappContainer />
        <ContactUsContainer />
      </main>
    </>
  );
}

export default Project;

export async function getServerSideProps(context) {
  try {
    const siteRequest = axios.get(
      `${chosenBackendUrl}site/${context.params.site}?realestate=${context.params.realestate}`
    );
    const realEstatesRequest = axios.get(`${chosenBackendUrl}realestate`);
    const articlesRequest = axios.get(`${chosenBackendUrl}article`);
    const [siteResponse, realEstatesResponse, articlesResponse] =
      await Promise.all([siteRequest, realEstatesRequest, articlesRequest]);

    return {
      props: {
        siteInfo: siteResponse.data.site,
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
