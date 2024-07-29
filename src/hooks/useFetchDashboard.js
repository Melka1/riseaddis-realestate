import { chosenBackendUrl } from "@/pages";
import { useDashboardStore } from "@/stores/dashboardStore";
import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useFetchDashboard = () => {
  const { token } = useTokenStore();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [snackBar, setSnackBar] = useState({});

  const { setRealEstatesOverview, setUnitsOverview, setSitesOverview } =
    useDashboardStore();

  useEffect(() => {
    if (token) {
      try {
        const siteOverviewRequest = axios.get(
          `${chosenBackendUrl}site/overview`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const realestateOverviewRequest = axios.get(
          `${chosenBackendUrl}realestate/overview`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const unitsOverviewRequest = axios.get(
          `${chosenBackendUrl}unit/overview`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        Promise.all([
          unitsOverviewRequest,
          siteOverviewRequest,
          realestateOverviewRequest,
        ])
          .then((response) => {
            const [
              unitsOverviewResponse,
              sitesOverviewResponse,
              realEstatesOverviewResponse,
            ] = response;

            setUnitsOverview(unitsOverviewResponse.data.units);
            setSitesOverview(sitesOverviewResponse.data.sites);
            setRealEstatesOverview(
              realEstatesOverviewResponse.data.realEstates
            );
          })
          .catch((error) => {
            console.log(error);
            setSnackBar({
              open: true,
              message:
                error.response?.data?.message ||
                "Server error, please try again!",
              type: "error",
            });
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [
    token,
    router,
    setUnitsOverview,
    setSitesOverview,
    setRealEstatesOverview,
  ]);

  return {
    loading,
    setLoading,
    snackBar,
    setSnackBar,
  };
};

export default useFetchDashboard;
