import { ReadMore } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["cyrillic"] });

function VericalArticle({ imgUrl, title, content, date }) {
  return (
    <Box
      width={1}
      display={"flex"}
      flexDirection={"column"}
      boxShadow={"0px 0px 2px 0px lightgray"}
    >
      <Box
        component={"img"}
        src={imgUrl || "./images/image.png"}
        width={1}
        sx={{ aspectRatio: "16/8" }}
      ></Box>
      <Box p={"1.5rem"}>
        <Typography
          fontSize={"1rem"}
          fontWeight={600}
          className={font.className}
        >
          {title}
        </Typography>
        <Typography
          fontSize={"0.75rem"}
          fontWeight={400}
          className={font.className}
          mt={"1rem"}
        >
          {content}
        </Typography>
        <Box
          display={"flex"}
          width={1}
          mt={"1rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            fontSize={"0.875rem"}
            fontWeight={600}
            className={font.className}
          >
            {date}
          </Typography>
          <Button endIcon={<ReadMore />} size="small" color="rise">
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default VericalArticle;
