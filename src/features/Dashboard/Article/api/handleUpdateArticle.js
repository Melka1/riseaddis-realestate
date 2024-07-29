import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const handleUpdateArticle = ({
  articleId,
  title,
  paragraphs,
  image,
  status,

  token,
  setLoading,
  setSnackBar,
  updateArticles,
  setAddArticle,
  setArticle,
}) => {
  setLoading(true);

  try {
    axios
      .put(
        `${chosenBackendUrl}article`,
        {
          articleId,
          title,
          paragraphs,
          imageUrl: image,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
        setAddArticle(false);
        setSnackBar({
          open: true,
          message: "Article added successfully!",
          type: "success",
        });
        updateArticles({ token });
        setArticle(null);
      });
  } catch (error) {
    console.error(error);
    setLoading(false);
    setSnackBar({
      open: true,
      message: "Server error, please try again!",
      type: "error",
    });
  }
};

export default handleUpdateArticle;
