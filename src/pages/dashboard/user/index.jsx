import Loading from "@/components/Loading";
import ProtectedRoute from "@/features/Dashboard/Components/ProtectedRoute";
import UserListPreviewComponent from "@/features/Dashboard/User/UserListPreviewComponent";
import UserProfileComponent from "@/features/Dashboard/User/UserProfileComponent";
import useFetchUser from "@/hooks/useFetchUser";
import AdminPageLayout from "@/layouts/AdminPageLayout";
import { Alert, Grid, Snackbar, Stack } from "@mui/material";
import Head from "next/head";

const UserPage = () => {
  const { loading, snackBar, setSnackBar, setLoading } = useFetchUser();

  return (
    <>
      <Head>
        <meta name="description" content="The best real-estate in ethiopia." />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <ProtectedRoute>
        <AdminPageLayout pageIndex={7}>
          <Stack>
            <Grid container spacing={4}>
              <Grid item xs={8}>
                <Stack spacing={2}>
                  <UserListPreviewComponent
                    setLoading={setLoading}
                    setSnackBar={setSnackBar}
                  />
                </Stack>
              </Grid>

              <Grid item xs={4}>
                <UserProfileComponent
                  setLoading={setLoading}
                  setSnackBar={setSnackBar}
                />
              </Grid>
            </Grid>
          </Stack>
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
};

export default UserPage;
