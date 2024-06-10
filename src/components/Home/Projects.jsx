import Section from "@/containers/section";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import ProjectCard from "../Project/ProjectCard";
import { useRouter } from "next/router";
import { Apartment } from "@mui/icons-material";
import { usePropertyStore } from "@/stores/propertyStore";
import { useEffect } from "react";
import axios from "axios";
import { backEndUrls } from "@/pages";

const font = Montserrat({ subsets: ["cyrillic"] });

function Projects({ title, realEstates }) {
  const { setSites, sites } = usePropertyStore();
  const router = useRouter();

  useEffect(() => {
    axios.get(`${backEndUrls.vercel}site`).then((site) => {
      setSites(site.data.sites);
    });
  }, []);
  return (
    <Section>
      <Typography
        textAlign={"center"}
        fontWeight={"bold"}
        color={"#3e3d39"}
        className={font.className}
        fontSize={{ xs: "1.5rem", sm: "2.3rem", md: "3rem" }}
        letterSpacing={"0.4px"}
      >
        {title || "Projects"}
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "1rem",
          m: "1rem 0",
          justifyContent: { xs: "unset", sm: "center" },
          overflow: "auto",
        }}
      >
        {realEstates.map((realEstate) => {
          let name = realEstate.name.toUpperCase().split(/-|\s/).join(" ");
          return (
            <Button
              key={realEstate.id}
              href={`${realEstate.link}`}
              target="_blank"
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
      <Grid container spacing={{ xs: 1, sm: 4 }} mt={{ xs: 1, sm: 4 }}>
        {sites.map((site) => (
          <ProjectCard
            key={site.id}
            realEstateName={site.realEstate.name}
            link={site.realEstate.link + "/" + site.link}
            siteName={site.name}
            imgUrls={site.images}
            location={site.location}
            progress={site.stage}
            price={site?.price}
            deliveryTime={site?.deliveryTime}
          />
        ))}
      </Grid>
    </Section>
  );
}

export default Projects;
