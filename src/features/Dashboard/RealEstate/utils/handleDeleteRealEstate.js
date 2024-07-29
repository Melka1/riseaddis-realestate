import { backEndUrls, chosenBackendUrl } from "@/pages";
import axios from "axios";

const handleDeleteRealEstate = ({
  token,
  realEstates,
  setLoading,
  setRealEstates,
  selectedRealEstates,
  updateRealEstates,
  setSelectedRealEstates,
  setSnackBar,
}) => {
  setLoading(true);
  console.log(realEstates);
  try {
    let filtered = realEstates.filter(
      (r) => !selectedRealEstates.includes(r.id)
    );
    setRealEstates(filtered);
    console.log(filtered);
    setLoading(false);

    axios
      .delete(`${chosenBackendUrl}realestate`, {
        data: { ids: selectedRealEstates },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        updateRealEstates({ token });
        setLoading(false);
        setSnackBar({
          open: true,
          message: `RealEstate${
            selectedSites.length > 1 ? "s" : ""
          } deleted Successfully`,
          type: "success",
        });
        setSelectedRealEstates([]);
      })
      .catch((error) => {
        updateRealEstates({ token });
        setLoading(false);
        setSelectedRealEstates([]);
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

export default handleDeleteRealEstate;
