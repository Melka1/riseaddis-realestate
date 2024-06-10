import { backEndUrls } from "@/pages";
import axios from "axios";

const handleAddPayment = async ({
  paymentTypeId,
  siteList,
  paymentList,

  setLoading,
  updatePayments,
  setSnackBar,
  setAddPayment,
  setPayment,
}) => {
  setLoading(true);
  try {
    axios
      .post(`${backEndUrls.local}payment`, {
        paymentTypeId,
        siteIds: siteList,
        paymentList,
      })
      .then(() => {
        updatePayments();
        setLoading(false);
        setSnackBar({
          open: true,
          message: "Payment updated Successfully",
          type: "success",
        });
        setAddPayment(false);
        setPayment(null);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setSnackBar({
          open: true,
          message:
            error?.response?.data?.message || "Server error: please try again!",
          type: "error",
        });
      });
  } catch (error) {
    console.log(error.message);
    setLoading(false);
    setSnackBar({
      open: true,
      message: "Server error: please try again!",
      type: "error",
    });
  }
};

export default handleAddPayment;
