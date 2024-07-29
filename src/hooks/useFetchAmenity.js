import { chosenBackendUrl } from "@/pages";
import { useDashboardStore } from "@/stores/dashboardStore";
import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useFetchAmenity = () => {
  const router = useRouter();

  const { token } = useTokenStore();
  const { setSiteAmenities } = useDashboardStore();

  const [loading, setLoading] = useState(true);
  const [snackBar, setSnackBar] = useState({});

  useEffect(() => {
    token &&
      axios
        .get(`${chosenBackendUrl}amenity/site`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setSiteAmenities(data.siteAmenities);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setSnackBar({
            type: "error",
            message:
              err.response?.data?.message || "Server error, please try again",
            open: true,
          });
          router.push("/signin");
        });
  }, [token, router, setSiteAmenities]);

  return { loading, snackBar, setSnackBar, setLoading };
};

export default useFetchAmenity;
