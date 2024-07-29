import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const handleAddAmenity = ({
  token,
  siteId,
  image,
  amenityName,
  setLoading,
  setSnackBar,
  setOpen,

  updateSiteAmenities,
}) => {
  setLoading(true);

  try {
    axios
      .post(
        `${chosenBackendUrl}amenity`,
        {
          siteId,
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
          message: "Amenity added successfully",
          type: "success",
        });
        updateSiteAmenities({ token });
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

export default handleAddAmenity;
