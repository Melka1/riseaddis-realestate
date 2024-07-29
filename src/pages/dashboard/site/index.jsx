import AddSiteComponent from "@/features/Dashboard/Site/AddSiteComponent";
import SiteListPreviewComponent from "@/features/Dashboard/Site/SiteListPreviewComponent";
import Loading from "@/components/Loading";
import useFetchSite from "@/hooks/useFetchSite";
import AdminPageLayout from "@/layouts/AdminPageLayout";
import { Alert, Snackbar } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import ProtectedRoute from "../../../features/Dashboard/Components/ProtectedRoute";

function SitePage() {
  const { loading, error, snackBar, setSnackBar, setLoading } = useFetchSite();
  const [addSite, setAddSite] = useState(false);

  return (
    <>
      <Head>
        <title>Sites</title>
        <meta name="description" content="The best real-estate in ethiopia." />
        <link rel="icon" href="/images/logo1.png" />
      </Head>
      <ProtectedRoute>
        <AdminPageLayout pageIndex={2}>
          {addSite ? (
            <AddSiteComponent
              setAddSite={setAddSite}
              setLoading={setLoading}
              setSnackBar={setSnackBar}
            />
          ) : (
            <SiteListPreviewComponent
              setLoading={setLoading}
              setAddSite={setAddSite}
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

export default SitePage;
