import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const checkOTPSession = ({
  session_id,
  setLoading,
  setOTP,
  setSnackBar,
  router,
}) => {
  axios
    .post(`${chosenBackendUrl}auth/checkOTPSession`, { session_id })
    .catch(() => {
      setSnackBar({
        type: "error",
        message: "Session has expired",
        open: true,
      });
      setLoading(false);
      setOTP(null);
      router.push("/password-reset");
    });
};

export default checkOTPSession;
