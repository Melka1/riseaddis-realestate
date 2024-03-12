import BlogHeroSection from "@/components/Blog/HeroSection";
import RecentArticles from "@/components/Blog/RecentArticles";
import Footer from "@/components/Home/Footer";
import ResponsiveAppBar from "@/components/Home/Menubar";
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

const font2 = Kufam({ subsets: ["arabic"] });
const font = Montserrat({ subsets: ["cyrillic"] });

function BlogPage() {
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
          alignItems: "center",
        }}
      >
        <ResponsiveAppBar type={"/blog"} />
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
          width={"70%"}
          component={"img"}
          src="/images/Image.png"
          zIndex={1000}
          sx={{ objectFit: "cover", mb: "2rem" }}
        ></Box>
        <Typography
          width={"70%"}
          p={"2rem 6rem"}
          fontSize={"1.25rem"}
          className={font.className}
          color={"rise.light"}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography
          fontSize={"2.25rem"}
          className={font.className}
          fontWeight={"bolder"}
          lineHeight={1.5}
        >
          Perfect Property For Building
        </Typography>
        <Typography
          width={"70%"}
          p={"2rem 6rem"}
          fontSize={"1.25rem"}
          className={font.className}
          color={"rise.light"}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Box width={"70%"} p={"0 6rem"}>
          <List
            sx={{ pl: "2rem", color: "rise.light" }}
            className={font.className}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: "1.5rem",
                gap: "1rem",
              }}
            >
              <Circle sx={{ width: "6px", height: "6px" }} />
              <ListItemText
                primary={
                  <Typography fontSize={"1.25rem"}>
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
                pl: "1.5rem",
                gap: "1rem",
              }}
            >
              <Circle sx={{ width: "6px", height: "6px" }} />
              <ListItemText
                primary={
                  <Typography fontSize={"1.25rem"}>
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
                pl: "1.5rem",
                gap: "1rem",
              }}
            >
              <Circle sx={{ width: "6px", height: "6px" }} />
              <ListItemText
                primary={
                  <Typography fontSize={"1.25rem"}>
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
                pl: "1.5rem",
                gap: "1rem",
              }}
            >
              <Circle sx={{ width: "6px", height: "6px" }} />
              <ListItemText
                primary={
                  <Typography fontSize={"1.25rem"}>
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
                pl: "1.5rem",
                gap: "1rem",
              }}
            >
              <Circle sx={{ width: "6px", height: "6px" }} />
              <ListItemText
                primary={
                  <Typography fontSize={"1.25rem"}>
                    Neque sodales ut etiam sit amet nisl purus non tellus orci
                    ac auctor
                  </Typography>
                }
              />
            </Box>
          </List>
        </Box>
        <Box width={"70%"} p={"6rem 6rem"} bgcolor={"rise.light"} m={"1rem 0"}>
          <Typography
            fontSize={"1.875rem"}
            className={font2.className}
            fontStyle={"italic !important"}
            color={"white"}
            textAlign={"center"}
            lineHeight={"118.5%"}
          >
            “Democracy must be built through open societies that share
            information. When there is information, there is enlightenment. When
            there is no sharing of power, no rule of law, no accountability,
            there is abuse, corruption and indignation.”
          </Typography>
        </Box>
        <Box width={"70%"} p={"0 6rem"}>
          <Typography
            fontSize={"1.5rem"}
            className={font.className}
            fontWeight={"bolder"}
            lineHeight={1.5}
            // alignSelf={"flex-start"}
            margin={"1rem 0"}
            textAlign={"left"}
          >
            Setting the mood with incense
          </Typography>
          <Typography
            fontSize={"1.25rem"}
            className={font.className}
            color={"rise.light"}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <List
            sx={{ pl: "2rem", color: "rise.light", mt: "1rem" }}
            className={font.className}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: "1.5rem",
                gap: "1rem",
              }}
            >
              <Typography fontSize={"1.25rem"}>1.</Typography>
              <ListItemText
                primary={
                  <Typography fontSize={"1.25rem"}>
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
                pl: "1.5rem",
                gap: "1rem",
              }}
            >
              <Typography fontSize={"1.25rem"}>2.</Typography>

              <ListItemText
                primary={
                  <Typography fontSize={"1.25rem"}>
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
                pl: "1.5rem",
                gap: "1rem",
              }}
            >
              <Typography fontSize={"1.25rem"}>3.</Typography>
              <ListItemText
                primary={
                  <Typography fontSize={"1.25rem"}>
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
                pl: "1.5rem",
                gap: "1rem",
              }}
            >
              <Typography fontSize={"1.25rem"}>4.</Typography>
              <ListItemText
                primary={
                  <Typography fontSize={"1.25rem"}>
                    Neque sodales ut etiam sit amet nisl purus non tellus orci
                    ac auctor
                  </Typography>
                }
              />
            </Box>
          </List>
        </Box>
        <Box
          width={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          p={"6rem"}
          bgcolor={"addis.light"}
          m={"2rem 0"}
        >
          <Box
            display={"flex"}
            maxWidth={"70%"}
            flex={1}
            gap={"2rem"}
            alignItems={"center"}
            p={"0 6rem"}
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
              <Box display={"flex"} alignItems={"space-between"} flex={1}>
                <ListItemText
                  primary={
                    <Typography fontWeight={"bold"} fontSize={"1.5rem"}>
                      Deborah Roderick
                    </Typography>
                  }
                  secondary={
                    <Typography
                      color={"white"}
                      className={font.className}
                      fontSize={"0.875rem"}
                    >
                      Vlogger
                    </Typography>
                  }
                />
                <Box display={"flex"} alignItems={"center"}>
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
              <Typography>
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
        <Footer />
      </main>
    </>
  );
}

export default BlogPage;
