import axios from "axios";
import { chosenBackendUrl } from "@/pages";

const handleRegister = ({
  event,
  setSnackBar,
  setToken,
  setUser,
  router,
  setLoading,
}) => {
  event.preventDefault();

  const data = new FormData(event.currentTarget);

  let email = data.get("email");
  let password = data.get("password");
  let firstName = data.get("firstName");
  let lastName = data.get("lastName");

  if (!email || !password || !firstName) {
    setSnackBar({
      type: "error",
      message: "Required fields are not provided",
      open: true,
    });
    return;
  }

  setLoading(true);

  axios
    .post(`${chosenBackendUrl}auth/register`, {
      email,
      password,
      name: firstName + " " + lastName,
    })
    .then(({ data }) => {
      setSnackBar({
        type: "success",
        message: data.message,
        open: true,
      });

      setToken(data.token);
      setUser(data.user);
      router.push("/");
    })
    .catch((error) => {
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

export default handleRegister;
