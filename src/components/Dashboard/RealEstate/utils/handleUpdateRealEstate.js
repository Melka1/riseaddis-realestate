import { backEndUrls } from "@/pages";
import axios from "axios";

const handleUpdateRealEstate = async ({
  id,
  name,
  background,
  previousProjects,
  activeProjects,
  sisterCompanies,
  images,
  status,

  setLoading,
  updateRealEstates,
  setSnackBar,
  setAddRealEstate,
  setRealEstate,
}) => {
  setLoading(true);
  console.log(name);
  try {
    axios
      .put(`${backEndUrls.local}realestate`, {
        id,
        name,
        background,
        previousProjects,
        activeProjects,
        sisterCompanies,
        images,
        status,
      })
      .then(() => {
        updateRealEstates();
        setLoading(false);
        setSnackBar({
          open: true,
          message: "Real Estate updated Successfully",
          type: "success",
        });
        setAddRealEstate(false);
        setRealEstate(null);
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

export default handleUpdateRealEstate;
