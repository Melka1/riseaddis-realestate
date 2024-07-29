import Head from "next/head";
import { useRouter } from "next/router";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { Copyright } from "@/features/CopyRight/copyright";
import { Key } from "@mui/icons-material";
import { useSearchParams } from "next/navigation";
import { useOTPStore } from "@/stores/otpStore";
import handlePasswordChange from "@/api/auth/handlePasswordChange";
import checkOTPSession from "@/api/auth/checkOTPSession";

export default function ChangePasswordPage() {
  const router = useRouter();
  const { setOTP } = useOTPStore();
  const session_id = useSearchParams().get("session_id");

  const [loading, setLoading] = useState(false);
  const [snackBar, setSnackBar] = useState({
    type: "success",
    message: "Hello World!",
    open: false,
  });

  useEffect(() => {
    checkOTPSession({ session_id, setLoading, setOTP, setSnackBar, router });
  }, []);

  return (
    <>
      <Head>
        <title>Rise Addis Properties</title>
        <meta
          name="description"
          content="The best and affordable real-estate in ethiopia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.png" />
      </Head>
      <main style={{ position: "relative" }}>
        <Stack
          height={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            alignItems: "center",
            position: "relative",
            bgcolor: "rgba(255,255,255,0.8)",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <Key />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          <Box
            width={"90%"}
            maxWidth={"350px"}
            component="form"
            onSubmit={(event) =>
              handlePasswordChange({
                event,
                session_id,
                setLoading,
                setSnackBar,
                router,
              })
            }
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="new-password"
              label="New Password"
              name="password"
              type="password"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirm-password"
            />

            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change
            </Button>
          </Box>
          <Box
            position={"absolute"}
            width={"300px"}
            sx={{ aspectRatio: 1, top: "calc(50% - 150px)" }}
            component={"img"}
            src="/Logo.png"
            alt={"Logo"}
            zIndex={-1}
          />
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Stack>

        {loading && <Loading />}

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={snackBar?.open}
          onClose={() => setSnackBar((p) => ({ ...p, open: false }))}
          autoHideDuration={3000}
          key={"top" + "right"}
        >
          <Alert
            onClose={() => setSnackBar((p) => ({ ...p, open: false }))}
            severity={snackBar.type}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackBar.message}
          </Alert>
        </Snackbar>
      </main>
    </>
  );
}
