import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const getPayments = async ({ token }) => {
  try {
    const response = await axios.get(`${chosenBackendUrl}payment`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.payments;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export default getPayments;
