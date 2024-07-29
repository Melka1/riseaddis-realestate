import { chosenBackendUrl } from "@/pages";

const { default: axios } = require("axios");

const handleDeleteArticle = ({
  articles,

  token,
  setLoading,
  setArticles,
  selectedArticles,
  updateArticles,
  setSelectedArticles,
  setSnackBar,
}) => {
  setLoading(true);
  try {
    let filtered = articles.filter((r) => !selectedArticles.includes(r.id));
    setArticles(filtered);

    axios
      .delete(`${chosenBackendUrl}article`, {
        data: { articleIds: selectedArticles },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        updateArticles({ token });
        setLoading(false);
        setSnackBar({
          open: true,
          message: `Article${
            selectedArticles.length > 1 ? "s" : ""
          } deleted Successfully`,
          type: "success",
        });
        setSelectedArticles([]);
      })
      .catch((error) => {
        updateArticles({ token });
        setLoading(false);
        setSelectedArticles([]);
        console.log(error);
        setSnackBar({
          open: true,
          message: `Server error, please try again!`,
          type: "error",
        });
      });
  } catch (error) {
    setLoading(false);
    console.log(error);
    setSnackBar({
      open: true,
      message: `Server error, please try again!`,
      type: "error",
    });
  }
};

export default handleDeleteArticle;
