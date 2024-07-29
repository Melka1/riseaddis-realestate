import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const getSiteAmenities = async ({ token }) => {
  try {
    const response = await axios.get(`${chosenBackendUrl}amenity/site`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.siteAmenities;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getSiteAmenities;
