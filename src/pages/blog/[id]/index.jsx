import BlogHeroSection from "@/components/Blog/HeroSection";
import RecentArticles from "@/components/Blog/RecentArticles";
import Footer from "@/components/Home/Footer";
import {
  Circle,
  Facebook,
  Google,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import { Kufam, Montserrat } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/Home/NavBar";
import WhatsappContainer from "@/components/whatsappContainer";
import ContactUsContainer from "@/components/ContactUsContainer";
import axios from "axios";
import { backEndUrls } from "@/pages";
import { useRouter } from "next/router";

const font2 = Kufam({ subsets: ["arabic"] });
const font = Montserrat({ subsets: ["cyrillic"] });

function BlogPage({ realEstates }) {
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
            height={"100vh"}
            component={"img"}
            sx={{ backgroundImage: "url(/images/image7.png)" }}
          ></Box>
          <BlogHeroSection
            name={"Deborah Roderick"}
            date={"November 24th 2024"}
            header={"Architecture"}
            title={"Here’s how to decorate your new home from scratch"}
          />
          <Box
            width={{ xs: "100%", sm: "85", md: "70%" }}
            component={"img"}
            src="/images/Image.png"
            zIndex={10}
            sx={{ objectFit: "cover", mb: "2rem" }}
          ></Box>
          <Typography
            width={{ sm: "85", md: "70%" }}
            p={{ xs: "2rem", sm: "2rem 6rem" }}
            fontSize={{ xs: "0.85rem", sm: "1.25rem" }}
            className={font.className}
            color={"rise.light"}
            zIndex={10}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>

          <Typography
            fontSize={{ xs: "1.5rem", sm: "2.25rem" }}
            className={font.className}
            fontWeight={"bolder"}
            lineHeight={1.5}
            zIndex={10}
            textAlign={"center"}
            p={"1rem"}
            width={{ sm: "85", md: "70%" }}
          >
            Perfect Property For Building
          </Typography>

          <Typography
            width={{ sm: "85", md: "70%" }}
            p={{ xs: "2rem", sm: "2rem 6rem" }}
            fontSize={{ xs: "0.85rem", sm: "1.25rem" }}
            className={font.className}
            color={"rise.light"}
            zIndex={10}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>

          <Box
            width={{ sm: "85", md: "70%" }}
            p={{ xs: "0 2rem", sm: "0 3rem", md: "0 6rem" }}
            zIndex={10}
          >
            <List
              sx={{ pl: { xs: "0", sm: "2rem" }, color: "rise.light" }}
              className={font.className}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: { xs: "0.5rem", sm: "1rem", md: "1.5rem" },
                  gap: "1rem",
                }}
              >
                <Circle sx={{ width: "6px", height: "6px" }} />
                <ListItemText
                  primary={
                    <Typography fontSize={{ xs: "1rem", sm: "1.25rem" }}>
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                      ac auctor
                    </Typography>
                  }
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: { xs: "0.5rem", sm: "1rem", md: "1.5rem" },
                  gap: "1rem",
                }}
              >
                <Circle sx={{ width: "6px", height: "6px" }} />
                <ListItemText
                  primary={
                    <Typography fontSize={{ xs: "1rem", sm: "1.25rem" }}>
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                      ac auctor
                    </Typography>
                  }
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: { xs: "0.5rem", sm: "1rem", md: "1.5rem" },
                  gap: "1rem",
                }}
              >
                <Circle sx={{ width: "6px", height: "6px" }} />
                <ListItemText
                  primary={
                    <Typography fontSize={{ xs: "1rem", sm: "1.25rem" }}>
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                      ac auctor
                    </Typography>
                  }
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: { xs: "0.5rem", sm: "1rem", md: "1.5rem" },
                  gap: "1rem",
                }}
              >
                <Circle sx={{ width: "6px", height: "6px" }} />
                <ListItemText
                  primary={
                    <Typography fontSize={{ xs: "1rem", sm: "1.25rem" }}>
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                      ac auctor
                    </Typography>
                  }
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: { xs: "0.5rem", sm: "1rem", md: "1.5rem" },
                  gap: "1rem",
                }}
              >
                <Circle sx={{ width: "6px", height: "6px" }} />
                <ListItemText
                  primary={
                    <Typography fontSize={{ xs: "1rem", sm: "1.25rem" }}>
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                      ac auctor
                    </Typography>
                  }
                />
              </Box>
            </List>
          </Box>

          <Box
            width={{ xs: "100%", sm: "100%", md: "70%" }}
            p={{ xs: "1rem", sm: "3rem", md: "6rem" }}
            bgcolor={"rise.light"}
            m={"1rem 0"}
          >
            <Typography
              fontSize={{ xs: "0.9rem", sm: "1.2rem", md: "1.875rem" }}
              className={font2.className}
              fontStyle={"italic !important"}
              color={"white"}
              textAlign={"center"}
              lineHeight={{ xs: "150%", md: "118.5%" }}
            >
              “Democracy must be built through open societies that share
              information. When there is information, there is enlightenment.
              When there is no sharing of power, no rule of law, no
              accountability, there is abuse, corruption and indignation.”
            </Typography>
          </Box>

          <Box
            width={{ xs: "100%", sm: "85", md: "70%" }}
            p={{ xs: "0 1rem", sm: "0 3rem", md: "0 6rem" }}
          >
            <Typography
              fontSize={"1.5rem"}
              className={font.className}
              fontWeight={"bolder"}
              lineHeight={1.5}
              // alignSelf={"flex-start"}
              margin={"1rem 0"}
              textAlign={{ xs: "center", sm: "left" }}
            >
              Setting the mood with incense
            </Typography>
            <Typography
              fontSize={{ xs: "0.9rem", sm: "1.25rem" }}
              className={font.className}
              color={"rise.light"}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <List
              sx={{
                // pl: { xs: "0.5rem", sm: "1rem", md: "2rem" },
                color: "rise.light",
                mt: "1rem",
              }}
              className={font.className}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: { xs: "0.5rem", sm: "1rem", md: "2rem" },
                  gap: "1rem",
                }}
              >
                <Typography fontSize={{ xs: "0.9rem", sm: "1.25rem" }}>
                  1.
                </Typography>
                <ListItemText
                  primary={
                    <Typography fontSize={{ xs: "0.9rem", sm: "1.25rem" }}>
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                      ac auctor
                    </Typography>
                  }
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: { xs: "0.5rem", sm: "1rem", md: "2rem" },
                  gap: "1rem",
                }}
              >
                <Typography fontSize={{ xs: "0.9rem", sm: "1.25rem" }}>
                  2.
                </Typography>

                <ListItemText
                  primary={
                    <Typography fontSize={{ xs: "0.9rem", sm: "1.25rem" }}>
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                      ac auctor
                    </Typography>
                  }
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: { xs: "0.5rem", sm: "1rem", md: "2rem" },
                  gap: "1rem",
                }}
              >
                <Typography fontSize={{ xs: "0.9rem", sm: "1.25rem" }}>
                  3.
                </Typography>
                <ListItemText
                  primary={
                    <Typography fontSize={{ xs: "0.9rem", sm: "1.25rem" }}>
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                      ac auctor
                    </Typography>
                  }
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: { xs: "0.5rem", sm: "1rem", md: "2rem" },
                  gap: "1rem",
                }}
              >
                <Typography fontSize={{ xs: "0.9rem", sm: "1.25rem" }}>
                  4.
                </Typography>
                <ListItemText
                  primary={
                    <Typography fontSize={{ xs: "0.9rem", sm: "1.25rem" }}>
                      Neque sodales ut etiam sit amet nisl purus non tellus orci
                      ac auctor
                    </Typography>
                  }
                />
              </Box>
            </List>
          </Box>
        </Box>

        <Box
          width={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          p={{ xs: "1rem", sm: "3rem", md: "6rem" }}
          bgcolor={"addis.light"}
          m={"2rem 0"}
        >
          <Box
            display={"flex"}
            maxwidth={{ sm: "90", md: "70%" }}
            flex={1}
            gap={{ xs: "1rem", sm: "2rem" }}
            alignItems={"center"}
            p={{ sm: "0 2rem", md: "0 6rem" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Box
              height={1}
              minHeight={"60px"}
              sx={{ aspectRatio: "1" }}
              flex={1}
            >
              <Avatar
                sx={{ height: "100%", width: "100%" }}
                src="/images/Profile.png"
              />
            </Box>
            <Box
              display={"flex"}
              gap={"1rem"}
              flexDirection={"column"}
              flex={1}
              minWidth={"75%"}
            >
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={"space-between"}
                flex={1}
              >
                <ListItemText
                  primary={
                    <Typography
                      fontWeight={"bold"}
                      fontSize={"1.5rem"}
                      textAlign={{ xs: "center", sm: "left" }}
                    >
                      Deborah Roderick
                    </Typography>
                  }
                  secondary={
                    <Typography
                      color={"white"}
                      className={font.className}
                      fontSize={{ xs: "0.875rem", sm: "1.25rem" }}
                      textAlign={{ xs: "center", sm: "left" }}
                    >
                      Vlogger
                    </Typography>
                  }
                />
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <IconButton>
                    <Facebook />
                  </IconButton>
                  <IconButton>
                    <LinkedIn />
                  </IconButton>
                  <IconButton>
                    <Google />
                  </IconButton>
                  <IconButton>
                    <Instagram />
                  </IconButton>
                  <IconButton>
                    <YouTube />
                  </IconButton>
                </Box>
              </Box>
              <Typography
                textAlign={{ xs: "center", sm: "left" }}
                fontSize={{ xs: "1rem", sm: "1.25rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </Typography>
            </Box>
          </Box>
        </Box>

        <RecentArticles />
        <Divider orientation="horizontal" flexItem />
        <Footer realEstates={realEstates} />
        <WhatsappContainer />
        <ContactUsContainer />
      </main>
    </>
  );
}

export default BlogPage;

export async function getStaticPaths() {
  let paths = [
    {
      params: {
        id: "whats-new",
      },
    },
    {
      params: {
        id: "realestates in ethiopia",
      },
    },
  ];

  return {
    paths,
    fallback: true,
  };
}

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
