import { Typography } from "@mui/material";

function TextListItem({ name }) {
  return (
    <Typography
      title={name}
      border={"1px solid lightgray"}
      borderRadius={"0.5rem"}
      fontSize={"0.75rem"}
      maxWidth={"fit-content"}
      p={"0.25rem"}
      noWrap
      display={"inline"}
    >
      {name}
    </Typography>
  );
}

export default TextListItem;
