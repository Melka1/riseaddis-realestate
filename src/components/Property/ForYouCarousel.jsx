import Carousel from "react-multi-carousel";
import PropertyListing from "../PropertyListing";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function ForYouCarousel({ openDetail, lists }) {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true}
      autoPlay={false}
      keyBoardControl={true}
      arrows={true}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["mobile"]}
      itemClass="carousel-item-padding-40-px"
    >
      {lists?.map((list, index) => (
        <Box key={index} p={"0 0.5rem"}>
          <PropertyListing
            openDetail={openDetail}
            imgSrc={list?.images && list.images[0]}
            count={list?.images && list.images.length}
            id={list?.id}
            bedroom={list?.bedroom}
            bathroom={list?.bathroom}
            area={list?.area}
            price={list?.price}
            name={list?.name}
            location={list?.location}
          />
        </Box>
      ))}
    </Carousel>
  );
}

export default ForYouCarousel;
