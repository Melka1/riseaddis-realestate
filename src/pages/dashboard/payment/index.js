import Head from "next/head";
import AddPaymentComponent from "@/features/Dashboard/Payment/AddPaymentComponent";
import PaymentListPreviewComponent from "@/features/Dashboard/Payment/PaymentListPreviewComponent";
import Loading from "@/components/Loading";
import AdminPageLayout from "@/layouts/AdminPageLayout";
import { Alert, Snackbar } from "@mui/material";
import ProtectedRoute from "../../../features/Dashboard/Components/ProtectedRoute";
import useFetchPayment from "@/hooks/useFetchPayment";

function PaymentPage() {
  const {
    loading,
    setLoading,
    setSnackBar,
    snackBar,
    addPayment,
    setAddPayment,
  } = useFetchPayment();

  return (
    <>
      <Head>
        <title>Payments</title>
        <meta name="description" content="The best real-estate in ethiopia." />
        <link rel="icon" href="/images/logo1.png" />
      </Head>
      <ProtectedRoute>
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
      </ProtectedRoute>
    </>
  );
}

export default PaymentPage;
