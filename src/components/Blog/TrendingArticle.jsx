import { Box } from "@mui/material";
import HorizontalArticle from "./HorizontalArticle";

function TrendingArticle() {
  return (
    <Box
      p={{ xs: "1rem", sm: "2rem", md: "6rem" }}
      width={1}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"white"}
    >
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

export default TrendingArticle;
