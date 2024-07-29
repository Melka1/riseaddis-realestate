import { Alert, Snackbar } from "@mui/material";
import Head from "next/head";
import AdminPageLayout from "@/layouts/AdminPageLayout";
import Loading from "@/components/Loading";
import useFetchDashboard from "@/hooks/useFetchDashboard";
import OverviewPreviewContainer from "@/features/Dashboard/Home/OverviewPreviewContainer";
import ProtectedRoute from "../../features/Dashboard/Components/ProtectedRoute";

function AdminPage() {
  const { loading, setLoading, snackBar, setSnackBar } = useFetchDashboard();

  return (
    <>
      <Head>
        <title>Overview</title>
        <meta
          name="description"
          content="The best and affordable real-estate in ethiopia"
        />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <ProtectedRoute>
        <AdminPageLayout pageIndex={0}>
          <OverviewPreviewContainer setLoading={setLoading} />
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

export default AdminPage;
