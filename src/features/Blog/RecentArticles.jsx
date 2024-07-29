import { Box, Grid, Typography } from "@mui/material";
import VerticalArticle from "./VerticalArticle";
import { riseFont } from "@/pages/_app";

function RecentArticles({ articles }) {
  return (
    <Box
      p={{ xs: "1rem", sm: "3rem", md: "6rem" }}
      width={1}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        display={"flex"}
        maxWidth={{ sm: "100%", md: "80%" }}
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
          fontSize={{ xs: "2rem", sm: "3rem" }}
          letterSpacing={"0.4px"}
        >
          Recent Articles
        </Typography>
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item sm={12} md={4} key={article.id}>
              <VerticalArticle
                imgUrl={article.imageUrl}
                title={article.title}
                content={article.paragraphs[0]}
                date={new Date(article.createdAt).toDateString()}
                link={article.link}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default RecentArticles;
