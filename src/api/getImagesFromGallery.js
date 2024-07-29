import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const getImagesFromGallery = async ({ type }) => {
  try {
    const { data } = await axios.get(`${chosenBackendUrl}gallery/${type}`);

    return data.images;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getImagesFromGallery;
