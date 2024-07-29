import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const handleUpdateUserRole = async ({
  userId,
  role,
  token,

  setLoading,
  updateUsers,
  setSnackBar,
}) => {
  setLoading(true);

  try {
    axios
      .put(
        `${chosenBackendUrl}user/role`,
        {
          userId,
          role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        updateUsers({ token });
        setLoading(false);
        setSnackBar({
          open: true,
          message: "User updated Successfully",
          type: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setSnackBar({
          open: true,
          message: error.response.data.message,
          type: "error",
        });
      });
  } catch (error) {
    console.log(error.message);
    setLoading(false);
  }
};

export default handleUpdateUserRole;
