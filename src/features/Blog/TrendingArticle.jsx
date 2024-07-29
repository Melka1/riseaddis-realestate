import { Box } from "@mui/material";
import HorizontalArticle from "./HorizontalArticle";

function TrendingArticle({ article }) {
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
        imgUrl={article.imageUrl}
        title={article.title || "Add a title here..."}
        content={article.paragraphs[0] || "add content here..."}
        date={new Date(article.createdAt).toDateString()}
        type={"Real estate"}
        link={article.link}
      />
    </Box>
  );
}

export default TrendingArticle;
