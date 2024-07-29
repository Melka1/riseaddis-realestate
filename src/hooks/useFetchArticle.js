import { chosenBackendUrl } from "@/pages";
import { useDashboardStore } from "@/stores/dashboardStore";
import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useFetchArticle = () => {
  const router = useRouter();

  const { token } = useTokenStore();
  const { setArticles } = useDashboardStore();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [snackBar, setSnackBar] = useState({});

  useEffect(() => {
    token &&
      axios
        .get(`${chosenBackendUrl}article/all`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setArticles(data.articles);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(true);
          setLoading(false);
          setSnackBar({
            type: "error",
            message:
              err.response?.data.message || "Server error, please try again",
            open: true,
          });
          router.push("/signin");
        });
  }, [token]);

  return { loading, error, snackBar, setSnackBar, setLoading };
};

export default useFetchArticle;
