import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const getSitesOverview = async ({ token }) => {
  try {
    const response = await axios.get(`${chosenBackendUrl}site/overview`, {
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

export default getSitesOverview;
