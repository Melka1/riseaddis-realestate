import axios from "axios";
import { chosenBackendUrl } from "@/pages";

const getUsers = async ({ token }) => {
  try {
    const response = await axios.get(`${chosenBackendUrl}user/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.users;
  } catch (err) {
    console.log(err);
    return [];
  }
};
export default getUsers;
