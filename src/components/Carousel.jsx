import Carousel from "react-multi-carousel";
import carouselBreakPoints from "@/data/responsive";
import "react-multi-carousel/lib/styles.css";
import { Box, Button } from "@mui/material";
import styles from "../styles/Home.module.css";

const CustomButtonList = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group">
      {/* <Box display={"flex"} bgcolor={"rise.main"} className="tab-container"> */}
      <Button
        LinkComponent={"a"}
        size="large"
        color="riseLight"
        variant="contained"
        sx={{ borderRadius: "0", boxShadow: "none" }}
        onClick={() => onTabChange(0)}
      >
        Progress Based
      </Button>
      <Button
        LinkComponent={"a"}
        color="riseLight"
        size="large"
        onClick={() => onTabChange(1)}
        sx={{ borderRadius: "0", boxShadow: "none" }}
      >
        Time Based
      </Button>
      {/* </Box> */}
    </div>
  );
};
function CarouselContainer({
  children,
  type,
  infinite,
  autoplay,
  speed,
  showdots,
  removeArrow,
  realestate,
  customButton,
}) {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      // centerMode={true}
      showDots={showdots || false}
      responsive={
        type ? carouselBreakPoints[type] : carouselBreakPoints["small"]
      }
      // arrows={false}
      ssr={true}
      infinite={infinite || false}
      autoPlay={autoplay || false}
      autoPlaySpeed={speed || 3000}
      customTransition={`all 0.5s ease-in-out`}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={
        removeArrow ? ["desktop", "tablet", "mobile"] : [""]
      }
      // customButtonGroup={customButton && <CustomButtonList />}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      beforeChange={(previousNumber, state) => {
        if (realestate) {
          const animatedTitle =
            document.getElementsByClassName("animatedTitle");
          const animatedSubtitle =
            document.getElementsByClassName("animatedSubtitle");
          const animatedList = document.getElementsByClassName("animated-list");

          animatedSubtitle[previousNumber].style.animationIterationCount = 6;
          animatedTitle[previousNumber].style.animationIterationCount = 6;
          animatedList[previousNumber].style.animationIterationCount = 6;
        }
      }}
      afterChange={(previousSlide, state) => {
        if (realestate) {
          const animatedTitle =
            document.getElementsByClassName("animatedTitle");
          const animatedSubtitle =
            document.getElementsByClassName("animatedSubtitle");
          const animatedList = document.getElementsByClassName("animated-list");

          animatedTitle[previousSlide - 1].style.animationIterationCount = 1;
          animatedSubtitle[previousSlide - 1].style.animationIterationCount = 1;
          animatedList[previousSlide - 1].style.animationIterationCount = 1;
        }
      }}
    >
      {children}
    </Carousel>
  );
}

export default CarouselContainer;
