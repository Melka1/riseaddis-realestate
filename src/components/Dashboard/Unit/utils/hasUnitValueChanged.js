import { deepEqual } from "@/utils/checkEquality";

const hasUnitValueChanged = ({
  unit,
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
  imageList,
  status,
}) => {
  if (
    deepEqual(unit?.name, name || null) &&
    deepEqual(unit?.site?.id, site) &&
    deepEqual(unit?.bedroom, bedroom || null) &&
    deepEqual(unit?.bathroom, bathroom || null) &&
    deepEqual(unit?.balcony, balcony || null) &&
    deepEqual(unit?.netArea, netArea || null) &&
    deepEqual(unit?.commonArea, commonArea || null) &&
    deepEqual(unit?.totalArea, totalArea || null) &&
    deepEqual(unit?.available, available || null) &&
    deepEqual(unit?.total, total || null) &&
    deepEqual(unit?.price, price || null) &&
    deepEqual(unit?.images, imageList || null) &&
    deepEqual(unit?.status, status)
  ) {
    return false;
  }

  return true;
};

export default hasUnitValueChanged;
