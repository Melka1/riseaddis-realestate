import { Box, Typography } from "@mui/material";
import { riseFont } from "@/pages/_app";
import HorizontalArticle from "../Blog/HorizontalArticle";

function HomeRecentsBlogs() {
  return (
    <Box
      p={"6rem"}
      pt={0}
      width={1}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      bgcolor={"white"}
      gap={"4rem"}
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
      <HorizontalArticle
        left={true}
        imgUrl={"/images/Image3.png"}
        title={"Here’s how to decorate your new home from scratch"}
        content={
          "Congratulations on your new home! Now comes the exciting task of turning your empty space into a warm and inviting haven. Decorating from scratch can feel overwhelming, but with a plan and a little creativity, you can transform your house into a home that reflects your unique style and personality."
        }
        date={"November 5th, 2023"}
        type={"Architecture"}
      />
      <HorizontalArticle
        title={"Here’s how to decorate your new home from scratch"}
        content={
          "Congratulations on your new home! Now comes the exciting task of turning your empty space into a warm and inviting haven. Decorating from scratch can feel overwhelming, but with a plan and a little creativity, you can transform your house into a home that reflects your unique style and personality."
        }
        date={"November 5th, 2023"}
        type={"Architecture"}
      />
    </Box>
  );
}

export default HomeRecentsBlogs;
