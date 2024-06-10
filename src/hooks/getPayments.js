import { backEndUrls } from "@/pages";
import axios from "axios";

const getPayments = async () => {
  const payments = await axios.get(`${backEndUrls.local}payment`);

  return payments.data.data;
};
export default getPayments;
