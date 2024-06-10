import { Typography } from "@mui/material";

function MeterSquared({ fontSize, gap }) {
  return (
    <Typography
      position={"relative"}
      component={"span"}
      fontSize={"inherit"}
      fontWeight={"inherit"}
      ml={gap && "0.25rem"}
      sx={{
        "&:after": {
          content: "'2'",
          position: "absolute",
          fontSize: fontSize || "0.8rem",
          bottom: "40%",
          left: "100%",
        },
      }}
    >
      m
    </Typography>
  );
}

export default MeterSquared;
