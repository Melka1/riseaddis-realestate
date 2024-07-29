import { useDashboardStore } from "@/stores/dashboardStore";
import { Update } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { BiPlus } from "react-icons/bi";
import { GiTrashCan } from "react-icons/gi";
import ArticleListingHeader from "./ArticleListingHeader";
import { useRef, useState } from "react";
import ArticleListing from "./ArticleListing";
import { riseFont } from "@/pages/_app";
import { useTokenStore } from "@/stores/tokenStore";
import handleDeleteArticle from "./api/handleDeleteArticle";

function ArticleListPreviewComponent({
  setAddArticle,
  setLoading,
  setSnackBar,
}) {
  const articleRef = useRef(null);
  const headerRef = useRef(null);

  const [deleteState, setDeleteState] = useState(true);
  const [selectedArticles, setSelectedArticles] = useState([]);

  const { setArticles, articles, article, updateArticles, setArticle } =
    useDashboardStore();
  const { token } = useTokenStore();

  const handleCheckArticle = (index) => {
    if (index == -1) {
      if (selectedArticles.length == articles.length) {
        return setSelectedArticles([]);
      } else {
        return setSelectedArticles(articles.map((article) => article.id));
      }
    }

    setSelectedArticles((prev) => {
      if (prev.includes(articles[index].id)) {
        return prev.filter((id) => id !== articles[index].id);
      }

      return [...prev, articles[index].id];
    });
  };

  const handleScroll = (type) => {
    if (articleRef.current && headerRef.current) {
      if (type == "header") {
        const { scrollLeft } = headerRef.current;
        articleRef.current.scrollLeft = scrollLeft;
      } else {
        const { scrollLeft } = articleRef.current;
        headerRef.current.scrollLeft = scrollLeft;
      }
    }
  };

  return (
    <>
      <Stack direction={"row"} gap={2}>
        <Typography
          fontSize={"2rem"}
          fontWeight={"bold"}
          color={"text.primary"}
          lineHeight={1}
          flex={1}
        >
          Articles
        </Typography>
        <Button
          variant="contained"
          color="riseLight"
          startIcon={<Update />}
          disabled={selectedArticles.length !== 1}
          onClick={() => {
            let article = articles.filter((a) =>
              selectedArticles.includes(a.id)
            )[0];
            setArticle(article);
            setAddArticle(true);
          }}
        >
          Update
        </Button>
        <Button
          variant="contained"
          color="riseLight"
          startIcon={<GiTrashCan />}
          disabled={!selectedArticles.length}
          onClick={() =>
            handleDeleteArticle({
              token,
              selectedArticles,
              setLoading,
              setArticles,
              articles,
              updateArticles,
              setSelectedArticles,
              setSnackBar,
            })
          }
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="riseLight"
          startIcon={<BiPlus />}
          onClick={() => setAddArticle(true)}
          disabled={selectedArticles.length > 0}
        >
          Add
        </Button>
      </Stack>

      <Stack
        bgcolor={"background.lighter"}
        maxHeight={"100%"}
        overflow={"hidden"}
      >
        <ArticleListingHeader
          handleCheckArticle={() => handleCheckArticle(-1)}
          headerRef={headerRef}
          checked={articles.length == selectedArticles.length}
          handleScroll={handleScroll}
        />

        <Box
          id="article-list"
          ref={articleRef}
          overflow={"scroll"}
          maxHeight={"100%"}
          pb={"2rem"}
          onScroll={() => handleScroll("article")}
          sx={{
            overflowY: "scroll",
            position: "relative",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {articles?.map((article, index) => (
            <ArticleListing
              key={index}
              checked={selectedArticles.includes(article.id)}
              title={article.title}
              paragraphs={article.paragraphs}
              imageUrl={article.imageUrl}
              status={article.status}
              author={article.author.name}
              dateCreated={article.createdAt}
              dateUpdated={article.updatedAt}
              handleCheckArticle={() => handleCheckArticle(index)}
            />
          ))}
          {articles.length == 0 && (
            <Stack
              width={1}
              minHeight={"300px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography className={riseFont.className}>
                Oops, No Articles found!
              </Typography>
            </Stack>
          )}
        </Box>
      </Stack>
    </>
  );
}

export default ArticleListPreviewComponent;
