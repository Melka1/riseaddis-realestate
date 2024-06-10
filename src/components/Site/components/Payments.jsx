import CarouselContainer from "@/components/Carousel";
import { Box, Grid, Typography } from "@mui/material";
import { Kufam } from "next/font/google";
import { Fragment } from "react";

const kufam = Kufam({ subsets: ["arabic"] });

function Payments({ payments }) {
  if (!payments?.length) return <></>;
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
      <Box>
        <CarouselContainer removeArrow={false} customButton={true}>
          {payments.map((payment, index) => (
            <Box key={index}>
              <Typography
                textAlign={"center"}
                mb={"2rem"}
                fontSize={"1.5rem"}
                fontWeight={"bold"}
                color={"rise.main"}
              >
                {payment.paymentType.name}
              </Typography>
              <Grid
                container
                bgcolor={"riseLight.light"}
                mt={"2rem"}
                spacing={{ xs: 1, md: 2 }}
              >
                {payment.list.map((listValue) => (
                  <Fragment key={payments.level}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Box
                        display={"flex"}
                        alignItems={"center"}
                        gap={2}
                        borderBottom={"1px solid gray"}
                      >
                        <Typography
                          flex={7}
                          color={"rise.light"}
                          fontSize={{ xs: "0.85rem", md: "1rem" }}
                          pl={"0.5rem"}
                        >
                          {listValue.name}
                        </Typography>
                        <Typography
                          height={1}
                          flex={3}
                          color={"addis.dark"}
                          bgcolor={"background.paper"}
                          p={"0.5rem"}
                          fontWeight={"bold"}
                          textAlign={"center"}
                          fontSize={{ xs: "0.85rem", md: "1.1rem" }}
                        >
                          {listValue.value}
                        </Typography>
                      </Box>
                    </Grid>
                  </Fragment>
                ))}
              </Grid>
            </Box>
          ))}
        </CarouselContainer>
      </Box>
    </Box>
  );
}

export default Payments;
