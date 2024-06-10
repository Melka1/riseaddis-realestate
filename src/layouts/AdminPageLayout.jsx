import TopAddressBar from "@/components/Home/TopAddress";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

const pages = [
  { name: "Overview", link: "/dashboard" },
  { name: "Real-estates", link: "/dashboard/realestate" },
  { name: "Sites", link: "/dashboard/site" },
  { name: "Units", link: "/dashboard/unit" },
  { name: "Payments", link: "/dashboard/payment" },
  { name: "Amenities", link: "/dashboard/amenity" },
  { name: "Articles", link: "/dashboard/article" },
  { name: "" },
  { name: "Users", link: "/dashboard/user" },
  { name: "Settings", link: "/dashboard/setting" },
];

function AdminPageLayout({ pageIndex, children }) {
  const router = useRouter();
  return (
    <Box flex={1} display={"flex"} flexDirection={"column"} height={1}>
      <TopAddressBar />
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
                      <Divider key={index} flexItem sx={{ m: "0.5rem 1rem" }} />
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
  );
}

export default AdminPageLayout;
