import axios from "axios";
import { chosenBackendUrl } from "@/pages";
import { useDashboardStore } from "@/stores/dashboardStore";
import { useTokenStore } from "@/stores/tokenStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useFetchPayment = () => {
  const router = useRouter();

  const { token } = useTokenStore();
  const { setPayments, setSites, setPaymentTypes } = useDashboardStore();

  const [addPayment, setAddPayment] = useState(false);
  const [loading, setLoading] = useState(true);
  const [snackBar, setSnackBar] = useState({
    type: "success",
    message: "Hello World!",
    open: false,
  });

  useEffect(() => {
    if (token) {
      const paymentTypesRequest = axios.get(
        `${chosenBackendUrl}paymentType/list`
      );
      const sitesRequest = axios.get(`${chosenBackendUrl}site/list`);
      const paymentListRequest = axios.get(`${chosenBackendUrl}payment`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      Promise.all([paymentTypesRequest, sitesRequest, paymentListRequest])
        .then((response) => {
          let [paymentTypesResponse, sitesResponse, paymentListResponse] =
            response;

          setSites(sitesResponse.data.sites);
          setPaymentTypes(paymentTypesResponse.data.paymentTypes);
          setPayments(paymentListResponse.data.payments);

          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setSnackBar({
            type: "error",
            message:
              err.response?.data.message || "Server error, please try again",
            open: true,
          });
          router.push("/signin");
        });
    }
  }, [token, router, setPaymentTypes, setPayments, setSites]);

  return {
    loading,
    snackBar,
    setSnackBar,
    setLoading,
    addPayment,
    setAddPayment,
  };
};

export default useFetchPayment;
