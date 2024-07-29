import axios from "axios";
import { chosenBackendUrl } from "@/pages";

const handleDeleteUser = ({
  token,
  users,
  setLoading,
  setUsers,
  selectedUsers,
  updateUsers,
  setSelectedUsers,
  setSnackBar,
}) => {
  setLoading(true);

  try {
    let filtered = users.filter((r) => !selectedUsers.includes(r.id));
    setUsers(filtered);

    axios
      .delete(`${chosenBackendUrl}user`, {
        data: { ids: selectedUsers },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        updateUsers({ token });
        setLoading(false);
        setSnackBar({
          open: true,
          message: `User${
            selectedUsers.length > 1 ? "s" : ""
          } deleted Successfully`,
          type: "success",
        });
        setSelectedUsers([]);
      })
      .catch((error) => {
        updateUsers({ token });
        setLoading(false);
        setSelectedUsers([]);
        setSnackBar({
          open: true,
          message:
            error?.response?.data?.message || `Server error, please try again!`,
          type: "success",
        });
      });
  } catch (error) {
    console.log(error);
    setLoading(false);
    setSnackBar({
      open: true,
      message: `Server error, please try again!`,
      type: "success",
    });
  }
};

export default handleDeleteUser;
