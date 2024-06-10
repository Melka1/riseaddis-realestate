import { backEndUrls } from "@/pages";
import axios from "axios";

const getRealEstates = async () => {
  const realEstates = await axios.get(`${backEndUrls.local}realestate/all`);

  return realEstates.data.data;
};
export default getRealEstates;
