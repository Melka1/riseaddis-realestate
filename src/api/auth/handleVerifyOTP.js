import axios from "axios";
import { chosenBackendUrl } from "@/pages";

const handleVerifyOTP = ({
  otp,
  localOTP,
  setLoading,
  setSnackBar,
  setRequestAnotherOTP,
  router,
}) => {
  setLoading(true);

  axios
    .post(`${chosenBackendUrl}auth/verifyOTP`, {
      otpId: otp,
      otpValue: localOTP,
    })
    .then(() => {
      setLoading(false);
      setSnackBar({
        open: true,
        message: "OTP verified successfully",
        type: "success",
      });
      router.push(`/change-password?session_id=${otp}`);
    })
    .catch((error) => {
      setRequestAnotherOTP(true);
      console.error(error);
      setLoading(false);
      setSnackBar({
        open: true,
        message:
          error.response?.data.message || "Invalid OTP, please try again!",
        type: "error",
      });
    });
};

export default handleVerifyOTP;
