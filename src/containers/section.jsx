import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

function Section({ props, children }) {
  return (
    <Box
      {...props}
      component={"div"}
      sx={{
        p: { md: "3rem", lg: "5rem 8rem" },
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
