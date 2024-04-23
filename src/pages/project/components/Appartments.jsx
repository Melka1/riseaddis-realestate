import { useStore } from "@/Context/store";
import CarouselContainer from "@/components/Carousel";
import ProjectDescList from "@/components/Project/ProjectDescList";
import { riseFont } from "@/pages/_app";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { Kufam } from "next/font/google";

const kufam = Kufam({ subsets: ["arabic"] });

function Apartments() {
  const { project } = useStore();

  if (!project?.name) return <></>;

  return (
    <Box mt={"2rem"}>
      <Typography
        className={kufam.className}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        color={"rise.dark"}
        fontWeight={"bold"}
        mb={0.5}
      >
        Apartments
      </Typography>
      {project.apartments?.desc && (
        <Typography
          className={kufam.className}
          fontSize={{ xs: "0.8rem", md: "1rem" }}
          color={"rise.main"}
          mb={2}
        >
          {project.apartments.desc}
        </Typography>
      )}
      <CarouselContainer showdots={false} removeArrow={false}>
        {project.apartments.list.map((apartment) => (
          <Grid
            container
            key={apartment.title}
            className={apartment.title}
            bgcolor={"riseLight.light"}
            p={"1rem"}
            spacing={{ xs: 2, md: 0 }}
          >
            <Grid
              item
              xs={12}
              md={6}
              pr={"1rem"}
              sx={{
                "&>.project-desc:nth-of-type(2n+1)": { bgcolor: "lightHover" },
                "&>.project-desc:nth-of-type(2n+1) .desc-divider": {
                  visibility: "hidden",
                },
              }}
            >
              <Typography
                className={riseFont.className}
                fontSize={{ xs: "1.2rem", md: "1.5rem" }}
                color={"rise.dark"}
                fontWeight={"bold"}
                textAlign={"center"}
                mb={"1rem"}
              >
                {apartment.title}
              </Typography>
              <ProjectDescList
                type={"small"}
                name={"No of Bedroom"}
                value={apartment.bedroom}
              />
              <ProjectDescList
                type={"small"}
                name={"No of Bathroom"}
                value={apartment.bathroom}
              />
              <ProjectDescList
                type={"small"}
                name={"Balcony"}
                value={apartment.balcony ? "Yes" : "No"}
              />
              <ProjectDescList
                type={"small"}
                name={"Net Area"}
                value={apartment.netArea + " sqms"}
              />
              <ProjectDescList
                type={"small"}
                name={"Common Area"}
                value={apartment.commonArea + " sqms"}
              />
              <ProjectDescList
                type={"small"}
                name={"Total Area"}
                value={apartment.totalArea + " sqms"}
              />
              <Divider flexItem sx={{ m: "0.5rem 0" }} />
              <ProjectDescList
                type={"small"}
                name={"Available Apartments"}
                value={apartment.available}
              />
            </Grid>
            <Grid item xs={12} md={6} display={"flex"} alignItems={"flex-end"}>
              <Box width={1}>
                <CarouselContainer
                  showdots={true}
                  autoplay={true}
                  infinite={true}
                  removeArrow={true}
                >
                  {apartment.images.map((img, ind) => (
                    <Box
                      key={ind}
                      component={"img"}
                      width={1}
                      src={img}
                      sx={{ objectFit: "contain", aspectRatio: "4/3" }}
                    />
                  ))}
                </CarouselContainer>
              </Box>
            </Grid>
          </Grid>
        ))}
      </CarouselContainer>
    </Box>
  );
}

export default Apartments;
