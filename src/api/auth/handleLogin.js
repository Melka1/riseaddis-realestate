import axios from "axios";
import { chosenBackendUrl } from "@/pages";

const handleLogin = ({
  event,
  setLoading,
  setSnackBar,
  router,
  setToken,
  setUser,
}) => {
  event.preventDefault();

  let email = event.target.email.value;
  let password = event.target.password.value;

  if (!email || !password) {
    setSnackBar({
      type: "error",
      message: "Please fill in all fields",
      open: true,
    });
    return;
  }

  setLoading(true);

  axios
    .post(`${chosenBackendUrl}auth/login`, {
      email,
      password,
    })
    .then(({ data }) => {
      setSnackBar({
        type: "success",
        message: data.message,
        open: true,
      });

      setToken(data.token);
      setUser(data.user);
      router.back();
    })
    .catch((error) => {
      console.log(error);
      setSnackBar({
        type: "error",
        message:
          error.response?.data.message ||
          "Something went wrong, please try again!",
        open: true,
      });
      setLoading(false);
    });
};

export default handleLogin;
