import { Box, Typography } from "@mui/material";
import { Kufam } from "next/font/google";
import ProjectListing from "./ProjectListing";

const kufam = Kufam({ subsets: ["arabic"] });
function ProjectList() {
  return (
    <Box
      p={{ xs: "1rem 1rem", sm: "2rem 4rem", md: "4rem 8rem" }}
      display={"flex"}
      flexDirection={"column"}
    >
      <Typography
        className={kufam.className}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        color={"rise.dark"}
        fontWeight={"bold"}
        textAlign={{ xs: "center", sm: "left" }}
      >
        Here are some of the projects
      </Typography>
      <Typography
        fontFamily={"sans-serif"}
        fontSize={{ xs: "0.9rem", md: "1.1rem" }}
        color={"rise.light"}
        mb={"1rem"}
      >
        Laminate flooring is a more affordable option in place of hardwood
        flooring that can cost almost ten times the cost of laminate flooring.
        Laminate flooring is light, durable and can be made to resemble.
      </Typography>
      <ProjectListing
        imgUrl={"/images/project6.jpg"}
        area={594.2}
        apartments={17}
      />
      <ProjectListing
        imgUrl={"/images/project9.jpg"}
        name={"Gotera-Keta Project Phase-1"}
        floors={12}
        apartments={55}
        area={400.45}
      />
      <ProjectListing
        imgUrl={"/images/project8.jpg"}
        floors={16}
        apartments={62}
        name={"Gotera-Keta Project Phase-2"}
        area={398.23}
      />
    </Box>
  );
}

export default ProjectList;
