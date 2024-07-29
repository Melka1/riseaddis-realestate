import CarouselContainer from "@/components/Carousel";
// import ProjectDescList from "@/components/Project/ProjectDescList";
import { Box, Typography, Grid } from "@mui/material";
import styles from "../styles/animation.module.css";
import ProjectDescList from "@/features/Project/ProjectDescList";

function RealEstateCarousel({ sites }) {
  return (
    <Box height={{ xs: "40vh", md: "80vh" }}>
      <CarouselContainer
        type={"small"}
        autoplay={true}
        infinite={true}
        speed={4500}
      >
        {sites.map((site) => (
          <Box
            position={"relative"}
            height={1}
            key={site.id}
            sx={{
              aspectRatio: { xs: "4/3", sm: "16/9", md: "16/6" },
              overflow: "hidden",
            }}
          >
            <Box
              component={"img"}
              src={site.realEstate.images[0]}
              width={1}
              height={1}
              sx={{
                objectFit: "cover",
                animation: `${styles.scale} 10s infinite`,
              }}
              alt="site image"
            />

            <Box
              position={"absolute"}
              top={0}
              height={1}
              width={1}
              display={{ xs: "none", md: "flex" }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Grid container spacing={4} width={"70%"}>
                <Grid item xs={6} position={"relative"}>
                  <Box
                    position={"relative"}
                    height={1}
                    maxHeight={"350px"}
                    sx={{
                      "&:hover img:first-of-type": {
                        opacity: 0,
                      },
                    }}
                  >
                    <Box
                      component={"img"}
                      position={"relative"}
                      src={site.images[0]}
                      width={1}
                      height={1}
                      sx={{
                        objectFit: "cover",
                        zIndex: 4,
                        transition: "all ease-in-out 0.5s",
                      }}
                      alt="site image"
                    />
                    <Box
                      position={"absolute"}
                      top={0}
                      left={0}
                      width={1}
                      height={1}
                      component={"img"}
                      src={site.images[1]}
                      sx={{
                        objectFit: "cover",
                        zIndex: 3,
                      }}
                      alt="site image"
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
                        transition: "ease-in",
                        animationDelay: 0,
                      }}
                    >
                      {site.realEstate.name}
                    </Typography>
                    <Typography
                      className="animatedSubtitle"
                      fontSize={"1.8rem"}
                      fontWeight={"bold"}
                      color={"rise.main"}
                      position={"relative"}
                      sx={{
                        transition: "ease-in",
                        animationDelay: 0,
                      }}
                    >
                      {site.name}
                    </Typography>
                    <Box
                      className="animated-list"
                      position={"relative"}
                      sx={{
                        transition: "ease-in",
                        "&>.project-desc:nth-of-type(2n+1)": {
                          bgcolor: "lightHover",
                        },
                        "&>.project-desc:nth-of-type(2n+1) .desc-divider": {
                          visibility: "hidden",
                        },
                      }}
                    >
                      {site.location && (
                        <ProjectDescList
                          name={"Location"}
                          value={site.location}
                          type={"small"}
                        />
                      )}
                      {site.footPrintArea && (
                        <ProjectDescList
                          name={"Building Footprint"}
                          value={site.footPrintArea}
                          area
                          type={"small"}
                        />
                      )}
                      {site.numberOfUnits && (
                        <ProjectDescList
                          name={"Number of Units"}
                          value={site.numberOfUnits}
                          type={"small"}
                        />
                      )}
                      {site.floors && (
                        <ProjectDescList
                          name={"Number of floors"}
                          value={site.floors}
                          type={"small"}
                        />
                      )}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        ))}
      </CarouselContainer>
    </Box>
  );
}

export default RealEstateCarousel;
