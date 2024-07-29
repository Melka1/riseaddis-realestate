import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const getArticles = async ({ token }) => {
  try {
    const { data } = await axios.get(`${chosenBackendUrl}article/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.articles;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getArticles;
