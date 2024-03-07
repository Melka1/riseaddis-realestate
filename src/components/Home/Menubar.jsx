import { useStore } from "@/Context/store";
import { Adb } from "@mui/icons-material";
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
} from "@mui/material";

import { Link } from "@mui/material";
import { useEffect, useState } from "react";

const pages = [
  { name: "Home", link: "" },
  { name: "Properties", link: "property" },
  { name: "Blog", link: "blog" },
  { name: "Contact", link: "#contact-info" },
];

function ResponsiveAppBar() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  console.log(user);

  useEffect(() => {
    setUser({ name: "John" });
  }, []);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
            Rise Addis
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
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link href={`/${page.link}`} underline="none" color={"white"}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  // src="https://res.cloudinary.com/dov9kdlci/image/upload/v1702744271/nipfvy8oooxcvfzozgvb.png"
                  src="/images/user.png"
                />
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
                  href="/profile"
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Box
                  variant="a"
                  textAlign="center"
                  component={"a"}
                  href="/signin"
                >
                  Log out
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
