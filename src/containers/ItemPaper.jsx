import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Item = styled(Paper)(({ theme }) => {
  return {
    ...theme.typography.body2,
    textAlign: "left",
    color: theme.palette.text.secondary,
    width: "100%",
    boxShadow: "none",
    borderRadius: "1rem",
  };
});
