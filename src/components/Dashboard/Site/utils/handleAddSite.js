import { backEndUrls } from "@/pages";
import axios from "axios";

const handleAddSite = async ({
  name,
  realEstate,
  description,
  location,
  footPrintArea,
  builtUpArea,
  floors,
  basementCount,
  parkingLots,
  studios,
  oneBedrooms,
  twoBedrooms,
  threeBedrooms,
  numberOfUnits,
  buildingType,
  deliveryTime,
  apartmentSizes,
  images,
  stage,
  price,

  setLoading,
  updateSites,
  setSnackBar,
  setAddSite,
}) => {
  setLoading(true);
  try {
    axios
      .post(`${backEndUrls.local}site`, {
        name,
        realEstateId: realEstate,
        description,
        location,
        footPrintArea: footPrintArea ? Number(footPrintArea) : null,
        builtUpArea: builtUpArea ? Number(builtUpArea) : null,
        floors: floors ? Number(floors) : null,
        basementCount: basementCount ? Number(basementCount) : null,
        parkingLots,
        studios: studios ? Number(studios) : null,
        oneBedrooms: oneBedrooms ? Number(oneBedrooms) : null,
        twoBedrooms: twoBedrooms ? Number(twoBedrooms) : null,
        threeBedrooms: threeBedrooms ? Number(threeBedrooms) : null,
        numberOfUnits: numberOfUnits ? Number(numberOfUnits) : null,
        buildingType,
        apartmentSizes,
        images,
        stage,
        deliveryTime,
        price: price ? Number(price) : null,
      })
      .then(() => {
        updateSites();
        setLoading(false);
        setSnackBar({
          open: true,
          message: "Site Added Successfully",
          type: "success",
        });
        setAddSite(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setSnackBar({
          open: true,
          message:
            error?.response?.data?.message || "Server error, please try again!",
          type: "error",
        });
      });
  } catch (error) {
    console.log(error.message);
    setLoading(false);
    setSnackBar({
      open: true,
      message: "Server error, please try again!",
      type: "error",
    });
  }
};

export default handleAddSite;
