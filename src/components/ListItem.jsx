import { SelfImprovement } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

function ListItem({ width, icon, name }) {
  return (
    <Grid item xs={6} md={width?.md || 4}>
      <Box
        height={1}
        p={{ xs: "0.5rem", md: "1rem" }}
        sx={{
          backgroundColor: "riseLight.light",
        }}
        borderRadius={"0.25rem"}
        display={"flex"}
        alignItems={"center"}
        gap={"0.5rem"}
        color={"rise.light"}
      >
        <Box display={{ xs: "none", md: "block" }}>
          {icon || <SelfImprovement />}
        </Box>
        <Typography fontSize={{ xs: "0.8rem", md: "1rem" }}>
          {name || "Calm living environment"}
        </Typography>
      </Box>
    </Grid>
  );
}

export default ListItem;
