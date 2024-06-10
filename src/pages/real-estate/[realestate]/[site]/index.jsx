import { Box, Button, Grid, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import Head from "next/head";

import axios from "axios";
import { Kufam } from "next/font/google";
import { riseFont } from "@/pages/_app";

import { backEndUrls } from "@/pages";

import ContactUs from "@/components/ContactUs";
import Amenities from "../../../../components/Site/components/Amenities";
import Payments from "../../../../components/Site/components/Payments";
import ProjectInfo from "../../../../components/Site/components/ProjectInfo";
import Apartments from "../../../../components/Site/components/Apartments";
import NavBar from "@/components/Home/NavBar";
import WhatsappContainer from "@/components/whatsappContainer";
import Footer from "@/components/Home/Footer";
import ContactUsContainer from "@/components/ContactUsContainer";
import { useRouter } from "next/router";

const kufam = Kufam({ subsets: ["arabic"] });

function Project({ siteInfo, realEstates }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
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
        <NavBar page={"/projects"} realEstates={realEstates} />
        <ProjectInfo site={siteInfo} />
        <Box
          p={{ xs: "1rem 1rem", sm: "2rem 4rem", md: "4rem 8rem" }}
          className={riseFont.className}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} md={9}>
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                {siteInfo?.units?.length ? (
                  <Apartments apartments={siteInfo?.units || []} />
                ) : (
                  ""
                )}

                {siteInfo?.description && (
                  <Box display={"flex"} flexDirection={"column"} gap={"0.5rem"}>
                    <Typography
                      className={kufam.className}
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

export async function getStaticPaths() {
  const response = await axios.get(`${backEndUrls.vercel}site`);

  let paths = response.data.sites.map((site) => ({
    params: {
      realestate: site.realEstate.link,
      site: site.link,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const siteResponse = axios.get(
    `${backEndUrls.vercel}site/${context.params.site}`
  );

  const realestatesResponse = axios.get(`${backEndUrls.vercel}realestate`);

  const response = await Promise.all([siteResponse, realestatesResponse]);
  return {
    props: {
      siteInfo: response[0].data.site,
      realEstates: response[1].data.realEstates,
    },
    revalidate: 1,
  };
}
