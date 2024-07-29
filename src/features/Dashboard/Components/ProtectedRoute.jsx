import Loading from "@/components/Loading";
import { chosenBackendUrl } from "@/pages";
import { useTokenStore } from "@/stores/tokenStore";
import { userStore } from "@/stores/userStore";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ProtectedRoute({ children }) {
  const { token, setToken } = useTokenStore();
  const { user, setUser } = userStore();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [retry, setRetry] = useState(true);

  useEffect(() => {
    console.log(token);
    if (token) {
      if (!user) {
        try {
          axios
            .get(`${chosenBackendUrl}user`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then(({ data }) => {
              if (data.user.role != "admin") {
                setToken(null);
                setUser(null);
                return router.push("/signin");
              }

              setUser(data.user);
              setLoading(false);
            })
            .catch((err) => {
              console.log(err);
              return;
            });
        } catch (err) {
          console.log(err);
          return;
        }
      } else {
        setLoading(false);
        return;
      }

      if (token && user && user.role !== "admin") {
        setToken(null);
        setUser(null);
        return router.push("/signin");
      }
    }

    if (retry) {
      setRetry(false);
      return;
    }

    console.log(token);
    if (!token) router.push("/signin");
  }, [retry, token]);

  if (loading) return <Loading />;

  return (
    <main
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </main>
  );
}

export default ProtectedRoute;
