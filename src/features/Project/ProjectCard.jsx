import { Avatar, Box, Grid, Link, Stack, Typography } from "@mui/material";
import styles from "./styles/propertiesListing.module.css";
import { LocationOn } from "@mui/icons-material";
import { Montserrat } from "next/font/google";
import MeterSquared from "@/components/MeterSquared";
import { useRouter } from "next/router";
import ImageFromCloudinary from "@/components/ImageFromCloudinary";

const font = Montserrat({ subsets: ["cyrillic"] });

function ProjectCard({
  realEstateName,
  imgUrls,
  siteName,
  price,
  link,
  location,
  deliveryTime,
  progress,
  currency,
  featured,
}) {
  const router = useRouter();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link
        href={link}
        underline="none"
        target="_blank"
        sx={{ cursor: "pointer" }}
      >
        <Box
          width={1}
          display={"flex"}
          flexDirection={"column"}
          overflow="hidden"
          sx={{
            "&:hover>img": { transform: "scale(1.05)" },
          }}
        >
          <Box
            className={styles["property-image-container"]}
            position={"relative"}
            overflow={"hidden"}
            zIndex={3}
            border="1px solid transparent"
          >
            <Stack
              width={1}
              sx={{
                aspectRatio: 16 / 10,
                "&>img": { width: "100%", height: "100%" },
              }}
              overflow={"hidden"}
            >
              <ImageFromCloudinary
                src={imgUrls[1]}
                alt={"site image"}
                width={300}
              />
              <ImageFromCloudinary
                src={imgUrls[0]}
                alt={"site image"}
                back
                width={300}
              />
            </Stack>

            <Box
              position={"absolute"}
              display={"flex"}
              alignItems={"flex-start"}
              width={1}
              p={{ xs: "0.5rem", sm: "1rem" }}
              top={0}
              gap={1}
              justifyContent={"space-between"}
            >
              {location && (
                <Stack
                  maxWidth={"60%"}
                  direction={"row"}
                  color={"white"}
                  alignItems={"center"}
                  sx={{
                    bgcolor: "#595959",
                    p: "0.15rem 0.35rem",
                    borderRadius: "0.25rem",
                    fontSize: "0.85rem",
                  }}
                >
                  <LocationOn />
                  <Typography className={font.className} fontSize={"0.85rem"}>
                    {location}
                  </Typography>
                </Stack>
              )}
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"0.25rem"}
                alignItems={"flex-end"}
                maxWidth={"40%"}
              >
                {featured && (
                  <Typography
                    title={"Featured"}
                    noWrap
                    sx={{
                      bgcolor: "#595959",
                      color: "white",
                      p: "0.15rem 0.35rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    Featured
                  </Typography>
                )}
                {progress && (
                  <Typography
                    title={"Progress - " + progress}
                    noWrap
                    sx={{
                      bgcolor: "#595959",
                      color: "white",
                      p: "0.15rem 0.35rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    {progress}
                  </Typography>
                )}
                {deliveryTime && (
                  <Typography
                    title={"Delivery time - " + deliveryTime}
                    sx={{
                      bgcolor: "#595959",
                      color: "white",
                      p: "0.15rem 0.35rem",
                      borderRadius: "0.25rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    {deliveryTime}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box
              position={"absolute"}
              display={"flex"}
              justifyContent={"space-between"}
              width={1}
              p={{ xs: "0.5rem", sm: "1rem" }}
              bottom={0}
              bgcolor={"rgba(0,0,0,0.3)"}
            >
              {price && (
                <Typography
                  sx={{
                    color: "white",
                    borderRadius: "0.25rem",
                    fontSize: { xs: "1rem", sm: "1.5rem" },
                    fontWeight: "bold",
                    lineHeight: 1,
                    pr: "0.25rem",
                  }}
                >
                  {currency.abbr}
                  <Typography
                    component={"span"}
                    fontSize={{ xs: "1.8rem", sm: "2rem", md: "2.5rem" }}
                    lineHeight={1}
                  >
                    {price}/
                  </Typography>
                  <MeterSquared />
                </Typography>
              )}
              <Avatar
                src="/Logo.svg"
                alt="Logo"
                sx={{
                  bgcolor: "white",
                  ml: "auto",
                  width: { xs: 30, md: 40 },
                  height: { xs: 30, md: 40 },
                }}
              />
            </Box>
          </Box>
          <Box
            width={1}
            display={"flex"}
            flexDirection={"column"}
            p={2}
            color={"rise.contrastText"}
            bgcolor={"#595959"}
          >
            <Typography noWrap fontSize={"1.25rem"} textTransform={"uppercase"}>
              {realEstateName}
            </Typography>
            <Typography fontWeight={"bold"}>{siteName}</Typography>
          </Box>
        </Box>
      </Link>
    </Grid>
  );
}

export default ProjectCard;
