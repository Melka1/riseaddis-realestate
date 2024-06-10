import { useStore } from "@/stores/userStore";
import { riseFont } from "@/pages/_app";
import { Person } from "@mui/icons-material";
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
  Link,
} from "@mui/material";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AnimatedLink from "../AnimatedLink";
import AnimatedHeader from "../AnimatedHeader";
import { useTokenStore } from "@/stores/tokenStore";

const pages = [
  {
    name: "News & Articles",
    link: "blog",
    subList: [
      {
        name: "What's New?",
        link: "blog/what-is-new",
      },
      {
        name: "Real-estate in Ethiopia",
        link: "blog/real-estate-in-ethiopia",
      },
    ],
  },
  { name: "Contact Us", link: "contact-us" },
];

function ResponsiveAppBar({ type, handleOpenSlidingMenu, realEstates }) {
  const { user, setUser, setPage, page } = useStore();
  const { setToken, token } = useTokenStore();
  const router = useRouter();

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
    setPage(type);
  }, []);

  return (
    <AppBar
      position="relative"
      sx={{
        bgcolor: "riseLight.main",
        boxShadow: "none",
        p: { xs: "0.5rem 0.5rem", md: "0.5rem 4rem" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: { xs: 0, md: 1 },
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenSlidingMenu}
              color="rise.main"
            >
              <MenuIcon sx={{ display: { xs: "flex", md: "none" } }} />
            </IconButton>
          </Box>

          <Box
            title="Rise Addis Properties"
            display={"flex"}
            alignItems={"center"}
            component={"a"}
            href="/"
          >
            <Box
              component={"img"}
              src="/images/logo1.png"
              height={{ xs: "35px", sm: "50px" }}
              p={"5px"}
              mr={"auto"}
              sx={{
                mr: "auto",
                aspectRatio: "1",
                borderRadius: { xs: "50%", sm: "0.5rem 0" },
              }}
            ></Box>
            <Typography
              flex={1}
              variant="h6"
              noWrap
              className={riseFont.className}
              fontSize={{ xs: "0.8rem", sm: "1rem", md: "1.3rem" }}
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "rise.dark",
                textDecoration: "none",
              }}
            >
              Rise Addis Properties
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Button
              key={page.name}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                display: "block",
                color: "white",
                position: "relative",
                "&:hover .sublist": {
                  display: "block",
                },
                "&:hover .list::after": {
                  width: "100%",
                },
              }}
            >
              <Box
                position={"relative"}
                className="list"
                component={"a"}
                color="addisLight.dark"
                onClick={() => router.push(`/`)}
                sx={{
                  fontWeight: "bold",
                  "&:hover": {
                    color: "addisLight.main",
                  },
                  "&::after": {
                    position: "absolute",
                    content: "''",
                    width: 0,
                    height: " 2px",
                    left: 0,
                    bottom: "-5px",
                    backgroundColor: "addisLight.main",
                    transition: "width ease-in-out 0.3s",
                  },
                }}
              >
                Home
              </Box>
            </Button>

            <Button
              title="real-estates"
              key={page.name}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                display: "block",
                color: "white",
                position: "relative",
                "&:hover .sublist": {
                  display: "block",
                },
                "&:hover .list::after": {
                  width: "100%",
                },
              }}
            >
              <AnimatedHeader url={"/real-estate"} name={"Projects"} />
              {realEstates.length > 0 && (
                <Box
                  className="sublist"
                  display={"none"}
                  position="absolute"
                  left={0}
                  top={"100%"}
                  pt={"1rem"}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    p={"1rem"}
                    borderRadius={"0.5rem"}
                    bgcolor={"background.paper"}
                    border={"1px solid lightgray"}
                    sx={{ minWidth: "calc(100% + 2rem)" }}
                    gap={2}
                  >
                    {realEstates.map((realestate, index) => {
                      return (
                        <AnimatedLink
                          key={index}
                          name={realestate.name}
                          url={`/real-estate/${realestate.link}`}
                        />
                      );
                    })}
                  </Box>
                </Box>
              )}
            </Button>

            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  color: "white",
                  position: "relative",
                  "&:hover .sublist": {
                    display: "block",
                  },
                  "&:hover .list::after": {
                    width: "100%",
                  },
                }}
              >
                <AnimatedHeader url={page.link} name={page.name} />
                {page?.subList?.length && (
                  <Box
                    className="sublist"
                    display={"none"}
                    position="absolute"
                    left={0}
                    top={"100%"}
                    pt={"1rem"}
                  >
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      p={"1rem 1rem"}
                      borderRadius={"0.5rem"}
                      bgcolor={"background.paper"}
                      border={"1px solid lightgray"}
                      gap={2}
                      sx={{ minWidth: "calc(100% + 2rem)" }}
                    >
                      {page.subList.map((realestate, index) => (
                        <AnimatedLink
                          key={index}
                          name={realestate.name}
                          url={realestate.link}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </Button>
            ))}
          </Box>

          <Box
            display={{ xs: "none", md: "block" }}
            sx={{ flexGrow: 0, zIndex: 10000 }}
          >
            <Tooltip sx={{ zIndex: 10001 }}>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, bgcolor: "transparent" }}
              >
                {user?.name ? (
                  <Avatar
                    alt={user.name}
                    src={user.imgUrl}
                    sx={{
                      width: { xs: 30, sm: 35 },
                      height: { xs: 30, sm: 35 },
                    }}
                  />
                ) : (
                  <Avatar
                    alt="Remy Sharp"
                    sx={{
                      width: { xs: 30, sm: 35 },
                      height: { xs: 30, sm: 35 },
                    }}
                  >
                    <Person />
                  </Avatar>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px", zIndex: 100000000 }}
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
              <MenuItem onClick={handleCloseUserMenu} dense>
                <Box
                  variant="a"
                  textAlign="center"
                  component={"a"}
                  onClick={() => router.push("/profile")}
                >
                  Profile
                </Box>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu} dense>
                <Box
                  variant="a"
                  textAlign="center"
                  component={"a"}
                  href="/account"
                >
                  Account
                </Box>
              </MenuItem>
              {user?.role == "admin" && (
                <MenuItem onClick={handleCloseUserMenu} dense>
                  <Box
                    variant="a"
                    textAlign="center"
                    component={"a"}
                    href="/dashboard"
                  >
                    Dashboard
                  </Box>
                </MenuItem>
              )}
              {token ? (
                <MenuItem onClick={handleCloseUserMenu} dense>
                  <Box
                    variant="a"
                    textAlign="center"
                    onClick={() => {
                      setState(true);
                      setUser(null);
                      setToken(null);
                    }}
                  >
                    Log out
                  </Box>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleCloseUserMenu} dense>
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
