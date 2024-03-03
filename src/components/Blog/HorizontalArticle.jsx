import { ReadMore } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import React from "react";

const font = Montserrat({ subsets: ["cyrillic"] });

function HorizontalArticle() {
  return (
    <Box maxWidth={"80%"}>
      <Grid container spacing={4}>
        <Grid item md={5}>
          <Box
            component={"img"}
            src="./images/1.jpg"
            width={1}
            height={1}
            sx={{ objectFit: "cover" }}
          ></Box>
        </Grid>
        <Grid item md={7}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            height={"100%"}
            gap={"1rem"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} gap={"0.5rem"}>
              <Typography color={"addis.main"} className={font.className}>
                November 5, 2023
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography color={"addis.main"} className={font.className}>
                Architecture
              </Typography>
            </Box>
            <Typography
              color={"rise.main"}
              fontWeight={600}
              variant="h2"
              fontSize={"2rem"}
              className={font.className}
            >
              Here’s how to decorate your new home from scratch
            </Typography>
            <Typography color={"rise.light"} fontWeight={500} fontSize={"1rem"}>
              Congratulations on your new home! Now comes the exciting task of
              turning your empty space into a warm and inviting haven.
              Decorating from scratch can feel overwhelming, but with a plan and
              a little creativity, you can transform your house into a home that
              reflects your unique style and personality.
            </Typography>
            <Button
              variant="contained"
              fullWidth={false}
              color="addisLight"
              endIcon={<ReadMore />}
              sx={{ p: "1rem 3rem", color: "addis" }}
            >
              View More
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* <Divider /> */}
    </Box>
  );
}

export default HorizontalArticle;
