import Head from "next/head";

import ArticleListPreviewComponent from "@/features/Dashboard/Article/ArticleListPreviewComponent";
import Loading from "@/components/Loading";
import useFetchArticle from "@/hooks/useFetchArticle";
import AdminPageLayout from "@/layouts/AdminPageLayout";
import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import ProtectedRoute from "../../../features/Dashboard/Components/ProtectedRoute";
import AddArticleComponent from "@/features/Dashboard/Article/AddArticleComponent";

function ArticlePage() {
  const [addArticle, setAddArticle] = useState(false);
  const { loading, setLoading, snackBar, setSnackBar, error } =
    useFetchArticle();
  return (
    <>
      <Head>
        <title>Article</title>
        <meta
          name="description"
          content="The best and affordable real-estate in ethiopia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo1.png" />
      </Head>
      <ProtectedRoute>
        <AdminPageLayout pageIndex={6}>
          {addArticle ? (
            <AddArticleComponent
              setAddArticle={setAddArticle}
              setLoading={setLoading}
              setSnackBar={setSnackBar}
            />
          ) : (
            <ArticleListPreviewComponent
              setAddArticle={setAddArticle}
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

export default ArticlePage;
