import { Box } from "@mui/material";
import HorizontalArticle from "./HorizontalArticle";

function TrendingArticle() {
  return (
    <Box
      p={"6rem"}
      width={1}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <HorizontalArticle />
    </Box>
  );
}

export default TrendingArticle;
