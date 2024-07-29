import axios from "axios";
import { chosenBackendUrl } from "@/pages";

const handleUpdateUser = async ({
  name,
  image,
  token,

  setUser,
  setLoading,
  setSnackBar,
  setUpdateName,
}) => {
  setLoading(true);
  console.log(name);

  try {
    axios
      .put(
        `${chosenBackendUrl}user`,
        {
          name,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setUser(data.user);
        setLoading(false);
        setSnackBar({
          open: true,
          message: "User updated Successfully",
          type: "success",
        });
        setUpdateName && setUpdateName(false);
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

export default handleUpdateUser;
