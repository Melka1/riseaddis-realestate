import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Copyright } from "@/components/Auth/copyright";
import { useRouter } from "next/router";
import axios from "axios";
import { backEndUrls } from "..";
import { useTokenStore } from "@/stores/tokenStore";
import { useState } from "react";
import { useStore } from "@/stores/userStore";

const defaultTheme = createTheme();

export default function SignUp() {
  const {setUser} = useStore()
  const { setToken } = useTokenStore();
  const router = useRouter();

  const [snackBar, setSnackBar] = useState({
    type: false,
    message: "Hello World!",
    open: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    });

    axios
      .post(`${backEndUrls.local}auth/register`, {
        email: data.get("email"),
        password: data.get("password"),
        name: data.get("firstName") + data.get("lastName"),
      })
      .then(({ data }) => {
        setSnackBar({
          type: false,
          message: data.message,
          open: true,
        });

        setToken(data.token);
        setUser(data.user);
        router.push("/");
      })
      .catch((err) => {
        setSnackBar({
          type: true,
          message:
            err?.response?.data?.message ||
            "Something went wrong, please try again!",
          open: true,
        });
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            bgcolor: "rgba(255,255,255,0.8)",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
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
                  required
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
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackBar?.open}
        onClose={() => setSnackBar((p) => ({ ...p, open: false }))}
        autoHideDuration={3000}
        key={"top" + "right"}
      >
        <Alert
          onClose={() => setSnackBar((p) => ({ ...p, open: false }))}
          severity={snackBar.type ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
