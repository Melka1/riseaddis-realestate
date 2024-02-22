import { Box, Grid, Typography } from "@mui/material";
import Section from "../../containers/section";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["cyrillic"] });

function Footer() {
  return (
    <Section>
      <Grid container spacing={12}>
        <Grid item md={4}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"1rem"}
          >
            <Image src={"/Logo.png"} width={96} height={96} alt="logo" />
            <Typography
              variant="h3"
              className={font.className}
              fontWeight={"bold"}
              // maxWidth={"80%"}
            >
              RISE ADDIS{" "}
              <Box
                // variant="h3"
                component={"p"}
                fontSize={"1.5rem"}
                className={font.className}
                fontWeight={"400"}
              >
                PROPERTIES
              </Box>
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box display={"flex"} flexDirection={"column"} gap={"0.75rem"}>
            <Typography
              className={font.className}
              textTransform={"capitalize"}
              fontSize={"1.5rem"}
            >
              Recent Properties
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={4}>
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
              <Grid item md={8}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"0.25rem"}
                  p={"0.5rem"}
                  height={1}
                >
                  <Typography
                    className={font.className}
                    fontWeight={"500"}
                    color={"#3a3a3c"}
                    sx={{ fontSize: "0.875rem" }}
                  >
                    2972 Westheimer Rd. Santa
                  </Typography>
                  <Typography
                    className={font.className}
                    fontWeight={"500"}
                    color={"#3a3a3c"}
                    sx={{ fontSize: "0.875rem" }}
                  >
                    Ana, Illinois 85486.
                  </Typography>
                  <Typography
                    className={font.className}
                    fontWeight={"700"}
                    fontSize={"1.375rem"}
                    mt={"auto"}
                    color={"#3a3a3cbf"}
                  >
                    $ 20,000
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Box
                  component={"img"}
                  // src="https://res.cloudinary.com/dov9kdlci/image/upload/v1708298537/pexels-expect-best-323780_ly7hmi.jpg"
                  src="/images/8.jpg"
                  sx={{ aspectRatio: "1" }}
                  width={1}
                  overflow={"hidden"}
                  borderRadius={"0.25rem"}
                ></Box>
              </Grid>
              <Grid item md={8}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"0.25rem"}
                  p={"0.5rem"}
                  height={1}
                >
                  <Typography
                    className={font.className}
                    fontWeight={"500"}
                    color={"#3a3a3c"}
                    sx={{ fontSize: "0.875rem" }}
                  >
                    2972 Westheimer Rd. Santa
                  </Typography>
                  <Typography
                    className={font.className}
                    fontWeight={"500"}
                    color={"#3a3a3c"}
                    sx={{ fontSize: "0.875rem" }}
                  >
                    Ana, Illinois 85486.
                  </Typography>
                  <Typography
                    className={font.className}
                    fontWeight={"700"}
                    fontSize={"1.375rem"}
                    mt={"auto"}
                    color={"#3a3a3abf"}
                  >
                    $ 20,000
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box display={"flex"} flexDirection={"column"} gap={"0.75rem"}>
            <Typography
              className={font.className}
              textTransform={"capitalize"}
              fontSize={"1.5rem"}
            >
              Contact Info
            </Typography>
            <Typography
              className={font.className}
              fontWeight={"500"}
              color={"#3a3a3c"}
              fontSize={"1rem"}
            >
              2972 Westheimer Rd. Santa Ana, Illinois 85486.
            </Typography>
            <Box display={"flex"} gap={"0.5rem"}>
              <Typography
                className={font.className}
                fontWeight={"500"}
                color={"#3a3a3cbf"}
              >
                Phone:
              </Typography>
              <Typography className={font.className} color={"#3a3a3c"}>
                (239) 555-0108
              </Typography>
            </Box>
            <Box display={"flex"} gap={"0.5rem"}>
              <Typography
                className={font.className}
                fontWeight={"500"}
                color={"#3a3a3cbf"}
              >
                email:
              </Typography>
              <Typography className={font.className} color={"#3a3a3c"}>
                abcd@domain.com
              </Typography>
            </Box>
            <Box display={"flex"} gap={"0.5rem"}>
              <Typography
                className={font.className}
                fontWeight={"500"}
                color={"#3a3a3cbf"}
              >
                Website:
              </Typography>
              <Typography className={font.className} color={"#3a3a3c"}>
                www.riseaddis.com
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Footer;
