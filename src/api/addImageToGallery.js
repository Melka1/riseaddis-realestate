import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const addImagesToGallery = async ({ token, imageUrl, name }) => {
  try {
    const { data } = await axios.post(
      `${chosenBackendUrl}gallery`,
      {
        image: imageUrl,
        name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data.imageUploaded;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default addImagesToGallery;
