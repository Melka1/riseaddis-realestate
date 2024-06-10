import { backEndUrls } from "@/pages";
import axios from "axios";

const getSites = async () => {
  const sites = await axios.get(`${backEndUrls.local}site/all`);

  return sites.data.data;
};
export default getSites;
