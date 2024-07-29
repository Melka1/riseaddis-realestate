import { Montserrat } from "next/font/google";

import Section from "@/containers/section";
import { Grid, Typography } from "@mui/material";
import RealEstateCard from "./RealEstateCard";

const font = Montserrat({ subsets: ["cyrillic"] });

function RealEstateList({ realEstates }) {
  return (
    <Section>
      <Typography
        variant="h3"
        textAlign={"center"}
        fontWeight={"bold"}
        color={"#3e3d39"}
        className={font.className}
        fontSize={{ xs: "1.5rem", sm: "3rem" }}
        letterSpacing={"0.4px"}
      >
        Real Estates
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 4 }} mt={{ xs: 1, sm: 4 }}>
        {realEstates.map((realEstate) => {
          return (
            <RealEstateCard
              key={realEstate.id}
              name={realEstate.name.toUpperCase().split(/-|\s/).join(" ")}
              url={`/real-estate/${realEstate.link}`}
              imgUrl={realEstate.images[0]}
              description={realEstate.background}
              sites={realEstate.sites}
              linkName={realEstate.link}
              activeProjects={realEstate.activeProjects}
            />
          );
        })}
      </Grid>
    </Section>
  );
}

export default RealEstateList;
