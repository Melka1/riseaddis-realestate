import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

function AnimatedHeader({ name, url }) {
  const router = useRouter();
  return (
    <Box
      position={"relative"}
      className="list"
      component={"a"}
      color="addisLight.dark"
      onClick={() => router.push(`/${url}`)}
      sx={{
        fontWeight: "bold",
        "&::after": {
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
      {name}
    </Box>
  );
}

export default AnimatedHeader;
