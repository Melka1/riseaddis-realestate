import { chosenBackendUrl } from "@/pages";
import axios from "axios";

const handleUpdateSite = async ({
  id,
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
  status,
  featured,
  price,
  token,

  setLoading,
  updateSites,
  updateSitesOverview,
  setSnackBar,
  setAddSite,
  setSite,
}) => {
  setLoading(true);
  try {
    axios
      .put(
        `${chosenBackendUrl}site`,
        {
          siteId: id,
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
          featured,
          deliveryTime,
          price: price ? Number(price) : null,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        updateSites && updateSites({ token });
        updateSitesOverview && updateSitesOverview({ token });
        setLoading(false);
        setSnackBar &&
          setSnackBar({
            open: true,
            message: "Site updated Successfully",
            type: "success",
          });
        setAddSite && setAddSite(false);
        setSite && setSite(null);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setSnackBar &&
          setSnackBar({
            open: true,
            message:
              error?.response?.data?.message ||
              "Server error: please try again!",
            type: "error",
          });
      });
  } catch (error) {
    console.log(error.message);
    setLoading(false);
    setSnackBar &&
      setSnackBar({
        open: true,
        message: "Server error: please try again!",
        type: "error",
      });
  }
};

export default handleUpdateSite;
