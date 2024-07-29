import { Box, Typography } from "@mui/material";
import { riseFont } from "@/pages/_app";
import HorizontalArticle from "../Blog/HorizontalArticle";

function HomeRecentBlogs({ articles }) {
  return (
    <Box
      p={{ xs: "1rem", sm: "6rem" }}
      pt={0}
      width={1}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      bgcolor={"white"}
      gap={{ xs: "1rem", sm: "4rem" }}
    >
      <Typography
        variant="h3"
        textAlign={"center"}
        fontWeight={"bold"}
        color={"#3e3d39"}
        className={riseFont.className}
        fontSize={{ xs: "1.5rem", sm: "3rem" }}
        letterSpacing={"0.4px"}
      >
        Recent Articles
      </Typography>
      <HorizontalArticle
        left={true}
        imgUrl={articles[0].imageUrl}
        title={articles[0].title}
        content={articles[0].paragraphs[0]}
        date={new Date(articles[0].createdAt).toDateString()}
        link={articles[0].link}
        type={"Realestate"}
      />
      {articles.length > 1 && (
        <HorizontalArticle
          imgUrl={articles[1].imageUrl}
          link={articles[1].link}
          title={articles[1].title}
          content={articles[1].paragraphs[0]}
          date={new Date(articles[1].createdAt).toDateString()}
          type={"Realestate"}
        />
      )}
    </Box>
  );
}

export default HomeRecentBlogs;
