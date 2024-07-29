import Head from "next/head";
import AddUnitComponent from "@/features/Dashboard/Unit/AddUnitComponent";
import UnitListPreviewComponent from "@/features/Dashboard/Unit/UnitListPreviewComponent";
import Loading from "@/components/Loading";
import useFetchUnit from "@/hooks/useFetchUnit";
import AdminPageLayout from "@/layouts/AdminPageLayout";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import ProtectedRoute from "../../../features/Dashboard/Components/ProtectedRoute";

function UnitPage() {
  const { loading, snackBar, setSnackBar, setLoading } = useFetchUnit();
  const [addUnit, setAddUnit] = useState(false);

  return (
    <>
      <Head>
        <title>Units</title>
        <meta name="description" content="The best real-estate in ethiopia." />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <ProtectedRoute>
        <AdminPageLayout pageIndex={3}>
          {addUnit ? (
            <AddUnitComponent
              setAddUnit={setAddUnit}
              setLoading={setLoading}
              setSnackBar={setSnackBar}
            />
          ) : (
            <UnitListPreviewComponent
              setLoading={setLoading}
              setAddUnit={setAddUnit}
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

export default UnitPage;
