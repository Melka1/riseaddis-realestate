import { backEndUrls } from "@/pages";
import axios from "axios";

const handleAddRealEstate = async ({
  name,
  background,
  previousProjects,
  activeProjects,
  sisterCompanies,
  images,

  setLoading,
  updateRealEstates,
  setSnackBar,
  setAddRealEstate,
}) => {
  setLoading(true);
  console.log(name);
  try {
    axios
      .post(`${backEndUrls.local}realestate`, {
        name,
        background,
        previousProjects,
        activeProjects,
        sisterCompanies,
        images,
      })
      .then(() => {
        updateRealEstates();
        setLoading(false);
        setSnackBar({
          open: true,
          message: "Real Estate Added Successfully",
          type: "success",
        });
        setAddRealEstate(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setSnackBar({
          open: true,
          message: error.response.data.message,
          type: "error",
        });
      });
  } catch (error) {
    console.log(error.message);
    setLoading(false);
  }
};

export default handleAddRealEstate;
