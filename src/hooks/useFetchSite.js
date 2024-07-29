import { chosenBackendUrl } from "@/pages";
import { useDashboardStore } from "@/stores/dashboardStore";
import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useFetchSite = () => {
  const router = useRouter();

  const { token } = useTokenStore();
  const { setSites } = useDashboardStore();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [snackBar, setSnackBar] = useState({});

  useEffect(() => {
    if (!token) {
      router.push("/signin");
      return;
    }

    token &&
      axios
        .get(`${chosenBackendUrl}site/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setSites(data.sites);
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
  }, [token, router, setSites]);

  return { loading, error, snackBar, setSnackBar, setLoading };
};

export default useFetchSite;
