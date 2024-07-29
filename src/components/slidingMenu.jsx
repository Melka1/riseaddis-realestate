import { Close, Person } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Slide,
  Stack,
  Typography,
} from "@mui/material";

import { userStore } from "@/stores/userStore";
import { useRouter } from "next/router";

const style = {
  position: "absolute",
  top: "0%",
  left: "0%",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: 1,
  overflow: "scroll",
  display: "flex",
  flexDirection: "column",
};

const blogList = [
  {
    name: "What's New?",
    link: "blog/what-is-new",
  },
  {
    name: "Real-estate in Ethiopia",
    link: "blog/real-estate-in-ethiopia",
  },
];

function SlidingMenu({ open, handleClose, realEstates, articles }) {
  const router = useRouter();
  const { user, setUser } = userStore();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ zIndex: 3000 }}
    >
      <Slide direction="right" in={open}>
        <Box sx={style}>
          <Box
            width={1}
            display={"flex"}
            alignItems={"center"}
            gap={1}
            borderBottom={"1px solid lightgray"}
            p={{
              xs: 1,
              sm: 3,
            }}
          >
            <IconButton onClick={handleClose}>
              <Close sx={{ fontSize: { xs: 25, sm: 37.5, md: 40 } }} />
            </IconButton>
            <Typography
              fontWeight={"bold"}
              pr={"1rem"}
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "2rem",
                },
                color: {
                  xs: "rise.main",
                },
              }}
            >
              Rise Addis Properties
            </Typography>
          </Box>
          <Divider flexItem sx={{ borderColor: "background.paper" }} />
          <Stack flex={1} p={"1rem 2rem"}>
            <Button
              sx={{
                display: "flex",
                fontSize: { xs: "0.8rem", sm: "1.25rem" },
                justifyContent: "flex-start",
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
                width={1}
                href="/"
                sx={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "addisLight.main",
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

            <Box width={1}>
              <Button
                fullWidth
                sx={{
                  display: "flex",
                  fontSize: { xs: "0.8rem", sm: "1.25rem" },
                  justifyContent: "flex-start",
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
                  width={1}
                  href="/real-estate"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "left",
                    color: "addisLight.main",
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
                  Projects
                </Box>
              </Button>
              {realEstates.map((realestate) => {
                return (
                  <Button
                    fullWidth
                    title=""
                    color="rise"
                    key={realestate.id}
                    onClick={() =>
                      router.push(`/real-estate/${realestate.link}`)
                    }
                    sx={{
                      color: "rise.main",
                      ml: "1rem",
                      fontSize: { xs: "0.8rem", sm: "1.25rem" },
                      textWrap: "nowrap",
                      textTransform: "capitalize",
                      justifyContent: "flex-start",
                      transition: "all 0.3s",
                      "&:hover::after": {
                        width: "calc(100%)",
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
                );
              })}
            </Box>

            {articles.length > 0 && (
              <Box width={1}>
                <Button
                  fullWidth
                  sx={{
                    display: "flex",
                    fontSize: { xs: "0.8rem", sm: "1.25rem" },
                    justifyContent: "flex-start",
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
                    width={1}
                    onClick={() => router.push(`/blog`)}
                    sx={{
                      fontWeight: "bold",
                      textAlign: "left",
                      color: "addisLight.main",
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
                    News & Articles
                  </Box>
                </Button>
                {articles.map((article, ind) => {
                  return (
                    <Button
                      fullWidth
                      title=""
                      color="rise"
                      key={ind}
                      onClick={() => router.push(`/blog/${article.link}`)}
                      sx={{
                        ml: "1rem",
                        fontSize: { xs: "0.8rem", sm: "1.25rem" },
                        color: "rise.main",
                        textTransform: "capitalize",
                        justifyContent: "flex-start",
                        textAlign: "left",
                        transition: "all 0.3s",
                        "&:hover::after": {
                          width: "calc(100%)",
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
                      {article.title}
                    </Button>
                  );
                })}
              </Box>
            )}

            <Button
              fullWidth
              sx={{
                display: "flex",
                fontSize: { xs: "0.8rem", sm: "1.25rem" },
                justifyContent: "flex-start",
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
                width={1}
                href="/contact-us"
                sx={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "addisLight.main",
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
                Contact Us
              </Box>
            </Button>
          </Stack>
          <Divider flexItem sx={{ borderColor: "background.paper" }} />
          <Box display={"flex"} p={{ xs: 2, sm: 4 }} width={1}>
            <IconButton sx={{ p: 0, bgcolor: "transparent" }}>
              {user?.name ? (
                <Avatar
                  alt={user.name}
                  src={user.image}
                  sx={{
                    width: { xs: 35, sm: 55 },
                    height: { xs: 35, sm: 55 },
                  }}
                />
              ) : (
                <Avatar
                  alt="Remy Sharp"
                  sx={{
                    p: 0,
                    width: { xs: 35, sm: 55 },
                    height: { xs: 35, sm: 55 },
                  }}
                >
                  <Person fontSize="medium" />
                </Avatar>
              )}
            </IconButton>

            {user ? (
              <Button
                onClick={() => setUser(null)}
                variant="text"
                color="rise"
                sx={{ fontSize: { xs: "0.9rem", sm: "1.25rem" } }}
              >
                Log Out
              </Button>
            ) : (
              <Button
                onClick={() => router.push("/signin")}
                variant="text"
                color="rise"
                sx={{ fontSize: { xs: "0.9rem", sm: "1.25rem" } }}
              >
                Sign In/Register
              </Button>
            )}
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
}

export default SlidingMenu;
