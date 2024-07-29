import { backEndUrls, chosenBackendUrl } from "@/pages";
import { useDashboardStore } from "@/stores/dashboardStore";
import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useFetchUnit = () => {
  const router = useRouter();

  const { token } = useTokenStore();

  const {
    setUnits,
    setSiteListOptions,
    setRealEstateListOptions,
    siteListOptions,
    realEstateListOptions,
  } = useDashboardStore();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [snackBar, setSnackBar] = useState({});

  useEffect(() => {
    if (token) {
      let allUnitRequest = axios.get(`${chosenBackendUrl}unit/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      let siteListRequest = axios.get(`${chosenBackendUrl}site/list`);
      let realEstateListRequest = axios.get(
        `${chosenBackendUrl}realestate/list`
      );

      Promise.all([allUnitRequest, siteListRequest, realEstateListRequest])
        .then((response) => {
          console.log(response);
          let [allUnitResponse, siteListResponse, realEstateListResponse] =
            response;

          setUnits(allUnitResponse.data.units);
          setSiteListOptions(siteListResponse.data.sites);
          setRealEstateListOptions(realEstateListResponse.data.realEstates);

          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
          setSnackBar({
            type: "error",
            message:
              err.response?.data?.message || "Server error, please try again",
            open: true,
          });
          router.push("/signin");
        });
    }
  }, [token]);

  return {
    loading,
    error,
    snackBar,
    setSnackBar,
    setLoading,
    siteListOptions,
    realEstateListOptions,
  };
};

export default useFetchUnit;
