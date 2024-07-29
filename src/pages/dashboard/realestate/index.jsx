import AddRealEstateComponent from "@/features/Dashboard/RealEstate/AddRealEstateComponent";
import RealEstateListPreviewComponent from "@/features/Dashboard/RealEstate/RealesatateListPreviewComponent";
import Loading from "@/components/Loading";
import useFetchRealEstate from "@/hooks/useFetchRealEstate";
import AdminPageLayout from "@/layouts/AdminPageLayout";
import { Alert, Snackbar } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import ProtectedRoute from "../../../features/Dashboard/Components/ProtectedRoute";

function RealEstatePage() {
  const { loading, setLoading, error, snackBar, setSnackBar } =
    useFetchRealEstate();

  const [addRealEstate, setAddRealEstate] = useState(false);

  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta
          name="description"
          content="The best and affordable real-estate in ethiopia"
        />
        <link rel="icon" href="/images/logo1.png" />
      </Head>
      <ProtectedRoute>
        <AdminPageLayout pageIndex={1}>
          {addRealEstate ? (
            <AddRealEstateComponent
              setAddRealEstate={setAddRealEstate}
              setLoading={setLoading}
              setSnackBar={setSnackBar}
            />
          ) : (
            <RealEstateListPreviewComponent
              setAddRealEstate={setAddRealEstate}
              setLoading={setLoading}
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

export default RealEstatePage;
