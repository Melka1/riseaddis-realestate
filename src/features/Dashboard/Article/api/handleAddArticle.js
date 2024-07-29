import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const handleAddArticle = ({
  title,
  paragraphs,
  image,
  token,
  setLoading,
  setSnackBar,
  updateArticles,
  setAddArticle,
}) => {
  setLoading(true);

  axios
    .post(
      `${chosenBackendUrl}article`,
      {
        title,
        paragraphs,
        imageUrl: image,
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
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
      setSnackBar({
        open: true,
        message:
          error.response?.data.message || "Server error, please try again!",
        type: "error",
      });
    });
};

export default handleAddArticle;
