import CarouselContainer from "@/components/Carousel";
import { Box, Typography } from "@mui/material";
import { Kufam } from "next/font/google";

const kufam = Kufam({ subsets: ["arabic"] });

function Gallery() {
  return (
    <Box>
      <Typography
        className={kufam.className}
        fontSize={"2rem"}
        color={"rise.dark"}
        fontWeight={"bold"}
        mt={"2rem"}
      >
        Gallery
      </Typography>
      <Box width={1} className="carousel--container">
        <CarouselContainer type={"large"} infinite={true} autoplay={true}>
          <Box
            component={"img"}
            src={`/images/abay-homes-logo.png`}
            width={1}
            sx={{
              aspectRatio: "16/9",
              objectFit: "cover",
              userSelect: "none",
            }}
          />
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Box
              key={item}
              component={"img"}
              src={`/images/project${item}.jpg`}
              width={1}
              sx={{
                aspectRatio: "16/9",
                height: "auto",
                objectFit: "cover",
                userSelect: "none",
              }}
            />
          ))}
        </CarouselContainer>
      </Box>
    </Box>
  );
}

export default Gallery;
