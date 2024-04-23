import { Box, Grid, Link, Typography } from "@mui/material";
import Section from "../../containers/section";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import {
  Facebook,
  Google,
  Instagram,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { BiLogoTiktok } from "react-icons/bi";

const font = Montserrat({ subsets: ["cyrillic"] });

function Footer() {
  const router = useRouter();
  return (
    <Section type={"footer"}>
      <Grid container spacing={{ xs: 4, sm: 2, md: 12, lg: 6, xl: 8 }}>
        <Grid item xs={12} md={4} lg={3.5} xl={4}>
          <Box
            component={"a"}
            href="/"
            display={"flex"}
            flexDirection={"column"}
            alignItems={{ xs: "center", md: "flex-start" }}
            gap={"1rem"}
          >
            <Box
              component={"img"}
              src={"/images/logo1.png"}
              width={{ xs: 48, sm: 64, md: 96 }}
              height={{ xs: 48, sm: 64, md: 96 }}
              alt="logo"
            />
            <Typography
              variant="h3"
              fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem" }}
              className={font.className}
              fontWeight={"bold"}
              textAlign={{ xs: "center", md: "left" }}
            >
              RISE ADDIS{" "}
              <Box
                // variant="h3"
                component={"p"}
                fontSize={{ xs: "1.2rem", sm: "1.5rem" }}
                className={font.className}
                fontWeight={"400"}
              >
                PROPERTIES
              </Box>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={5} xl={4}>
          <Box display={"flex"} flexDirection={"column"} gap={"0.75rem"}>
            <Typography
              className={font.className}
              textTransform={"capitalize"}
              fontSize={{ xs: "1.2rem", sm: "1.5rem" }}
              width={{ sm: "100%" }}
            >
              Recent Projects
            </Typography>
            <Box
              display={"flex"}
              flexDirection={{ xs: "column", md: "column" }}
              gap={1}
            >
              <Box
                component={"a"}
                href={`/real-estate/abay-homes-real-estate/gotera-kera-area`}
                sx={{ cursor: "pointer" }}
                onClick={() =>
                  router.push(
                    `/real-estate/abay-homes-real-estate/gotera-kera-area`
                  )
                }
              >
                <Grid container spacing={{ md: 2 }}>
                  <Grid item xs={3} sm={4}>
                    <Box
                      component={"img"}
                      // src="https://res.cloudinary.com/dov9kdlci/image/upload/v1708298524/pexels-alex-staudinger-1732414_ofhsux.jpg"
                      src="/images/1.jpg"
                      sx={{ aspectRatio: "1" }}
                      width={1}
                      overflow={"hidden"}
                      borderRadius={"0.25rem"}
                    ></Box>
                  </Grid>
                  <Grid item xs={9} sm={8}>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      gap={"0.25rem"}
                      p={"0.5rem"}
                      height={1}
                    >
                      <Typography
                        className={font.className}
                        fontWeight={"700"}
                        color={"#3a3a3c"}
                        sx={{
                          fontSize: {
                            xs: "0.75rem",
                            sm: "1.1rem",
                            lg: "1.1rem",
                          },
                        }}
                      >
                        Dalol real estate
                      </Typography>
                      <Typography
                        className={font.className}
                        fontWeight={"500"}
                        color={"#3a3a3c"}
                        sx={{
                          fontSize: {
                            xs: "0.75rem",
                            sm: "0.875rem",
                            lg: "1rem",
                          },
                        }}
                      >
                        Gotera-Kera project
                      </Typography>
                      <Typography
                        className={font.className}
                        fontWeight={"700"}
                        fontSize={{
                          xs: "1rem",
                          md: "1.375rem",
                          lg: "1.1rem",
                        }}
                        mt={"auto"}
                        color={"#3a3a3cbf"}
                      >
                        $ 90,000/sqms
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box
                component={"a"}
                href={`/real-estate/abay-homes-real-estate/gotera-kera-area`}
                sx={{ cursor: "pointer" }}
                onClick={() => router.push(`/property?id=5`)}
              >
                <Grid container spacing={{ md: 2 }}>
                  <Grid item xs={3} sm={4}>
                    <Box
                      component={"img"}
                      height={1}
                      // src="https://res.cloudinary.com/dov9kdlci/image/upload/v1708298537/pexels-expect-best-323780_ly7hmi.jpg"
                      src="/images/8.jpg"
                      sx={{ aspectRatio: "1" }}
                      width={1}
                      overflow={"hidden"}
                      borderRadius={"0.25rem"}
                    ></Box>
                  </Grid>
                  <Grid item xs={9} sm={8}>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      gap={"0.25rem"}
                      p={"0.5rem"}
                      height={1}
                    >
                      <Typography
                        className={font.className}
                        fontWeight={"700"}
                        color={"#3a3a3c"}
                        sx={{
                          fontSize: {
                            xs: "0.75rem",
                            sm: "1.1rem",
                            // lg: "1.2rem",
                            xl: "1.1rem",
                          },
                        }}
                      >
                        Abay Homes realestate
                      </Typography>
                      <Typography
                        className={font.className}
                        fontWeight={"500"}
                        color={"#3a3a3c"}
                        sx={{
                          fontSize: {
                            xs: "0.75rem",
                            sm: "0.875rem",
                            md: "1rem",
                          },
                        }}
                      >
                        Piassa-arada project
                      </Typography>
                      <Typography
                        className={font.className}
                        fontWeight={"700"}
                        fontSize={{
                          xs: "1rem",
                          md: "1.375rem",
                          lg: "1.1rem",
                        }}
                        mt={"auto"}
                        color={"#3a3a3abf"}
                      >
                        $ 110,000/sqms
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3.5} xl={4} id="contact-info">
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={{ xs: "0.5rem", md: "0.75rem" }}
            alignItems={{ xs: "center", md: "flex-start" }}
            height={1}
          >
            <Typography
              className={font.className}
              textTransform={"capitalize"}
              fontSize={{ xs: "1.2rem", sm: "1.5rem" }}
            >
              Contact Info
            </Typography>
            <Typography
              className={font.className}
              fontWeight={"500"}
              color={"#3a3a3c"}
              fontSize={{ xs: "0.85rem", sm: "1rem" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              Bole, Shoa Dabo, Rayumma mall 5th floor 503
            </Typography>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              fontSize={{ xs: "0.85rem", sm: "1rem" }}
            >
              <Typography
                className={font.className}
                fontWeight={"500"}
                color={"#3a3a3cbf"}
                fontSize={"inherit"}
              >
                Phone:
              </Typography>
              <Typography
                className={font.className}
                color={"#3a3a3c"}
                fontSize={"inherit"}
              >
                +251 91 938 5608
              </Typography>
            </Box>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              fontSize={{ xs: "0.85rem", sm: "1rem" }}
            >
              <Typography
                className={font.className}
                fontWeight={"500"}
                color={"#3a3a3cbf"}
                fontSize={"inherit"}
              >
                email:
              </Typography>
              <Typography
                className={font.className}
                color={"#3a3a3c"}
                fontSize={"inherit"}
              >
                riseaddisproperties@gmail.com
              </Typography>
            </Box>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              fontSize={{ xs: "0.85rem", sm: "1rem" }}
            >
              <Typography
                className={font.className}
                fontWeight={"500"}
                fontSize={"inherit"}
                color={"#3a3a3cbf"}
              >
                Website:
              </Typography>
              <Typography
                className={font.className}
                color={"#3a3a3c"}
                fontSize={"inherit"}
              >
                www.riseaddis.com
              </Typography>
            </Box>
            <Box
              display={"flex"}
              gap={"1rem"}
              mt={"1rem"}
              height={1}
              alignItems={"center"}
            >
              <Link
                href="https://www.facebook.com/Luxuryhomeinaddis"
                color={"rise.main"}
                sx={{ "&:hover": { color: "addis.dark" }, display: "flex" }}
              >
                <Box
                  component={"img"}
                  src="/social/facebook.png"
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@rise_addis_property"
                color={"rise.main"}
                sx={{ "&:hover": { color: "addis.dark" }, display: "flex" }}
              >
                <Box
                  component={"img"}
                  src="/social/tiktok.png"
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href="#youtube"
                color={"rise.main"}
                sx={{ "&:hover": { color: "addis.dark" }, display: "flex" }}
              >
                <Box
                  component={"img"}
                  src="/social/youtube.png"
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href="https://www.instagram.com/rise_addis_property"
                color={"rise.main"}
                sx={{ "&:hover": { color: "addis.dark" }, display: "flex" }}
              >
                <Box
                  component={"img"}
                  src="/social/instagram.png"
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href="#google"
                color={"rise.main"}
                sx={{ "&:hover": { color: "addis.dark" }, display: "flex" }}
              >
                <Box
                  component={"img"}
                  src="/social/google.png"
                  width={25}
                  height={25}
                />
              </Link>{" "}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Footer;
