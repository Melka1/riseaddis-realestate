import AdminPageLayout from "@/layouts/AdminPageLayout";
import Head from "next/head";

function Article() {
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
      <main
        style={{
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AdminPageLayout pageIndex={6}></AdminPageLayout>
      </main>
    </>
  );
}

export default Article;
