import Head from "next/head";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useRouter } from "next/router";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTokenStore } from "@/stores/tokenStore";
import { useState } from "react";
import { userStore } from "@/stores/userStore";
import Loading from "@/components/Loading";
import { Copyright } from "@/features/CopyRight/copyright";
import handleLogin from "@/api/auth/handleLogin";

export default function SignIn() {
  const router = useRouter();
  const { setUser } = userStore();
  const { setToken, token } = useTokenStore();
  const [loading, setLoading] = useState(false);
  const [snackBar, setSnackBar] = useState({
    type: "success",
    message: "Hello World!",
    open: false,
  });

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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            width={"90%"}
            maxWidth={"400px"}
            component="form"
            onSubmit={(event) =>
              handleLogin({
                event,
                setLoading,
                setSnackBar,
                setUser,
                setToken,
                router,
              })
            }
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              size="large"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="/password-reset"
                  variant="body2"
                  sx={{ fontSize: { xs: "0.85rem", sm: "1rem" } }}
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Box
                  onClick={() => router.replace("/signup")}
                  display={"inline"}
                  fontSize={{ xs: "0.85rem", sm: "1rem" }}
                >
                  Don&apos;t have an account?{" "}
                  <Box
                    sx={{
                      display: "inline",
                      cursor: "pointer",
                      "&:hover": {
                        textDecoration: "underline !important",
                        color: "blue",
                      },
                    }}
                  >
                    Sign Up
                  </Box>
                </Box>
              </Grid>
            </Grid>
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
