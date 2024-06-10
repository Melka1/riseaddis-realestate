import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Copyright } from "@/components/Auth/copyright";
import { backEndUrls } from "..";
import { useTokenStore } from "@/stores/tokenStore";
import { useState } from "react";
import { useStore } from "@/stores/userStore";
import Loading from "@/components/Loading";

const defaultTheme = createTheme();

export default function SignIn() {
  const router = useRouter();
  const { setUser } = useStore();
  const { setToken } = useTokenStore();
  const [loading, setLoading] = useState(false);
  const [snackBar, setSnackBar] = useState({
    type: false,
    message: "Hello World!",
    open: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post(`${backEndUrls.local}auth/login`, {
        email: event.target.email.value,
        password: event.target.password.value,
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
        console.log(err);
        setSnackBar({
          type: true,
          message:
            err?.response?.data?.message ||
            "Something went wrong, please try again!",
          open: true,
        });
        setLoading(false);
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
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
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
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
        </Box>
        {loading && <Loading />}

        <Copyright sx={{ mt: 8, mb: 4 }} />
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
