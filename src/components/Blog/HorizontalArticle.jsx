import { ReadMore } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";

const font = Montserrat({ subsets: ["cyrillic"] });

function HorizontalArticle({ title, content, date, type, imgUrl, left }) {
  const router = useRouter();
  return (
    <Box maxWidth={{ xs: "100%", sm: "80%" }}>
      <Grid container spacing={4} flexDirection={left && "row-reverse"}>
        <Grid item md={5}>
          <Box
            component={"img"}
            src={imgUrl || "./images/1.jpg"}
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
              <Typography
                color={"addis.main"}
                className={font.className}
                fontSize={{ xs: "0.9rem", sm: "1rem" }}
              >
                {date}
              </Typography>
              <Divider orientation="vertical" flexItem />
              <Typography
                color={"addis.main"}
                className={font.className}
                fontSize={{ xs: "0.9rem", sm: "1rem" }}
              >
                {type}
              </Typography>
            </Box>
            <Typography
              color={"rise.main"}
              fontWeight={600}
              variant="h2"
              fontSize={{ xs: "1.2rem", sm: "2rem" }}
              className={font.className}
            >
              {title}
            </Typography>
            <Typography
              color={"rise.light"}
              fontWeight={500}
              fontSize={{ xs: "0.85rem", sm: "1.2rem" }}
            >
              {content}
            </Typography>
            <Button
              variant="contained"
              fullWidth={false}
              color="addisLight"
              onClick={() => router.push(`/blog/${title}`)}
              endIcon={<ReadMore />}
              sx={{ p: "1rem 3rem", color: "addis", width: { xs: "100%" } }}
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
