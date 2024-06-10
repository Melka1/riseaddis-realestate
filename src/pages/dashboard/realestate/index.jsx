import AddRealEstateComponent from "@/components/Dashboard/RealEstate/AddRealEstateComponent";
import RealEstateListPreviewComponent from "@/components/Dashboard/RealEstate/RealesatateListPreviewComponent";
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

function RealEstatePage() {
  const { setRealEstates } = useDashboardStore();
  const { token } = useTokenStore();
  const router = useRouter();

  const [addRealEstate, setAddRealEstate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [snackBar, setSnackBar] = useState({
    type: "success",
    message: "Hello World!",
    open: false,
  });

  useEffect(() => {
    axios
      .get(`${backEndUrls.local}realestate/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setRealEstates(data.data);
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
        <title>Real Estate</title>
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
      </main>
    </>
  );
}

export default RealEstatePage;

// export async function getStaticProps() {
//   const realEstatesResponse = await axios.get(
//     `${backEndUrls.local}realestate/all`
//   );
//   return {
//     props: {
//       realEstatesFromServer: realEstatesResponse.data.data,
//     },
//   };
// }
