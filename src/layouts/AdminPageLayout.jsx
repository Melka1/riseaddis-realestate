import ErrorPage from "@/components/ErrorPage";
import { useTokenStore } from "@/stores/tokenStore";
import { userStore } from "@/stores/userStore";
import { Logout } from "@mui/icons-material";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

const pages = [
  { name: "Overview", link: "/dashboard" },
  { name: "Real-estates", link: "/dashboard/realestate" },
  { name: "Sites", link: "/dashboard/site" },
  { name: "Units", link: "/dashboard/unit" },
  { name: "Payments", link: "/dashboard/payment" },
  { name: "Amenities", link: "/dashboard/amenity" },
  { name: "Articles", link: "/dashboard/article" },
  { name: "Users", link: "/dashboard/user" },
];

function AdminPageLayout({ pageIndex, children }) {
  const router = useRouter();
  const { setUser } = userStore();
  const { setToken } = useTokenStore();

  return (
    <>
      <Box
        flex={1}
        display={{ xs: "none", sm: "flex" }}
        flexDirection={"column"}
        height={1}
      >
        <Stack
          p={"1rem 4rem"}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgcolor={"riseLight.light"}
        >
          <Box
            component={"a"}
            display={"flex"}
            alignItems={"center"}
            gap={"0.5rem"}
            href="/"
          >
            <Box component={"img"} src="/Logo.svg" width={40} height={40} />
            <Typography fontSize={"1.5rem"} fontWeight={"bold"}>
              Home
            </Typography>
          </Box>
          <Button
            onClick={() => {
              setUser({});
              setToken(null);
            }}
            endIcon={<Logout />}
            sx={{ textTransform: "unset", color: "rise.main" }}
          >
            <Typography>Log Out</Typography>
          </Button>
        </Stack>

        <Box
          display={"flex"}
          flex={1}
          width={{ xs: 1, md: "100%" }}
          margin={"auto"}
          flexDirection={"column"}
          maxHeight={"100%"}
          height={1}
          overflow={"hidden"}
        >
          <Stack direction={"row"} gap={4} maxHeight={"100%"} height={1}>
            <Box
              display={"grid"}
              gap={4}
              gridTemplateColumns="repeat(12, 1fr)"
              height={1}
              width={1}
            >
              <Box gridColumn={"span 2"} maxHeight={1} overflow={"hidden"}>
                <Stack
                  sx={{ bgcolor: "riseLight.light" }}
                  p={"1rem 0"}
                  pr={0}
                  width={1}
                >
                  <Typography
                    variant="h6"
                    fontWeight={"bold"}
                    color={"text.primary"}
                    pl={"1rem"}
                    pb={"0.5rem"}
                    fontSize={{ sm: "0.9rem", md: "1.1rem" }}
                  >
                    Dashboard
                  </Typography>

                  {pages.map((page, index) => {
                    if (page.name) {
                      return (
                        <Button
                          key={index}
                          fullWidth
                          size="large"
                          onClick={() => router.push(page.link)}
                          sx={{
                            justifyContent: "flex-start",
                            borderLeft: "4px solid transparent",
                            borderRadius: "0",
                            color: "text.primary",
                            textTransform: "capitalize",
                            bgcolor:
                              pages.indexOf(page) == pageIndex
                                ? "background.paper"
                                : "",
                            borderColor:
                              pages.indexOf(page) == pageIndex
                                ? "addis.main"
                                : "",
                            "&:hover": {
                              bgcolor: "background.paper",
                            },
                          }}
                        >
                          {page.name}
                        </Button>
                      );
                    } else {
                      return (
                        <Divider
                          key={index}
                          flexItem
                          sx={{ m: "0.5rem 1rem" }}
                        />
                      );
                    }
                  })}
                </Stack>
              </Box>

              <Box gridColumn={"span 10"} maxHeight={1} overflow={"hidden"}>
                <Stack
                  width={1}
                  gap={{ xs: 3, md: 4 }}
                  p={"2rem"}
                  pb={"0.5rem"}
                  height={1}
                  bgcolor={"riseLight.main"}
                  borderTop={"4px solid black"}
                  borderBottom={"4px solid black"}
                  minHeight={"100%"}
                >
                  {children}
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box display={{ xs: "flex", sm: "none" }}>
        <ErrorPage errorCode={403} />
      </Box>
    </>
  );
}

export default AdminPageLayout;
