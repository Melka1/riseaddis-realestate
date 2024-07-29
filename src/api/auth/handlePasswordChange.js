import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const handlePasswordChange = ({
  event,
  session_id,
  setLoading,
  setSnackBar,
  router,
}) => {
  event.preventDefault();
  setLoading(true);

  const password = event.target.password.value;
  const confirmPassword = event.target.confirmPassword.value;

  if (password.length < 6) {
    setSnackBar({
      type: "error",
      message: "Password should be at least 6 characters long",
      open: true,
    });
    setLoading(false);
    return;
  }

  if (password !== confirmPassword) {
    setSnackBar({
      type: "error",
      message: "Password and Confirm Password are not the same",
      open: true,
    });
    setLoading(false);
    return;
  }

  axios
    .post(`${chosenBackendUrl}auth/changePassword`, { password, session_id })
    .then((response) => {
      setSnackBar({
        type: "success",
        message: response.data.message,
        open: true,
      });
      setLoading(false);
      router.push("/");
    })
    .catch((error) => {
      setSnackBar({
        type: "error",
        message:
          error.response?.data.message || "Server error, please try again!",
        open: true,
      });
      setLoading(false);
    });
};

export default handlePasswordChange;
