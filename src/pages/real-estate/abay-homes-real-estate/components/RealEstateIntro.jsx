import CarouselContainer from "@/components/Carousel";
import { Box, Grid } from "@mui/material";
function RealEstateIntro() {
  return (
    <Box
    // p={{ xs: "1rem 1rem", sm: "2rem 4rem", md: "4rem 8rem" }}
    >
      <Grid container>
        <Grid item display={"flex"} xs={12}>
          <Box width={1}>
            <CarouselContainer type={"large"} infinite={true} autoplay={true}>
              {["-logo", 2, 3, 4].map((image, index) => (
                <Box
                  key={index}
                  component={"img"}
                  src={`/images/abay-homes${image}.png`}
                  width={1}
                  height={1}
                  sx={{
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    userSelect: "none",
                  }}
                />
              ))}
            </CarouselContainer>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RealEstateIntro;
