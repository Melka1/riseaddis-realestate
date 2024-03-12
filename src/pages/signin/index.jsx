import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useStore } from "@/Context/store";
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
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Copyright } from "@/components/Auth/copyright";
import Link from "next/link";

const defaultTheme = createTheme();

export default function SignIn() {
  const router = useRouter();
  const { setUser, page } = useStore();
  console.log(page);
  const [state, setState] = useState({
    message: "",
    open: false,
    error: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("../api/auth", {
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((res) => {
        console.log(res.data);
        setState((prev) => ({
          ...prev,
          message: res.data.message,
          open: true,
          error: res.data.error,
        }));

        if (!res.data.error) {
          setUser(res.data.user);
          router.push(page);
        }
      });
  };

  const handleClose = () => {
    setState((prev) => ({ ...prev, open: false }));
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
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Box
                  onClick={() => router.replace("/signup")}
                  display={"inline"}
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
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={state.open}
        onClose={handleClose}
        autoHideDuration={3000}
        key={"top" + "right"}
      >
        <Alert
          onClose={handleClose}
          severity={state.error ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {state.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
