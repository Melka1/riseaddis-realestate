import { deepEqual } from "@/utils/checkEquality";

const hasRealEstateValueChanged = ({
  realEstate,
  name,
  background,
  activeProjectList,
  previousProjectList,
  sisterCompaniesList,
  imageList,
  status,
}) => {
  if (
    deepEqual(realEstate?.name, name) &&
    deepEqual(realEstate?.background, background) &&
    deepEqual(realEstate?.activeProjects, activeProjectList) &&
    deepEqual(realEstate?.previousProjects, previousProjectList) &&
    deepEqual(realEstate?.sisterCompanies, sisterCompaniesList) &&
    deepEqual(realEstate?.images, imageList) &&
    deepEqual(realEstate?.status, status)
  ) {
    return false;
  }

  return true;
};

export default hasRealEstateValueChanged;
