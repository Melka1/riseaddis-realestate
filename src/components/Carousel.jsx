import Carousel from "react-multi-carousel";
import carouselBreakPoints from "@/data/responsive";
import "react-multi-carousel/lib/styles.css";

function CarouselContainer({
  children,
  type,
  infinite,
  autoplay,
  speed,
  showdots,
  removeArrow,
}) {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={showdots || false}
      responsive={
        type ? carouselBreakPoints[type] : carouselBreakPoints["small"]
      }
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
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {children}
    </Carousel>
  );
}

export default CarouselContainer;
