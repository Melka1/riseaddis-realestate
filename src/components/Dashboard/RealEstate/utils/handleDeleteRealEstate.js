import { backEndUrls } from "@/pages";
import axios from "axios";

const handleDeleteRealEstate = ({
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
      .delete(`${backEndUrls.local}realestate`, {
        data: { ids: selectedRealEstates },
      })
      .then(() => {
        updateRealEstates();
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
        updateRealEstates();
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

export default handleDeleteRealEstate;
