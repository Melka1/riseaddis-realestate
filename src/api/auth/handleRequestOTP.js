import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const handleRequestOTP = ({
  email,
  setLoading,
  setRequestAnotherOTP,
  setSnackBar,
  setOTP,
}) => {
  setLoading(true);

  axios
    .post(`${chosenBackendUrl}auth/requestOTP`, { email })
    .then((response) => {
      setLoading(false);
      setOTP(response.data.otp);
      setSnackBar({
        open: true,
        message: "Check your email for the OTP",
        type: "success",
      });
      setRequestAnotherOTP(false);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
      setSnackBar({
        open: true,
        message:
          error.response?.data.message || "Server error, please try again!",
        type: "error",
      });
    });
};

export default handleRequestOTP;
