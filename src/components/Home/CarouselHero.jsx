import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "/images/1.jpg",
  },
  {
    label: "Bird",
    imgPath: "/images/2.jpg",
  },
  {
    label: "Bali, Indonesia",
    imgPath: "/images/3.jpg",
  },
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "/images/4.jpg",
  },
];

// const images = [
//   {
//     label: "San Francisco – Oakland Bay Bridge, United States",
//     imgPath:
//       "https://res.cloudinary.com/dov9kdlci/image/upload/v1708298576/pexels-curtis-adams-3288100_qwnodj.jpg",
//   },
//   {
//     label: "Bird",
//     imgPath:
//       "https://res.cloudinary.com/dov9kdlci/image/upload/v1708298574/pexels-curtis-adams-3288103_owdhcz.jpg",
//   },
//   {
//     label: "Bali, Indonesia",
//     imgPath:
//       "https://res.cloudinary.com/dov9kdlci/image/upload/v1708298573/pexels-curtis-adams-3288102_zgvxzw.jpg",
//   },
//   {
//     label: "San Francisco – Oakland Bay Bridge, United States",
//     imgPath:
//       "https://res.cloudinary.com/dov9kdlci/image/upload/v1708298572/pexels-the-lazy-artist-gallery-1642125_im2kq4.jpg",
//   },
//   {
//     label: "Bird",
//     imgPath:
//       "https://res.cloudinary.com/dov9kdlci/image/upload/v1708298560/pexels-timur-saglambilek-87223_uwc6yo.jpg",
//   },
//   {
//     label: "Bali, Indonesia",
//     imgPath:
//       "https://res.cloudinary.com/dov9kdlci/image/upload/v1708298559/pexels-david-mcbee-1546168_bpplg9.jpg",
//   },
//   {
//     label: "San Francisco – Oakland Bay Bridge, United States",
//     imgPath:
//       "https://res.cloudinary.com/dov9kdlci/image/upload/v1708298557/pexels-binyamin-mellish-106399_qwkabj.jpg",
//   },
//   {
//     label: "Bird",
//     imgPath:
//       "https://res.cloudinary.com/dov9kdlci/image/upload/v1708298540/pexels-curtis-adams-3288104_zabnb6.jpg",
//   },
//   {
//     label: "Bali, Indonesia",
//     imgPath:
//       "https://res.cloudinary.com/dov9kdlci/image/upload/v1708298537/pexels-expect-best-323780_ly7hmi.jpg",
//   },
//   {
//     label: "Bird",
//     imgPath:
//       "https://res.cloudinary.com/dov9kdlci/image/upload/v1708298537/pexels-binyamin-mellish-1396122_ucz8d5.jpg",
//   },
//   {
//     label: "Bali, Indonesia",
//     imgPath:
//       "https://res.cloudinary.com/dov9kdlci/image/upload/v1708298524/pexels-alex-staudinger-1732414_ofhsux.jpg",
//   },
// ];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function SwipeableTextMobileStepper() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        arrows={true}
        transitionDuration={2500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        rtl={false}
        rewindable={true}
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((step, index) => (
          <div key={step.label}>
            <Box
              component="img"
              sx={{
                display: "block",
                overflow: "hidden",
                width: "100%",
                aspectRatio: "16/7",
              }}
              src={step.imgPath}
              alt={step.label}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
