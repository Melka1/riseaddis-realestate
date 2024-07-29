import { riseFont } from "@/pages/_app";
import { Button, Grid, Stack, Typography } from "@mui/material";

const OverviewPreviewContent = ({ title, overviewListContent, children }) => {
  let activeCount = overviewListContent.filter(
    (rs) => rs.status == "active"
  ).length;
  let inactiveCount = overviewListContent.filter(
    (rs) => rs.status == "inactive"
  ).length;
  let draftCount = overviewListContent.filter(
    (rs) => rs.status == "draft"
  ).length;

  return (
    <Stack
      width={1}
      borderRadius={2}
      bgcolor={"background.lighter"}
      minHeight={"200px"}
      p={2}
      spacing={2}
    >
      <Typography
        fontSize={"1.4rem"}
        fontWeight={500}
        className={riseFont.className}
      >
        {title}
      </Typography>
      <Stack
        bgcolor={"riseLight.light"}
        p={2}
        borderRadius={2}
        spacing={1}
        flex={1}
        height={"70%"}
      >
        <Typography textAlign={"center"} fontSize={"1.2rem"}>
          Status
        </Typography>

        <Stack>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Stack>
                <Button
                  fullWidth
                  size="large"
                  color="success"
                  variant="contained"
                >
                  <Stack alignItems={"center"}>
                    <Typography sx={{ textTransform: "capitalize" }}>
                      Active
                    </Typography>
                    <Typography
                      p={0.25}
                      borderRadius={"50%"}
                      color={"text.primary"}
                      bgcolor={"background.lighter"}
                      sx={{ aspectRatio: 1 }}
                    >
                      {activeCount}
                    </Typography>
                  </Stack>
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Stack>
                <Button
                  fullWidth
                  size="large"
                  color="warning"
                  variant="contained"
                >
                  <Stack alignItems={"center"}>
                    <Typography sx={{ textTransform: "capitalize" }}>
                      Draft
                    </Typography>
                    <Typography
                      p={0.25}
                      borderRadius={"50%"}
                      color={"text.primary"}
                      bgcolor={"background.lighter"}
                      sx={{ aspectRatio: 1 }}
                    >
                      {draftCount}
                    </Typography>
                  </Stack>
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Stack>
                <Button
                  fullWidth
                  size="large"
                  color="error"
                  variant="contained"
                >
                  <Stack alignItems={"center"}>
                    <Typography sx={{ textTransform: "capitalize" }}>
                      Inactive
                    </Typography>
                    <Typography
                      p={0.25}
                      borderRadius={"50%"}
                      color={"text.primary"}
                      bgcolor={"background.lighter"}
                      sx={{ aspectRatio: 1 }}
                    >
                      {inactiveCount}
                    </Typography>
                  </Stack>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>

        <Stack flex={1} height={"50%"}>
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default OverviewPreviewContent;
