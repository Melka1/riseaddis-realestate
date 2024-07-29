import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const getRealEstates = async ({ token }) => {
  try {
    const response = await axios.get(`${chosenBackendUrl}realestate/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.realEstates;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export default getRealEstates;
