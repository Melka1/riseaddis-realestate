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
import { useState } from "react";
import Loading from "@/components/Loading";
import { Copyright } from "@/features/CopyRight/copyright";
import { Key } from "@mui/icons-material";
import Head from "next/head";
import OTP from "@/components/OTPInput";
import { useOTPStore } from "@/stores/otpStore";
import handleRequestOTP from "@/api/auth/handleRequestOTP";
import handleVerifyOTP from "@/api/auth/handleVerifyOTP";

export default function SignIn() {
  const router = useRouter();
  const { otp, setOTP } = useOTPStore();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [localOTP, setLocalOTP] = useState("");
  const [snackBar, setSnackBar] = useState({
    type: "success",
    message: "Hello World!",
    open: false,
  });
  const [requestAnotherOTP, setRequestAnotherOTP] = useState(false);

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
            {otp ? "Verify OTP" : "Request Reset Password"}
          </Typography>
          <Box pt={"2rem"} maxWidth={"350px"} width={"90%"}>
            {!otp && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
            {otp && (
              <Stack width={1} alignItems={"center"} pt="2rem">
                <OTP
                  separator={<span>-</span>}
                  value={localOTP}
                  onChange={setLocalOTP}
                  length={6}
                />
              </Stack>
            )}
            <Button
              onClick={() => {
                otp
                  ? handleVerifyOTP({
                      otp,
                      localOTP,
                      setLoading,
                      setSnackBar,
                      setRequestAnotherOTP,
                      router,
                    })
                  : handleRequestOTP({
                      email,
                      setOTP,
                      setLoading,
                      setSnackBar,
                      setRequestAnotherOTP,
                    });
              }}
              fullWidth
              size="large"
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: "capitalize" }}
            >
              {otp ? "Verify OTP" : "Request OTP"}
            </Button>
            {requestAnotherOTP && (
              <Stack alignItems={"center"}>
                <Button
                  variant="text"
                  onClick={() => {
                    setLocalOTP("");
                    handleRequestOTP();
                  }}
                  sx={{ textTransform: "capitalize" }}
                >
                  Request Another OTP
                </Button>
              </Stack>
            )}
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
