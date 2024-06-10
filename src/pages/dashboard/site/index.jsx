import AddSiteComponent from "@/components/Dashboard/Site/AddSiteComponent";
import SiteListPreviewComponent from "@/components/Dashboard/Site/SiteListPreviewComponent";
import Loading from "@/components/Loading";
import AdminPageLayout from "@/layouts/adminPageLayout";
import { backEndUrls } from "@/pages";
import { useDashboardStore } from "@/stores/dashboardStore";
import { useTokenStore } from "@/stores/tokenStore";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SitePage() {
  const { setSites } = useDashboardStore();
  const { token } = useTokenStore();
  const router = useRouter();

  const [addSite, setAddSite] = useState(false);
  const [loading, setLoading] = useState(true);
  const [snackBar, setSnackBar] = useState({
    type: "success",
    message: "Hello World!",
    open: false,
  });

  useEffect(() => {
    axios
      .get(`${backEndUrls.local}site/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setSites(data.data);
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
        <title>Sites</title>
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
      </main>
    </>
  );
}

export default SitePage;
