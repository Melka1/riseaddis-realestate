import { Box, Grid, Link, Typography } from "@mui/material";
import Section from "../../containers/section";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";

import { Fragment } from "react";
import MeterSquared from "../MeterSquared";

const font = Montserrat({ subsets: ["cyrillic"] });

function Footer({ realEstates }) {
  const router = useRouter();
  return (
    <Section type={"footer"}>
      <Grid
        mb={{ xs: "1rem", sm: "0" }}
        container
        spacing={{ xs: 4, sm: 2, md: 12, lg: 6, xl: 8 }}
      >
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
              {realEstates.slice(0, 2).map((realEstate, index) => {
                if (!realEstate.sites[0]?.name)
                  return <Fragment key={index}></Fragment>;
                return (
                  <Box
                    key={index}
                    component={"a"}
                    href={`/real-estate/${realEstate.link}/${realEstate.sites[0].link}`}
                    sx={{
                      cursor: "pointer",
                      "&:hover": { bgcolor: "action.hover" },
                    }}
                  >
                    <Grid container spacing={{ md: 2 }}>
                      <Grid item xs={3} sm={4}>
                        <Box
                          component={"img"}
                          src={realEstate.images[0]}
                          sx={{ aspectRatio: "1", objectFit: "cover" }}
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
                            {realEstate.name}
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
                            {realEstate.sites[0].name}
                          </Typography>
                          {realEstate.sites[0]?.price ? (
                            <Typography
                              title="price per square meter"
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
                              ETB {realEstate.sites[0]?.price}/
                              <MeterSquared />
                            </Typography>
                          ) : (
                            <Typography
                              title="location"
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
                              {realEstate.sites[0]?.location}
                            </Typography>
                          )}
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                );
              })}
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
            <Box
              display={"flex"}
              gap={"0.5rem"}
              fontSize={{ xs: "0.85rem", sm: "0.9rem" }}
            >
              <Typography
                className={font.className}
                fontWeight={"500"}
                color={"#3a3a3cbf"}
                fontSize={"inherit"}
              >
                Location:
              </Typography>
              <Typography
                className={font.className}
                fontWeight={"500"}
                color={"#3a3a3c"}
                fontSize={{ xs: "0.85rem", sm: "0.9rem" }}
                textAlign={{ xs: "center", md: "left" }}
              >
                Bole, Shoa Dabo, Rayumma mall 5th floor 503
              </Typography>
            </Box>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              fontSize={{ xs: "0.85rem", sm: "0.9rem" }}
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
                0931044444
              </Typography>
              <Typography
                className={font.className}
                color={"#3a3a3c"}
                fontSize={"inherit"}
              >
                or
              </Typography>
              <Typography
                className={font.className}
                color={"#3a3a3c"}
                fontSize={"inherit"}
              >
                0931115566
              </Typography>
            </Box>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              fontSize={{ xs: "0.85rem", sm: "0.9rem" }}
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
                riseaddis1@gmail.com
              </Typography>
            </Box>
            <Box
              display={"flex"}
              gap={"0.5rem"}
              fontSize={{ xs: "0.85rem", sm: "0.9rem" }}
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
                href="http://www.youtube.com/@RiseAddisProperties"
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
                href="mailto:riseaddis1@gmail.com"
                color={"rise.main"}
                sx={{ "&:hover": { color: "addis.dark" }, display: "flex" }}
              >
                <Box
                  component={"img"}
                  src="/social/google.png"
                  width={25}
                  height={25}
                />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Footer;
