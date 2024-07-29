import axios from "axios";
import { chosenBackendUrl } from "@/pages";
import { useTokenStore } from "@/stores/tokenStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDashboardStore } from "@/stores/dashboardStore";

const useFetchUser = () => {
  const router = useRouter();
  const { token } = useTokenStore();
  const { setUsers } = useDashboardStore();

  const [loading, setLoading] = useState(false);
  const [snackBar, setSnackBar] = useState(null);

  useEffect(() => {
    if (token) {
      axios
        .get(`${chosenBackendUrl}user/list`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setLoading(false);
          setUsers(data.users);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setSnackBar({
            open: true,
            type: "error",
            message:
              error?.response?.data?.message ||
              "Server error, please try again later",
          });
          router.push("/signin");
        });
    }
  }, [token, router, setUsers]);

  return { loading, setLoading, snackBar, setSnackBar };
};

export default useFetchUser;
