import { useStore } from "@/Context/store";
import CarouselContainer from "@/components/Carousel";
import { lTheme } from "@/pages/_app";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Kufam } from "next/font/google";
import { Fragment } from "react";

const kufam = Kufam({ subsets: ["arabic"] });

const onTabChange = (number) => {
  const buttons = document.querySelectorAll(".tab-container button");
  console.log(buttons);

  buttons.forEach((button) => {
    button.style.backgroundColor = lTheme.palette.rise.main;
    button.style.color = lTheme.palette.rise.contrastText;
  });

  buttons[number].style.backgroundColor = lTheme.palette.riseLight.main;
  buttons[number].style.color = lTheme.palette.text.primary;
};

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
        fontSize={{ xs: "0.85rem", md: "1.1rem" }}
        color={"rise.main"}
        mb={4}
      >
        {project.apartments.payment.desc}
      </Typography>
      <Box>
        {/* <Box display={"flex"} bgcolor={"rise.main"} className="tab-container">
          <Button
            size="large"
            color="riseLight"
            variant="contained"
            sx={{ borderRadius: "0", boxShadow: "none" }}
            onClick={() => onTabChange(0)}
          >
            Progress Based
          </Button>
          <Button
            color="riseLight"
            size="large"
            onClick={() => onTabChange(1)}
            sx={{ borderRadius: "0", boxShadow: "none" }}
          >
            Time Based
          </Button>
        </Box> */}
        <CarouselContainer removeArrow={false} customButton={true}>
          <Box>
            <Typography
              textAlign={"center"}
              mb={"2rem"}
              fontSize={"1.5rem"}
              fontWeight={"bold"}
              color={"rise.main"}
            >
              {project.apartments.payment.list[0].name}
            </Typography>
            <Grid
              container
              bgcolor={"riseLight.light"}
              mt={"2rem"}
              spacing={{ xs: 1, md: 2 }}
            >
              {project.apartments.payment.list[0].value.map((payments) => (
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
                        fontSize={{ xs: "0.85rem", md: "1.2rem" }}
                        pl={"0.5rem"}
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
                        fontSize={{ xs: "0.85rem", md: "1.2rem" }}
                      >
                        {payments.price}
                      </Typography>
                    </Box>
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </Box>
          <Box>
            <Typography
              textAlign={"center"}
              mb={"2rem"}
              fontSize={"1.5rem"}
              fontWeight={"bold"}
              color={"rise.main"}
            >
              {project.apartments.payment.list[1].name}
            </Typography>
            <Grid
              container
              bgcolor={"riseLight.light"}
              mt={"2rem"}
              spacing={{ xs: 1, md: 2 }}
            >
              {project.apartments.payment.list[1].value.map((payments) => (
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
                        fontSize={{ xs: "0.85rem", md: "1.2rem" }}
                        pl={"0.5rem"}
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
                        fontSize={{ xs: "0.85rem", md: "1.2rem" }}
                      >
                        {payments.price}
                      </Typography>
                    </Box>
                  </Grid>
                </Fragment>
              ))}
            </Grid>
          </Box>
        </CarouselContainer>
      </Box>
    </Box>
  );
}

export default Payments;
