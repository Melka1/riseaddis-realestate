import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Section from "@/containers/section";
import { Apartment } from "@mui/icons-material";
import { Montserrat } from "next/font/google";
import ProjectCard from "../Project/ProjectCard";
import getPrice from "@/utils/getPrice";

const font = Montserrat({ subsets: ["cyrillic"] });

function SitesList({ sites, realEstates }) {
  return (
    <Section>
      <Typography
        variant="h3"
        textAlign={"center"}
        fontWeight={"bold"}
        color={"#3e3d39"}
        className={font.className}
        fontSize={{ xs: "1.5rem", sm: "2.3rem", md: "3rem" }}
        letterSpacing={"0.4px"}
      >
        Best Project Sites Affordable for You
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "1rem",
          m: { xs: "1rem 0", md: "2rem 0" },
          justifyContent: { xs: "unset", sm: "center" },
          overflow: "auto",
        }}
      >
        {realEstates.map((realEstate) => {
          let name = realEstate.name.toUpperCase().split(/-|\s/).join(" ");
          return (
            <Button
              key={realEstate.id}
              href={`/real-estate/${realEstate.link}`}
              variant="contained"
              color="rise"
              sx={{
                boxShadow: "none",
                padding: "0.5rem 1.5rem",
                fontSize: "0.75rem",
                textWrap: "nowrap",
                minWidth: "max-content",
              }}
              startIcon={<Apartment />}
            >
              <Typography fontSize={"inherit"}>{name}</Typography>
            </Button>
          );
        })}
      </Box>
      <Grid container spacing={2}>
        {sites.map((site, index) => (
          <ProjectCard
            key={site.id}
            realEstateName={site.realEstate.name}
            link={"real-estate/" + site.realEstate.link + "/" + site.link}
            siteName={site.name}
            imgUrls={site.images}
            location={site.location}
            progress={site.stage}
            price={getPrice(site?.price)}
            deliveryTime={site?.deliveryTime}
          />
        ))}
      </Grid>
    </Section>
  );
}

export default SitesList;
