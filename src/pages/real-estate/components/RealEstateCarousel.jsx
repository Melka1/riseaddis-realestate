import CarouselContainer from "@/components/Carousel";
import ProjectDescList from "@/components/Project/ProjectDescList";
import { Box, Typography, Grid } from "@mui/material";
import styles from "../styles/animation.module.css";

function RealEstateCarousel() {
  return (
    <Box minHeight={"80vh"}>
      <CarouselContainer
        type={"small"}
        autoplay={true}
        infinite={true}
        speed={3000}
        // realestate={true}
      >
        <Box position={"relative"}>
          <Box
            component={"img"}
            src={`/images/abay-homes-logo.png`}
            width={1}
            sx={{
              aspectRatio: "16/6",
              objectFit: "cover",
            }}
          />

          <Box
            position={"absolute"}
            top={0}
            height={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid container spacing={4} width={"70%"}>
              <Grid item xs={6} position={"relative"}>
                <Box
                  position={"relative"}
                  sx={{
                    "&:hover img:first-of-type": {
                      opacity: 0,
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    position={"relative"}
                    src={`/images/project17.jpg`}
                    width={1}
                    sx={{
                      objectFit: "cover",
                      zIndex: 4,
                      transition: "all ease-in-out 0.5s",
                    }}
                  />
                  <Box
                    position={"absolute"}
                    top={0}
                    left={0}
                    component={"img"}
                    src={`/images/project16.jpg`}
                    width={1}
                    sx={{
                      objectFit: "cover",
                      zIndex: 3,
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  height={1}
                  display={"flex"}
                  flexDirection={"column"}
                  bgcolor={"background.lighter"}
                  justifyContent={"space-around"}
                  p={2}
                  position={"relative"}
                >
                  <Typography
                    className="animatedTitle"
                    fontSize={"2.5rem"}
                    color={"rise.main"}
                    fontWeight={700}
                    position={"relative"}
                    sx={{
                      // animation: `${styles.verticalSlide} 5s`,
                      transition: "ease-in",
                      animationDelay: 0,
                    }}
                  >
                    Abay Homes RealEstate
                  </Typography>
                  <Typography
                    className="animatedSubtitle"
                    fontSize={"1.8rem"}
                    fontWeight={"bold"}
                    color={"rise.main"}
                    position={"relative"}
                    sx={{
                      // animation: `${styles.verticalSlide} 5s`,
                      transition: "ease-in",
                      animationDelay: 0,
                    }}
                  >
                    Gotera-Kera Project
                  </Typography>
                  <Box
                    className="animated-list"
                    position={"relative"}
                    sx={{
                      // animation: `${styles.horizontalSlide} 5s`,
                      transition: "ease-in",
                      "&>.project-desc:nth-of-type(2n+1)": {
                        bgcolor: "lightHover",
                      },
                      "&>.project-desc:nth-of-type(2n+1) .desc-divider": {
                        visibility: "hidden",
                      },
                    }}
                  >
                    <ProjectDescList
                      name={"Location"}
                      value={"Goter-Kera Area"}
                      type={"small"}
                    />
                    <ProjectDescList
                      name={"Building Footprint"}
                      value={"519.64 sqms"}
                      type={"small"}
                    />
                    <ProjectDescList
                      name={"Number of Apartments"}
                      value={71}
                      type={"small"}
                    />
                    <ProjectDescList
                      name={"Numer of floors"}
                      value={22}
                      type={"small"}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box position={"relative"}>
          <Box
            component={"img"}
            src={`/images/image7.png`}
            width={1}
            sx={{
              aspectRatio: "16/6",
              objectFit: "cover",
            }}
          />

          <Box
            position={"absolute"}
            top={0}
            height={1}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Grid container spacing={4} width={"70%"}>
              <Grid item xs={6} position={"relative"}>
                <Box
                  position={"relative"}
                  sx={{
                    "&:hover img:first-of-type": {
                      opacity: 0,
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    position={"relative"}
                    src={`/images/project12.jpg`}
                    width={1}
                    sx={{
                      objectFit: "cover",
                      zIndex: 4,
                      transition: "all ease-in-out 0.5s",
                    }}
                  />
                  <Box
                    position={"absolute"}
                    top={0}
                    left={0}
                    component={"img"}
                    src={`/images/project13.jpg`}
                    width={1}
                    sx={{
                      objectFit: "cover",
                      zIndex: 3,
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  height={1}
                  display={"flex"}
                  flexDirection={"column"}
                  bgcolor={"background.lighter"}
                  justifyContent={"space-around"}
                  p={2}
                  position={"relative"}
                >
                  <Typography
                    className="animatedTitle"
                    fontSize={"2.5rem"}
                    color={"rise.main"}
                    fontWeight={700}
                    position={"relative"}
                    sx={{
                      // animation: `${styles.verticalSlide} 5s`,
                      transition: "ease-in",
                      animationDelay: 0,
                    }}
                  >
                    Dalol RealEstate
                  </Typography>
                  <Typography
                    className="animatedSubtitle"
                    fontSize={"1.8rem"}
                    fontWeight={"bold"}
                    color={"rise.main"}
                    position={"relative"}
                    sx={{
                      // animation: `${styles.verticalSlide} 5s`,
                      transition: "ease-in",
                      animationDelay: 0,
                    }}
                  >
                    Kera Project Phase 1
                  </Typography>
                  <Box
                    className="animated-list"
                    position={"relative"}
                    sx={{
                      // animation: `${styles.horizontalSlide} 5s`,
                      transition: "ease-in",
                      animationDelay: 0,

                      "&>.project-desc:nth-of-type(2n+1)": {
                        bgcolor: "lightHover",
                      },
                      "&>.project-desc:nth-of-type(2n+1) .desc-divider": {
                        visibility: "hidden",
                      },
                    }}
                  >
                    <ProjectDescList
                      name={"Location"}
                      value={"Goter-Kera Area"}
                      type={"small"}
                    />
                    <ProjectDescList
                      name={"Building Footprint"}
                      value={"519.64 sqms"}
                      type={"small"}
                    />
                    <ProjectDescList
                      name={"Number of Apartments"}
                      value={71}
                      type={"small"}
                    />
                    <ProjectDescList
                      name={"Numer of floors"}
                      value={22}
                      type={"small"}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </CarouselContainer>
    </Box>
  );
}

export default RealEstateCarousel;
