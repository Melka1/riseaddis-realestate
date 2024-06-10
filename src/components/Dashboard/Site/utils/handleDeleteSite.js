import { backEndUrls } from "@/pages";
import axios from "axios";

const handleDeleteSite = ({
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
      .delete(`${backEndUrls.local}site`, {
        data: { ids: selectedSites },
      })
      .then(() => {
        updateSites();
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
        updateSites();
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
