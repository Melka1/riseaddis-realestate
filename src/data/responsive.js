const carouselBreakPoints = {
  large: {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 1.5,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 1.5,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  },
  small: {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1200, min: 600 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  },
};

export default carouselBreakPoints;
