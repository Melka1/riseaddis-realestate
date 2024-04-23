import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

function Section({ props, children, type }) {
  return (
    <Box
      {...props}
      component={"div"}
      sx={{
        p: { xs: "1rem", sm: "2rem 4rem ", md: "3rem", lg: "5rem 8rem" },
        borderTop: type == "footer" && "1px solid lightgray",
      }}
      width={1}
    >
      {children}
    </Box>
  );
}

export const StyledSection = styled(Box)`
  padding: 5rem 8rem;
  width: "100%";
`;

export default Section;
