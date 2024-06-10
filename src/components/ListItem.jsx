import { Box, Grid, Typography } from "@mui/material";

function ListItem({ width, imageUrl, name }) {
  return (
    <Grid item xs={6} sm={4} md={width?.md || 4}>
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
        <Box component={"img"} width={"20px"} height={"20px"} src={imageUrl} />
        <Typography fontSize={{ xs: "0.8rem", md: "1rem" }}>{name}</Typography>
      </Box>
    </Grid>
  );
}

export default ListItem;
