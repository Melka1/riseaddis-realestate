import { backEndUrls, chosenBackendUrl } from "@/pages";
import axios from "axios";

const handleAddUnit = async ({
  name,
  bathroom,
  bedroom,
  balcony,
  netArea,
  commonArea,
  totalArea,
  payments,
  available,
  site,
  images,
  price,
  total,
  token,

  setLoading,
  updateUnits,
  setSnackBar,
  setAddUnit,
}) => {
  setLoading(true);
  try {
    axios
      .post(
        `${chosenBackendUrl}unit`,
        {
          name,
          bathroom: bathroom ? Number(bathroom) : null,
          bedroom: bedroom ? Number(bedroom) : null,
          balcony,
          netArea: netArea ? Number(netArea) : null,
          commonArea: commonArea ? Number(commonArea) : null,
          totalArea: totalArea ? Number(totalArea) : null,
          available: available ? Number(available) : null,
          total: total ? Number(total) : null,
          payments,
          siteId: site,
          images,
          price,
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
          message: "Unit Added Successfully",
          type: "success",
        });
        setAddUnit(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setSnackBar({
          open: true,
          message:
            error.response?.data?.message || "Server error, please try again!",
          type: "error",
        });
      });
  } catch (error) {
    console.log(error.message);
    setLoading(false);
  }
};

export default handleAddUnit;
