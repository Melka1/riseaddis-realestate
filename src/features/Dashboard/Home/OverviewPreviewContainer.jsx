import { riseFont } from "@/pages/_app";
import { Button, Grid, Stack, Typography } from "@mui/material";
import OverviewPreviewContent from "./OverviewPreviewContent";
import CustomSwitch from "@/components/Switch";
import handleUpdateSite from "../Site/utils/handleUpdateSite";
import { useTokenStore } from "@/stores/tokenStore";
import { useDashboardStore } from "@/stores/dashboardStore";

const OverviewPreviewContainer = ({ setLoading }) => {
  const { token } = useTokenStore();

  const {
    sitesOverview,
    unitsOverview,
    realEstatesOverview,
    updateSitesOverview,
  } = useDashboardStore();

  return (
    <Stack spacing={2} height={1}>
      <Typography
        component={"header"}
        className={riseFont.className}
        fontSize={"1.75rem"}
        fontWeight={600}
      >
        Overview
      </Typography>

      <Stack flex={1} height={"70%"}>
        <Grid container spacing={4} height={1}>
          <Grid item xs={6}>
            <Stack spacing={4}>
              <OverviewPreviewContent
                title={"Realestate"}
                overviewListContent={realEstatesOverview}
              />
              <OverviewPreviewContent
                title={"Unit"}
                overviewListContent={unitsOverview}
              />
            </Stack>
          </Grid>

          <Grid item xs={6} height={1}>
            <Stack spacing={4} height={1}>
              <OverviewPreviewContent
                title={"Site"}
                overviewListContent={sitesOverview}
              >
                <Stack mt={2} spacing={1} height={"80%"} flex={1}>
                  <Typography fontSize={"1.2rem"} textAlign={"center"}>
                    Featured Site List
                  </Typography>

                  <Stack
                    spacing={1}
                    overflow={"auto"}
                    bgcolor={"background.lighter"}
                    borderRadius={2}
                    p={2}
                  >
                    {sitesOverview.map((site, index) => {
                      return (
                        <Stack
                          key={index}
                          direction={"row"}
                          alignItems={"center"}
                          spacing={2}
                        >
                          <Grid container spacing={2}>
                            <Grid item xs={3.5}>
                              <Typography fontSize={"1rem"}>
                                {site.name}
                              </Typography>
                            </Grid>

                            <Grid item xs={6.5}>
                              <Typography fontSize={"1rem"}>
                                {site.realEstate.name}
                              </Typography>
                            </Grid>

                            <Grid item xs={2}>
                              <CustomSwitch
                                onClick={() =>
                                  handleUpdateSite({
                                    id: site.id,
                                    featured: !site.featured,
                                    token,
                                    setLoading,
                                    updateSitesOverview,
                                  })
                                }
                                checked={site.featured}
                                disabled={site.status !== "active"}
                              />
                            </Grid>
                          </Grid>
                        </Stack>
                      );
                    })}
                  </Stack>
                </Stack>
              </OverviewPreviewContent>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default OverviewPreviewContainer;
