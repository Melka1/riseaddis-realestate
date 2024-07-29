import { Alert, Snackbar } from "@mui/material";
import Head from "next/head";
import AdminPageLayout from "@/layouts/AdminPageLayout";
import Loading from "@/components/Loading";
import AmenityPreviewComponent from "@/features/Dashboard/Amenity/AmenityPreviewComponent";
import useFetchAmenity from "@/hooks/useFetchAmenity";
import ProtectedRoute from "../../../features/Dashboard/Components/ProtectedRoute";

function AmenityPage() {
  const { loading, setLoading, snackBar, setSnackBar } = useFetchAmenity();

  return (
    <>
      <Head>
        <title>Amenity</title>
        <meta
          name="description"
          content="The best and affordable real-estate in ethiopia"
        />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <ProtectedRoute>
        <AdminPageLayout pageIndex={5}>
          <AmenityPreviewComponent
            setLoading={setLoading}
            setSnackBar={setSnackBar}
          />
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

export default AmenityPage;
