import { backEndUrls } from "@/pages";
import axios from "axios";

const handleDeletePayment = ({
  payments,
  setLoading,
  setPayments,
  selectedPayments,
  updatePayments,
  setSelectedPayments,
  setSnackBar,
}) => {
  setLoading(true);
  console.log(payments);
  try {
    let filtered = payments.filter((r) => !selectedPayments.includes(r.id));
    setPayments(filtered);
    console.log(filtered);
    setLoading(false);

    axios
      .delete(`${backEndUrls.local}payment`, {
        data: { paymentIds: selectedPayments },
      })
      .then(() => {
        updatePayments();
        setLoading(false);
        setSnackBar({
          open: true,
          message: `Payment${
            selectedPayments.length > 1 ? "s" : ""
          } deleted Successfully`,
          type: "success",
        });
        setSelectedPayments([]);
      })
      .catch((error) => {
        updatePayments();
        setLoading(false);
        console.log(error);
        setSnackBar({
          open: true,
          message: `Server error, please try again!`,
          type: "success",
        });
      });
  } catch (error) {
    setLoading(false);
    console.log(error);
    setSnackBar({
      open: true,
      message: `Server error, please try again!`,
      type: "success",
    });
  }
};

export default handleDeletePayment;
