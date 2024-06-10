import AddPaymentComponent from "@/components/Dashboard/Payment/AddPaymentComponent";
import PaymentListPreviewComponent from "@/components/Dashboard/Payment/PaymentListPreviewComponent";
import Loading from "@/components/Loading";
import AdminPageLayout from "@/layouts/adminPageLayout";
import { backEndUrls } from "@/pages";
import { useDashboardStore } from "@/stores/dashboardStore";
import { useTokenStore } from "@/stores/tokenStore";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

function PaymentPage({ sitesFromServer, paymentTypesFromServer }) {
  const { setPayments, setSites, setPaymentTypes } = useDashboardStore();
  const { token } = useTokenStore();

  const [addPayment, setAddPayment] = useState(false);
  const [loading, setLoading] = useState(true);
  const [snackBar, setSnackBar] = useState({
    type: "success",
    message: "Hello World!",
    open: false,
  });

  useEffect(() => {
    setSites(sitesFromServer);
    setPaymentTypes(paymentTypesFromServer);

    axios
      .get(`${backEndUrls.local}payment`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setPayments(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setSnackBar({
          type: "error",
          message: err.response.data.message,
          open: true,
        });
        router.push("/");
      });
  }, []);

  return (
    <>
      <Head>
        <title>Payments</title>
        <meta name="description" content="The best real-estate in ethiopia." />
        <link rel="icon" href="/images/logo1.png" />
      </Head>
      <main
        style={{
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AdminPageLayout pageIndex={4}>
          {addPayment ? (
            <AddPaymentComponent
              setAddPayment={setAddPayment}
              setLoading={setLoading}
              setSnackBar={setSnackBar}
            />
          ) : (
            <PaymentListPreviewComponent
              setLoading={setLoading}
              setAddPayment={setAddPayment}
              setSnackBar={setSnackBar}
            />
          )}
        </AdminPageLayout>
        {loading && <Loading />}
        <Snackbar
          autoHideDuration={2500}
          open={snackBar?.open}
          onClose={() =>
            setSnackBar((p) => ({
              ...p,
              open: false,
            }))
          }
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
        >
          <Alert
            onClose={() => setSnackBar((p) => ({ ...p, open: false }))}
            severity={snackBar?.type}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackBar?.message}
          </Alert>
        </Snackbar>
      </main>
    </>
  );
}

export default PaymentPage;

export async function getStaticProps() {
  // const paymentsRequest = axios.get(`${backEndUrls.local}payment`);
  const paymentTypesRequest = axios.get(`${backEndUrls.local}paymentType/list`);
  const sitesRequest = axios.get(`${backEndUrls.local}site/list`);

  const [paymentTypesResponse, sitesResponse] = await Promise.all([
    paymentTypesRequest,
    sitesRequest,
  ]);

  return {
    props: {
      // paymentsFromServer: await paymentsResponse.data.data,
      sitesFromServer: await sitesResponse.data.sites,
      paymentTypesFromServer: await paymentTypesResponse.data.paymentTypes,
    },
  };
}
