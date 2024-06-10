import { deepEqual } from "@/utils/checkEquality";

const hasSiteValueChanged = ({
  site,
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
  apartmentSizes,
  deliveryTime,
  imageList,
  stage,
  status,
  price,
}) => {
  console.log(site?.images, imageList);
  if (
    deepEqual(site?.name, name) &&
    deepEqual(site?.realEstate?.id, realEstate) &&
    deepEqual(site?.description, description || null) &&
    deepEqual(site?.location, location || null) &&
    deepEqual(site?.footPrintArea, footPrintArea || null) &&
    deepEqual(site?.builtUpArea, builtUpArea || null) &&
    deepEqual(site?.floors, floors || null) &&
    deepEqual(site?.basementCount, basementCount || null) &&
    deepEqual(site?.parkingLots, parkingLots || null) &&
    deepEqual(site?.studios, studios || null) &&
    deepEqual(site?.oneBedrooms, oneBedrooms || null) &&
    deepEqual(site?.twoBedrooms, twoBedrooms || null) &&
    deepEqual(site?.threeBedrooms, threeBedrooms || null) &&
    deepEqual(site?.numberOfUnits, numberOfUnits || null) &&
    deepEqual(site?.buildingType, buildingType || null) &&
    deepEqual(site?.apartmentSizes, apartmentSizes || null) &&
    deepEqual(site?.deliveryTime, deliveryTime || null) &&
    deepEqual(site?.stage, stage || null) &&
    deepEqual(site?.images, imageList) &&
    deepEqual(site?.status, status) &&
    deepEqual(site?.price, price || null)
  ) {
    return false;
  }

  return true;
};

export default hasSiteValueChanged;
