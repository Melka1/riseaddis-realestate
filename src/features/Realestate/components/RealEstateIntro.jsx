import CarouselContainer from "@/components/Carousel";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./animation.module.css";
import { riseFont } from "@/pages/_app";

let words = [
  "One Bedrooms",
  "Two Bedrooms",
  "Three Bedrooms",
  "Studios",
  "Shops",
  "ባለ 1 መኝታ",
  "ባለ 2 መኝታ",
  "ባለ 3 መኝታ",
  "ስቱዲዮ",
  "ሱቆች",
];
function RealEstateIntro({ realEstateImages }) {
  return (
    <Box>
      <Grid container>
        <Grid item display={"flex"} xs={12}>
          <Box width={1} position={"relative"}>
            {realEstateImages && (
              <CarouselContainer type={"large"} infinite={true} autoplay={true}>
                {realEstateImages?.map((image, index) => (
                  <Box
                    key={index}
                    component={"img"}
                    src={image}
                    width={1}
                    height={1}
                    sx={{
                      aspectRatio: { xs: "16/9", md: "16/6" },
                      objectFit: "cover",
                      userSelect: "none",
                    }}
                    alt="real estate image"
                  />
                ))}
              </CarouselContainer>
            )}
            <Box
              position={"absolute"}
              top={0}
              left={0}
              width={1}
              height={1}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
              <Typography
                position={"relative"}
                sx={{ transform: "translateX(5rem)" }}
              >
                {words.map((word, index) => (
                  <Typography
                    position={"absolute"}
                    key={index}
                    minWidth={{ xs: "150px", md: "600px" }}
                    p={"0.5rem 1.5rem"}
                    bgcolor={"rgba(0,0,0,0.4)"}
                    noWrap
                    color={"white"}
                    fontSize={{ xs: "1.3rem", sm: "1.8rem", md: "4rem" }}
                    fontWeight={"bold"}
                    component={"span"}
                    overflow={"hidden"}
                    className={riseFont.className}
                    sx={{
                      animation: `${styles.slideIn} ${
                        words.length * 3
                      }s linear infinite`,
                      animationDelay: `${index * 3}s`,
                      opacity: 0,
                    }}
                  >
                    {word}
                  </Typography>
                ))}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RealEstateIntro;
