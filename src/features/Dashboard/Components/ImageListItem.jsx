import { Box, Grid } from "@mui/material";

function ImageListItem({ src, number, user }) {
  return (
    <Grid item xs={number || 4}>
      <Box
        component={"img"}
        width={1}
        src={src || "/images/profile.png"}
        sx={{ aspectRatio: 1 }}
        borderRadius={user ? "50%" : 1}
        border={"1px solid lightgray"}
      />
    </Grid>
  );
}

export default ImageListItem;
