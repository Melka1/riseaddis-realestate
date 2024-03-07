import { useState } from "react";
import {
  Bathtub,
  Bed,
  CameraAltSharp,
  FavoriteBorderSharp,
  FavoriteSharp,
  LocationOnSharp,
  ZoomOutMapSharp,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import styles from "./styles/propertiesListing.module.css";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";

const font = Montserrat({ subsets: ["cyrillic"] });

function PropertyListing({ imgSrc, openDetail, id }) {
  const router = useRouter();
  const [like, setLike] = useState(false);
  return (
    <Box
      width={1}
      className={styles["property-image"]}
      component={"div"}
      // href="http://localhost:3000/property?id=4"
      onClick={() => {
        // openDetail(true);
        router.push(`/property?id=${id}`);
      }}
    >
      <Box position={"relative"} overflow={"hidden"}>
        <Box
          component={"img"}
          width={1}
          // src="https://res.cloudinary.com/dov9kdlci/image/upload/v1708298618/pexels-pixabay-534151_hdrhn7.jpg"
          // src="/images/10.jpg"
          src={imgSrc}
          sx={{ aspectRatio: "16/10" }}
        ></Box>
        <Box
          position={"absolute"}
          display={"flex"}
          width={1}
          p={"1rem"}
          top={0}
          justifyContent={"space-between"}
        >
          <Typography
            sx={{
              bgcolor: "gray",
              color: "white",
              p: "0.15rem 0.35rem",
              borderRadius: "0.25rem",
              fontSize: "0.75rem",
            }}
          >
            Featured
          </Typography>
          <Box display={"flex"} flexDirection={"row"} gap={"1rem"}>
            <Typography
              sx={{
                bgcolor: "gray",
                color: "white",
                p: "0.15rem 0.35rem",
                borderRadius: "0.25rem",
                fontSize: "0.75rem",
              }}
            >
              Sales
            </Typography>
            <Typography
              sx={{
                bgcolor: "gray",
                color: "white",
                p: "0.15rem 0.35rem",
                borderRadius: "0.25rem",
                fontSize: "0.75rem",
              }}
            >
              Available
            </Typography>
          </Box>
        </Box>
        <Box
          position={"absolute"}
          display={"flex"}
          justifyContent={"flex-end"}
          width={1}
          p={"1rem"}
          bottom={0}
        >
          <Box
            color={"white"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={"0.5rem"}
          >
            <CameraAltSharp fontSize="1rem" />
            <Typography className={font.className}>7</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        p={"1rem"}
        bgcolor={"rgba(0,0,0,0.1)"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.25rem"}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={"1rem"}
          alignItems={"center"}
        >
          <Typography
            className={font.className}
            variant="h5"
            fontSize={"1rem"}
            fontWeight={"500"}
            letterSpacing={"0.4px"}
          >
            Luxury Apartments Two Bedroom
          </Typography>
          <IconButton onClick={() => setLike((prev) => !prev)}>
            {!like ? (
              <FavoriteBorderSharp fontSize="medium" />
            ) : (
              <FavoriteSharp fontSize="medium" />
            )}
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: "white", m: "0.5rem 0" }} />
        <Box
          display={"flex"}
          flexDirection={"row"}
          color={"black.main"}
          gap={"1rem"}
        >
          <Box display={"flex"} flexDirection={"row"} gap={"0.5rem"}>
            <Bed fontSize={"1rem"} />
            <Typography fontSize={"0.8rem"} className={font.className}>
              2
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"0.5rem"}>
            <Bathtub fontSize={"1rem"} />
            <Typography fontSize={"0.8rem"} className={font.className}>
              1
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"0.5rem"}>
            <ZoomOutMapSharp fontSize={"1rem"} />
            <Typography
              fontSize={"0.8rem"}
              className={font.className}
              position={"relative"}
            >
              128 m
              <span
                style={{ position: "absolute", top: "0", fontSize: "0.5rem" }}
              >
                2
              </span>
            </Typography>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"row"} gap={"0.5rem"}>
          <LocationOnSharp fontSize={"1rem"} />
          <Typography fontSize={"0.8rem"} className={font.className}>
            Edna Mall, Addis Ababa
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PropertyListing;
