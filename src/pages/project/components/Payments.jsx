import { useStore } from "@/Context/store";
import { Box, Grid, Typography } from "@mui/material";
import { Kufam } from "next/font/google";
import { Fragment } from "react";

const kufam = Kufam({ subsets: ["arabic"] });

function Payments() {
  const { project } = useStore();
  console.log(project);
  if (!project?.name) return <></>;
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography
        className={kufam.className}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        color={"rise.dark"}
        fontWeight={"bold"}
        mt={"2rem"}
      >
        Payment
      </Typography>
      <Typography
        className={kufam.className}
        fontSize={{ xs: "1rem", md: "1.1rem" }}
        color={"rise.main"}
        mb={2}
      >
        {project.apartments.payment.desc}
      </Typography>
      {
        <Grid
          container
          bgcolor={"riseLight.light"}
          mt={"1rem"}
          spacing={{ xs: 1, md: 2 }}
        >
          {project.apartments.payment.list.map((payments) => (
            <Fragment key={payments.level}>
              <Grid item xs={12} md={6}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  gap={2}
                  borderBottom={"1px solid gray"}
                >
                  <Typography
                    flex={7}
                    color={"rise.light"}
                    fontSize={{ xs: "1rem", md: "1.2rem" }}
                  >
                    {payments.level}
                  </Typography>
                  <Typography
                    height={1}
                    flex={3}
                    color={"addis.dark"}
                    bgcolor={"background.paper"}
                    p={"0.5rem"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                    fontSize={{ xs: "1rem", md: "1.2rem" }}
                  >
                    {payments.price}
                  </Typography>
                </Box>
              </Grid>
            </Fragment>
          ))}
        </Grid>
      }
    </Box>
  );
}

export default Payments;
