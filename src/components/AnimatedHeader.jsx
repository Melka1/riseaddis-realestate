import { Box, Typography } from "@mui/material";

function AnimatedHeader({ name, url }) {
  return (
    <Box
      className="list"
      component={"a"}
      color="addisLight.dark"
      href={url}
      sx={{
        "&>p::after": {
          position: "absolute",
          content: "''",
          width: 0,
          height: " 2px",
          left: 0,
          bottom: "-5px",
          backgroundColor: "addisLight.main",
          transition: "width ease-in-out 0.3s",
        },
      }}
    >
      <Typography position={"relative"} fontWeight="bold">
        {name}
      </Typography>
    </Box>
  );
}

export default AnimatedHeader;
