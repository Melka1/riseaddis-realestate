import { backEndUrls, chosenBackendUrl } from "@/pages";
import axios from "axios";

const handleDeleteSite = ({
  token,
  sites,
  setLoading,
  setSites,
  selectedSites,
  updateSites,
  setSelectedSites,
  setSnackBar,
}) => {
  setLoading(true);
  console.log(sites);
  try {
    let filtered = sites.filter((u) => !selectedSites.includes(u.id));
    setSites(filtered);
    console.log(filtered);
    setLoading(false);

    axios
      .delete(`${chosenBackendUrl}site`, {
        data: { ids: selectedSites },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        updateSites({ token });
        setLoading(false);
        setSnackBar({
          open: true,
          message: `Site${
            selectedSites.length > 1 ? "s" : ""
          } deleted Successfully`,
          type: "success",
        });
        setSelectedSites([]);
      })
      .catch((error) => {
        updateSites({ token });
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

export default handleDeleteSite;
