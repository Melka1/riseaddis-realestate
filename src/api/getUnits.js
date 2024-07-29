import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const getUnits = async ({ token }) => {
  try {
    const response = await axios.get(`${chosenBackendUrl}unit/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.units;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export default getUnits;
