import { Box } from "@mui/material";
import ReactLoading from "react-loading";
function Loading({ type }) {
  return (
    <Box
      width={1}
      height={1}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"action.focus"}
      zIndex={1}
      position={"absolute"}
      top={0}
      left={0}
    >
      <ReactLoading type={type || "spin"} />
    </Box>
  );
}

export default Loading;
