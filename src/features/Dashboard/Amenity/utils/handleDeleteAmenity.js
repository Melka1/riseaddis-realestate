import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const handleDeleteAmenity = ({
  token,
  amenityId,
  setLoading,
  setSnackBar,

  updateSiteAmenities,
  setSelectedSite,
  setSelectedAmenity,
}) => {
  setLoading(true);

  try {
    axios
      .delete(`${chosenBackendUrl}amenity`, {
        data: {
          amenityId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setLoading(false);
        setSnackBar({
          open: true,
          message: "Amenity Deleted successfully",
          type: "success",
        });
        updateSiteAmenities({ token });
        setSelectedSite(null);
        setSelectedAmenity(null);
      });
  } catch (error) {
    console.log(error);
    setLoading(false);
    setSnackBar({
      open: true,
      message: error.response?.data.message || "Server error, please try again",
      type: "error",
    });
  }
};

export default handleDeleteAmenity;
