"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Index({ message }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  console.log(loading);
  console.log(router.query["search"]);

  useEffect(() => {
    console.log(router.query["search"]);
    setLoading(false);
  }, [loading]);

  if (loading) {
    return <>loading....</>;
  } else {
    let term = router.query?.search?.toUpperCase();
    return <div>{term}</div>;
  }
}

export default Index;

export async function getStaticProps(context) {
  return {
    props: { message: `Next.js is awesome` }, // will be passed to the page component as props
  };
}
