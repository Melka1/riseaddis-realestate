import { Link } from "@mui/material";

function AnimatedLink({ url, name }) {
  return (
    <Link
      href={`${url}`}
      color="rise.main"
      sx={{
        textWrap: "nowrap",
        textTransform: "capitalize",
        justifyContent: "flex-start",
        textAlign: "left",
        transition: "all 0.3s",
        textDecoration: "none",
        "&:hover::after": {
          width: "calc(100% - 2rem)",
        },
        "&:hover": {
          transform: "translateX(10px)",
        },
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
    </Link>
  );
}

export default AnimatedLink;
