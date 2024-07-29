import { backEndUrls, chosenBackendUrl } from "@/pages";
import axios from "axios";

const handleUpdateUnit = async ({
  id,
  name,
  site,
  bedroom,
  bathroom,
  balcony,
  netArea,
  commonArea,
  totalArea,
  available,
  total,
  price,
  images,
  status,
  token,

  setLoading,
  updateUnits,
  setSnackBar,
  setAddUnit,
  setUnit,
}) => {
  setLoading(true);
  try {
    axios
      .put(
        `${chosenBackendUrl}unit`,
        {
          unitId: id,
          name,
          site,
          bathroom: bathroom ? Number(bathroom) : null,
          bedroom: bedroom ? Number(bedroom) : null,
          balcony,
          netArea: netArea ? Number(netArea) : null,
          commonArea: commonArea ? Number(commonArea) : null,
          totalArea: totalArea ? Number(totalArea) : null,
          available: available ? Number(available) : null,
          total: total ? Number(total) : null,
          price,
          images,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        updateUnits({ token });
        setLoading(false);
        setSnackBar({
          open: true,
          message: "Unit updated Successfully",
          type: "success",
        });
        setAddUnit(false);
        setUnit(null);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setSnackBar({
          open: true,
          message: "Server error: please try again!",
          type: "error",
        });
      });
  } catch (error) {
    console.log(error.message);
    setLoading(false);
  }
};

export default handleUpdateUnit;
