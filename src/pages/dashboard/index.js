import { useStore } from "@/stores/userStore";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Divider,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
// import axios from "axios";
// import { backEndUrls } from "..";
import TopAddressBar from "@/components/Home/TopAddress";
import AddRealEstateComponent from "@/components/Dashboard/RealEstate/AddRealEstateComponent";
import RealEstateListPreviewComponent from "@/components/Dashboard/RealEstate/RealesatateListPreviewComponent";
import Head from "next/head";
import AdminPageLayout from "@/layouts/AdminPageLayout";
import Loading from "@/components/Loading";
import { useRouter } from "next/router";
import { useTokenStore } from "@/stores/tokenStore";

const buttons = [
  "Overview",
  "Real-estates",
  "Sites",
  "Units",
  "Users",
  "Settings",
];

function AdminPage() {
  const { token } = useTokenStore();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [snackBar, setSnackBar] = useState({
    type: "success",
    message: "Hello World!",
    open: false,
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Overview</title>
        <meta
          name="description"
          content="The best and affordable real-estate in ethiopia"
        />
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
        <AdminPageLayout pageIndex={0}>
          {/* {addRealEstate ? (
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
          )} */}
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

export default AdminPage;
