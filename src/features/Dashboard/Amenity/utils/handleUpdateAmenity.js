import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const handleUpdateAmenity = ({
  token,
  amenityId,
  image,
  amenityName,
  setLoading,
  setSnackBar,
  setOpen,

  setSelectedSite,
  setSelectedAmenity,
  updateSiteAmenities,
}) => {
  setLoading(true);

  try {
    axios
      .put(
        `${chosenBackendUrl}amenity`,
        {
          amenityId,
          imageId: image,
          name: amenityName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setLoading(false);
        setSnackBar({
          open: true,
          message: "Amenity updated successfully",
          type: "success",
        });
        updateSiteAmenities({ token });
        setSelectedAmenity(null);
        setSelectedSite(null);
      });
  } catch (error) {
    console.log(error);
    setLoading(false);
    setSnackBar({
      open: true,
      message: error.response?.data.message || "Server error, please try again",
      type: "error",
    });
  } finally {
    setOpen(false);
  }
};

export default handleUpdateAmenity;
