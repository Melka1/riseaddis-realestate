import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const getSites = async ({ token }) => {
  try {
    const response = await axios.get(`${chosenBackendUrl}site/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.sites;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getSites;
