import MeterSquared from "@/components/MeterSquared";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import { Kufam } from "next/font/google";

const kufam = Kufam({ subsets: ["arabic"] });

function SiteDescList({ name, value, type, area }) {
  return (
    <Stack
      direction={"row"}
      bgcolor={"darkHover"}
      alignItems={"center"}
      className="project-desc"
    >
      <Grid container>
        <Grid item xs={5}>
          <Stack>
            <Typography
              className={kufam.className}
              fontSize={
                type == "small"
                  ? { xs: "0.7rem", md: "0.8rem" }
                  : { xs: "0.8rem", md: "1rem" }
              }
              flex={3}
              fontWeight={600}
              pl={"0.5rem"}
              pb={"0.25rem"}
              pt={"0.5rem"}
            >
              {name || "Enter desc name here"}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={7} borderLeft="1px solid gray">
          <Typography
            pb={"0.25rem"}
            pt={"0.5rem"}
            px={1}
            fontSize={
              type == "small"
                ? { xs: "0.7rem", md: "0.9rem" }
                : { xs: "0.9rem", md: "1.1rem" }
            }
            flex={3}
          >
            {value || "Enter desc value here"}
            {area && <MeterSquared fontSize={"0.6rem"} gap />}
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default SiteDescList;
