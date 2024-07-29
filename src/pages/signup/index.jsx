import Head from "next/head";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useTokenStore } from "@/stores/tokenStore";
import { useState } from "react";
import { userStore } from "@/stores/userStore";
import { Copyright } from "@/features/CopyRight/copyright";
import handleRegister from "@/api/auth/handleRegister";
import { PersonPin } from "@mui/icons-material";
import Loading from "@/components/Loading";

export default function SignUp() {
  const { setUser } = userStore();
  const { setToken } = useTokenStore();
  const router = useRouter();

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
            <PersonPin />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            width={"90%"}
            maxWidth={"400px"}
            component="form"
            noValidate
            onSubmit={(event) =>
              handleRegister({
                event,
                setSnackBar,
                setLoading,
                setToken,
                setUser,
                router,
              })
            }
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Box onClick={() => router.replace("/signin")}>
                  Already have an account?{" "}
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
                    Sign In
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
          <Copyright sx={{ mt: 5 }} />
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
