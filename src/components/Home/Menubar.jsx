import { useStore } from "@/Context/store";
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

import { Link } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const pages = [
  { name: "Home", link: "" },
  // { name: "Properties", link: "property" },
  {
    name: "Projects",
    link: "real-estate",
    subList: [
      { name: "Noah Realestate", link: "real-estate/noah-real-estate" },
      {
        name: "Abay Homes Realestate",
        link: "real-estate/abay-homes-real-estate",
      },
      { name: "Dalol Realestate", link: "/real-estate/dalol-real-estate" },
      { name: "Tsehay Realestate", link: "/real-estate/tsehay-real-estate" },
    ],
  },
  {
    name: "News & Articles",
    link: "blog",
    subList: [
      {
        name: "Top 3 destination in Addis Ababa",
        link: "blog/top-3-destination-in-addis-ababa",
      },
      {
        name: "5 ways to decorate your house",
        link: "blog/5-ways-to-decorate-your-house",
      },
      { name: "How to invest safely", link: "blog/how-to-invest-safely" },
    ],
  },
  { name: "Contact Us", link: "#contact-info" },
];

function ResponsiveAppBar({ type }) {
  const { user, setUser, setPage, page } = useStore();
  const router = useRouter();
  // console.log(user, "user", type, page);

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
    // console.log("Menu bar useeffect");
    setPage(type);
  }, []);

  return (
    <AppBar
      position="relative"
      sx={{
        background: (theme) =>
          `linear-gradient(90deg,${theme.palette.addis.dark}, ${theme.palette.addis.light},${theme.palette.addis.dark})`,
        p: { xs: "0.5rem 0.5rem", md: "0.5rem 4rem" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ display: { xs: "flex", md: "none" } }} />
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
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} dense divider>
                  <Box
                    position={"relative"}
                    onClick={() => router.push(`/${page.link}`)}
                    sx={{
                      "&:hover": {
                        color: "addisLight.main",
                      },
                      "&:hover::after": {
                        width: "100%",
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
                    {page.name}
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box display={"flex"} alignItems={"center"} component={"a"} href="/">
            <Box
              component={"img"}
              src="/images/logo1.png"
              height={{ xs: "30px", sm: "40px" }}
              p={"5px"}
              sx={{
                mr: 1,
                aspectRatio: "1",
                // backgroundColor: "white",
                borderRadius: { xs: "50%", sm: "0.5rem 0" },
              }}
            ></Box>
            <Typography
              flex={1}
              variant="h6"
              noWrap
              className={riseFont.className}
              fontSize={{ xs: "0.8rem", sm: "1rem", md: "1.2rem" }}
              sx={{
                mr: 2,
                // fontFamily: "monospace",
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
                <Box
                  position={"relative"}
                  className="list"
                  component={"a"}
                  href={`/${page.link}`}
                  onClick={() => router.push(`/${page.link}`)}
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
                  {page.name}
                </Box>
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
                      py={"0.5rem"}
                      borderRadius={"0.5rem"}
                      bgcolor={"background.paper"}
                      border={"1px solid lightgray"}
                      sx={{ minWidth: "calc(100% + 2rem)" }}
                    >
                      {page.subList.map((realestate) => (
                        <Button
                          href={`/${realestate.link}`}
                          color="rise"
                          key={realestate.name}
                          onClick={() => router.push(`/${realestate.link}`)}
                          sx={{
                            textWrap: "nowrap",
                            textTransform: "capitalize",
                            justifyContent: "flex-start",
                            transition: "all 0.3s",
                            "&:hover::after": {
                              width: "calc(100% - 2rem)",
                            },
                            "&:hover": {
                              transform: "translateX(10px)",
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
                          {realestate.name}
                        </Button>
                      ))}
                    </Box>
                  </Box>
                )}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
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
              {user?.name ? (
                <MenuItem onClick={handleCloseUserMenu} dense>
                  <Box
                    variant="a"
                    textAlign="center"
                    onClick={() => {
                      setState(true);
                      setUser({});
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
