import { userStore } from "@/stores/userStore";
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
} from "@mui/material";

import { useEffect, useState } from "react";
import AnimatedLink from "../../components/AnimatedLink";
import AnimatedHeader from "../../components/AnimatedHeader";
import { useTokenStore } from "@/stores/tokenStore";
import axios from "axios";
import { chosenBackendUrl } from "@/pages";

const pages = [{ name: "Contact Us", link: "/contact-us" }];

function MenuBar({ type, handleOpenSlidingMenu, realEstates, articles }) {
  const { user, setUser, setPage, page } = userStore();
  const { setToken, token } = useTokenStore();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [state, setState] = useState(false);

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
    if (token && !user) {
      try {
        axios
          .get(`${chosenBackendUrl}user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(({ data }) => {
            setUser(data.user);
          });
      } catch (err) {
        setUser(null);
      }
    }
  }, [page, token, setPage, type, setUser, user]);

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
              aria-controls="menu-appBar"
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
              src="/logo1.png"
              height={{ xs: "35px", sm: "50px" }}
              p={"5px"}
              mr={"auto"}
              alt="logo"
              sx={{
                mr: "auto",
                aspectRatio: "1",
                borderRadius: { xs: "0.5rem 0" },
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
                "&:hover .subList": {
                  display: "block",
                },
                "&:hover .list>p::after": {
                  width: "100%",
                },
              }}
            >
              <AnimatedHeader url={"/"} name="Home" />
            </Button>

            <Button
              title="real-estates"
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                display: "block",
                color: "white",
                position: "relative",
                "&:hover .subList": {
                  display: "block",
                },
                "&:hover .list>p::after": {
                  width: "100%",
                },
              }}
            >
              <AnimatedHeader url={"/real-estate"} name={"Projects"} />
              {realEstates.length > 0 && (
                <Box
                  className="subList"
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

            {articles.length > 0 && (
              <Button
                title="articles"
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  color: "white",
                  position: "relative",
                  "&:hover .subList": {
                    display: "block",
                  },
                  "&:hover .list?p::after": {
                    width: "100%",
                  },
                }}
              >
                <AnimatedHeader url={"/blog"} name={"Blogs & Articles"} />
                {articles.length > 0 && (
                  <Box
                    className="subList"
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
                      {articles.map((article, index) => {
                        return (
                          <AnimatedLink
                            key={index}
                            name={article.title}
                            url={`/blog/${article.link}`}
                          />
                        );
                      })}
                    </Box>
                  </Box>
                )}
              </Button>
            )}

            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  color: "white",
                  position: "relative",
                  "&:hover .subList": {
                    display: "block",
                  },
                  "&:hover .list>p::after": {
                    width: "100%",
                  },
                }}
              >
                <AnimatedHeader url={page.link} name={page.name} />
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
                aria-label="open login dropdown"
              >
                {user?.name ? (
                  <Avatar
                    alt={user.name}
                    src={user.image}
                    sx={{
                      width: { xs: 30, sm: 35 },
                      height: { xs: 30, sm: 35 },
                    }}
                  />
                ) : (
                  <Avatar
                    alt="user name"
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
              id="menu-appBar"
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
              {user?.role == "admin" && (
                <MenuItem
                  aria-label="Go to dashboard"
                  onClick={handleCloseUserMenu}
                  dense
                >
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
                <MenuItem
                  aria-label="log out"
                  onClick={handleCloseUserMenu}
                  dense
                >
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
                <MenuItem
                  aria-label="log in"
                  onClick={handleCloseUserMenu}
                  dense
                >
                  <Box
                    variant="a"
                    textAlign="center"
                    component={"a"}
                    href="/signin"
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
export default MenuBar;
