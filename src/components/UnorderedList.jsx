import { Circle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

function UnorderedList({ name }) {
  return (
    <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
      <Circle sx={{ width: "6px", height: "6px" }} />
      <Typography
        fontFamily={"sans-serif"}
        fontSize={"1.1rem"}
        color={"rise.light"}
      >
        {name ||
          "Dynamically target high-payoff intellectual capital for customized"}
      </Typography>
    </Box>
  );
}

export default UnorderedList;
