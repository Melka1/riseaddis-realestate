import { backEndUrls } from "@/pages";
import axios from "axios";

const handleUpdatePayment = async ({
  id,
  paymentTypeId,
  siteList,
  paymentList,
  token,
  previousSiteList,

  setLoading,
  updatePayments,
  setSnackBar,
  setAddPayment,
  setPayment,
}) => {
  setLoading(true);
  try {
    axios
      .put(
        `${backEndUrls.local}payment`,
        {
          paymentId: id,
          paymentTypeId,
          siteIds: siteList,
          paymentList,
          previousSiteList,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        updatePayments({ token });
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

export default handleUpdatePayment;
