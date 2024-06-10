import { backEndUrls } from "@/pages";
import axios from "axios";

const handleDeleteUnit = ({
  units,
  setLoading,
  setUnits,
  selectedUnits,
  updateUnits,
  setSelectedUnits,
  setSnackBar,
}) => {
  setLoading(true);
  console.log(units);
  try {
    let filtered = units.filter((u) => !selectedUnits.includes(u.id));
    setUnits(filtered);
    console.log(filtered);
    setLoading(false);

    axios
      .delete(`${backEndUrls.local}unit`, {
        data: { ids: selectedUnits },
      })
      .then(() => {
        updateUnits();
        setLoading(false);
        setSnackBar({
          open: true,
          message: `Unit${
            selectedUnits.length > 1 ? "s" : ""
          } deleted Successfully`,
          type: "success",
        });
        setSelectedUnits([]);
      })
      .catch((error) => {
        updateUnits();
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

export default handleDeleteUnit;
