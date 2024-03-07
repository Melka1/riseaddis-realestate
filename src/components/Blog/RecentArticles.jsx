import { Box, Grid, Typography } from "@mui/material";
import VericalArticle from "./VericalArticle";
import { riseFont } from "@/pages/_app";

function RecentArticles() {
  return (
    <Box
      p={"6rem"}
      width={1}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        display={"flex"}
        maxWidth={"80%"}
        width={1}
        flexDirection={"column"}
        gap={"3rem"}
      >
        <Typography
          variant="h3"
          textAlign={"center"}
          fontWeight={"bold"}
          color={"#3e3d39"}
          className={riseFont.className}
          fontSize={"3rem"}
          letterSpacing={"0.4px"}
        >
          Recent Articles
        </Typography>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <VericalArticle
              imgUrl={"/images/image1.png"}
              title={"Top Neighborhoods for Young Professionals in Addis Ababa"}
              content={
                "Top Neighborhoods for Young Professionals in Addis Ababa Starting your career and navigating the bustling world of a young professional can be exciting but also overwhelming."
              }
              date={"February 6, 2024"}
            />
          </Grid>
          <Grid item md={4}>
            <VericalArticle
              imgUrl={"/images/image7.png"}
              title={"Finding Your Perfect Fit: Search By Lifestyle & Budget"}
              content={
                "Finding the right place to live is a crucial step in building a fulfilling life. It's not just about the bricks and mortar; it's about finding a space that complements your lifestyle and aligns with your financial goals. "
              }
              date={"February 1, 2024"}
            />
          </Grid>
          <Grid item md={4}>
            <VericalArticle
              imgUrl={"/images/image2.png"}
              title={"Unlocking Your Dream Home: Tips for First-Time Buyers"}
              content={
                "Congratulations! You've made the exciting decision to embark on the journey of homeownership. While thrilling, the process can also feel overwhelming, especially for first-time buyers."
              }
              date={"January 21, 2024"}
            />
          </Grid>
          <Grid item md={4}>
            <VericalArticle
              imgUrl={"/images/image4.png"}
              title={"House Hunting Made Easy: Search by Lifestyle & Budget "}
              content={
                "Finding the perfect place to call home can feel like searching for a needle in a haystack. But fear not, aspiring homeowners! This guide introduces you to a powerful search method that streamlines your journey."
              }
              date={"August 9, 2023"}
            />
          </Grid>
          <Grid item md={4}>
            <VericalArticle
              imgUrl={"/images/image5.png"}
              title={
                "Is Now the Right Time to Buy? Market Insights for Your City"
              }
              content={
                'The dream of homeownership burns bright for many, but navigating the real estate market can feel like a rollercoaster ride. You might be wondering, "**Is now the right time to buy in Addis Ababa?'
              }
              date={"July 24, 2023"}
            />
          </Grid>
          <Grid item md={4}>
            <VericalArticle
              imgUrl={"/images/Image3.png"}
              title={"Invest in Your Future: The Benefits of Homeownership"}
              content={
                "Owning a home is more than just having a roof over your head; it's an investment in your future financial security and personal well-being. While renting offers flexibility. Owning is way better."
              }
              date={"May 20, 2023"}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default RecentArticles;
