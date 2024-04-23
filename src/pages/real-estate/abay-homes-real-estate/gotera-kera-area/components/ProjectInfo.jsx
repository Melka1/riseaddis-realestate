import CarouselContainer from "@/components/Carousel";
import ProjectDescList from "@/components/Project/ProjectDescList";
import { riseFont } from "@/pages/_app";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { Kufam } from "next/font/google";
import { useStore } from "@/Context/store";

const kufam = Kufam({ subsets: ["arabic"] });

function ProjectInfo({ start, setStart }) {
  const { project } = useStore();
  console.log(project.description);
  const handleAnimate = () => {
    if (!start) {
      setStart(true);
    }
  };
  return (
    <Box
      width={1}
      mt={{ xs: 3, md: 0 }}
      p={{ xs: "0.5rem 1rem", sm: "2rem 4rem", md: "3rem 6rem" }}
      sx={{
        backgroundSize: "cover",
        backgroundImage: "url(/images/image7.png)",
        backgroundPositionY: "100%",
      }}
    >
      <Grid container spacing={8}>
        <Grid
          item
          xs={12}
          md={5}
          flex={3}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography
            className={kufam.className}
            fontSize={{ xs: "1.5rem", md: "2rem" }}
            color={"rise.dark"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            // mt={"2rem"}
          >
            General Information
          </Typography>
          <Divider flexItem />
          <Box
            display={"flex"}
            width={1}
            flexDirection={"column"}
            sx={{
              "&>.project-desc:nth-of-type(2n+1)": { bgcolor: "lightHover" },
              "&>.project-desc:nth-of-type(2n+1) .desc-divider": {
                visibility: "hidden",
              },
            }}
          >
            {project?.description &&
              project.description.map((desc, ind) => (
                <ProjectDescList
                  key={ind}
                  name={desc.type}
                  value={desc.value}
                />
              ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={7} display={"flex"} alignItems={"baseline"}>
          <Box
            width={1}
            height={1}
            display={"flex"}
            alignItems={"center"}
            className="carousel--container"
          >
            <Box width={1}>
              <CarouselContainer
                type={"small"}
                infinite={true}
                autoplay={start}
              >
                <Box
                  onMouseEnter={() => handleAnimate()}
                  component={"img"}
                  src={`/images/abay-homes-logo.png`}
                  width={1}
                  height={1}
                  sx={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    userSelect: "none",
                  }}
                />
                {[2, 3, 4, 9, 10, 11].map((item) => (
                  <Box
                    key={item}
                    component={"img"}
                    src={`/images/abay-homes${item}.png`}
                    width={1}
                    height={1}
                    sx={{
                      aspectRatio: "16/9",
                      objectFit: "contain",
                      userSelect: "none",
                    }}
                  />
                ))}
              </CarouselContainer>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectInfo;
