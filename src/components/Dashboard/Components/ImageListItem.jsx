import { Box, Grid } from "@mui/material";

function ImageListItem({ src }) {
  return (
    <Grid item xs={4}>
      <Box
        component={"img"}
        width={1}
        src={src}
        sx={{ aspectRatio: 1 }}
        borderRadius={1}
        border={"1px solid lightgray"}
      />
    </Grid>
  );
}

export default ImageListItem;
