import { backEndUrls, chosenBackendUrl } from "@/pages";
import axios from "axios";

const handleAddRealEstate = async ({
  name,
  background,
  previousProjects,
  activeProjects,
  sisterCompanies,
  images,
  token,

  setLoading,
  updateRealEstates,
  setSnackBar,
  setAddRealEstate,
}) => {
  setLoading(true);
  console.log(name);
  try {
    axios
      .post(
        `${chosenBackendUrl}realestate`,
        {
          name,
          background,
          previousProjects,
          activeProjects,
          sisterCompanies,
          images,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        updateRealEstates({ token });
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
