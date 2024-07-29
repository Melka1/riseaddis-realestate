import MeterSquared from "@/components/MeterSquared";
import { Divider, Stack, Typography } from "@mui/material";
import { Kufam } from "next/font/google";

const kufam = Kufam({ subsets: ["arabic"] });

function ProjectDescList({ name, value, type, area }) {
  return (
    <Stack
      direction={"row"}
      bgcolor={"darkHover"}
      alignItems={"center"}
      className="project-desc"
    >
      <Typography
        className={kufam.className}
        fontSize={
          type == "small"
            ? { xs: "0.7rem", md: "0.8rem" }
            : { xs: "0.8rem", md: "1rem" }
        }
        flex={3}
        textAlign={type == "small" ? "left" : "right"}
        fontWeight={600}
        pl={"0.5rem"}
        pb={"0.25rem"}
        pt={"0.5rem"}
      >
        {name || "Enter desc name here"}
      </Typography>
      <Divider
        className="desc-divider"
        orientation="vertical"
        flexItem
        sx={{ m: "0 0.5rem", borderColor: "rise.light" }}
      />
      <Typography
        pb={"0.25rem"}
        pt={"0.5rem"}
        fontSize={
          type == "small"
            ? { xs: "0.7rem", md: "0.9rem" }
            : { xs: "0.9rem", md: "1.1rem" }
        }
        flex={3}
        textAlign={"left"}
      >
        {value || "Enter desc value here"}
        {area && <MeterSquared fontSize={"0.6rem"} gap />}
      </Typography>
    </Stack>
  );
}

export default ProjectDescList;
