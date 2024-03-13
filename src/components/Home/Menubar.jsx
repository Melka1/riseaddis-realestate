import { useStore } from "@/Context/store";
import { Adb, Person } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  Menu,
  Snackbar,
  Alert,
} from "@mui/material";

import { Link } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const pages = [
  { name: "Home", link: "" },
  { name: "Properties", link: "property" },
  { name: "Blog", link: "blog" },
  { name: "Contact", link: "#contact-info" },
];

function ResponsiveAppBar({ type }) {
  const { user, setUser, setPage, page } = useStore();
  const router = useRouter();
  console.log(user, "user", type, page);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [state, setState] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClose = () => {
    setState(false);
  };

  useEffect(() => {
    console.log("Menu bar useeffect");
    setPage(type);
  }, []);

  return (
    <AppBar position="sticky" sx={{ bgcolor: "rise.main" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component={"img"}
            src="/images/logo1.png"
            height="30px"
            p={"5px"}
            sx={{
              // display: { xs: "none", md: "flex" },
              mr: 1,
              aspectRatio: "1",
              backgroundColor: "white",
              borderRadius: "0.5rem 0",
            }}
          ></Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Rise Addis Properties
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page.name} href="#" underline="hover">
                  {page.name}
                </Link>
              ))}
            </Menu>
          </Box>
          <Adb sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block", color: "white" }}
              >
                <Box
                  onClick={() => router.push(`/${page.link}`)}
                  sx={{
                    "&:hover": {
                      color: "addisLight.main",
                    },
                  }}
                >
                  {page.name}
                </Box>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user?.name ? (
                  <Avatar alt={user.name} src={user.imgUrl} />
                ) : (
                  <Avatar alt="Remy Sharp">
                    <Person />
                  </Avatar>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Box
                  variant="a"
                  textAlign="center"
                  component={"a"}
                  // href="/profile"
                  onClick={() => router.push("/profile")}
                >
                  Profile
                </Box>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Box
                  variant="a"
                  textAlign="center"
                  component={"a"}
                  href="/account"
                >
                  Account
                </Box>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Box
                  variant="a"
                  textAlign="center"
                  component={"a"}
                  href="/dashboard"
                >
                  Dashboard
                </Box>
              </MenuItem>
              {user?.name ? (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Box
                    variant="a"
                    textAlign="center"
                    // component={"a"}
                    // href="/signin"
                    onClick={() => {
                      setState(true);
                      setUser({});
                    }}
                  >
                    Log out
                  </Box>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Box
                    variant="a"
                    textAlign="center"
                    component={"a"}
                    onClick={() => router.push("/signin")}
                  >
                    Log in
                  </Box>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={state}
        onClose={handleClose}
        autoHideDuration={3000}
        key={"top" + "right"}
      >
        <Alert
          onClose={handleClose}
          severity={"success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          Logged out Successfully
        </Alert>
      </Snackbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
