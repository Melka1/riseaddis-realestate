import { Box } from "@mui/material";

import IntroVideo from "./IntroVideo";

export default function IntroVideoSection() {
  return (
    <Box
      position={"relative"}
      component={"div"}
      sx={{
        p: 0,
        backgroundSize: "cover",
        backgroundPositionY: "50%",
        height: { xs: "30vh", md: "80vh" },
      }}
      width={1}
    >
      <IntroVideo />
    </Box>
  );
}
