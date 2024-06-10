import { Box, Typography } from "@mui/material";
import { Kufam } from "next/font/google";
import ProjectListing from "./ProjectListing";

const kufam = Kufam({ subsets: ["arabic"] });
function ProjectList({ sites, background, link }) {
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
      {background && (
        <Typography
          fontFamily={"sans-serif"}
          fontSize={{ xs: "0.9rem", md: "1.1rem" }}
          color={"rise.light"}
          mb={"1rem"}
        >
          {background}
        </Typography>
      )}
      {sites?.map((site) => (
        <ProjectListing
          key={site.id}
          name={site.name}
          description={site.description}
          imgUrl={site.images[0]}
          area={site.footPrintArea}
          builtUpArea={site.builtUpArea}
          floors={site.floors}
          apartments={site.numberOfUnits}
          buildingType={site.buildingType}
          status={site.stage}
          href={link + "/" + site.link}
        />
      ))}
    </Box>
  );
}

export default ProjectList;
