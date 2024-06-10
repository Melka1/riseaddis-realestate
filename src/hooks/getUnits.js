import { backEndUrls } from "@/pages";
import axios from "axios";

const getUnits = async () => {
  const units = await axios.get(`${backEndUrls.local}unit/all`);

  return units.data.data;
};
export default getUnits;
