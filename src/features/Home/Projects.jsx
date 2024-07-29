import Section from "@/containers/section";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Apartment } from "@mui/icons-material";
import { usePropertyStore } from "@/stores/propertyStore";
import { useEffect } from "react";
import axios from "axios";
import { chosenBackendUrl } from "@/pages";
import { getCurrency } from "@/data/currency";
import { riseFont } from "@/pages/_app";
import getPrice from "@/utils/getPrice";
import ProjectCard from "../Project/ProjectCard";

function Projects({ title, realEstates, realEstate }) {
  const { setSites, sites } = usePropertyStore();

  useEffect(() => {
    try {
      axios.get(`${chosenBackendUrl}site`).then((site) => {
        setSites(site.data.sites);
      });
    } catch (e) {
      console.log(e);
      setSites([]);
    }
  }, []);
  return (
    <Section>
      <Typography
        textAlign={"center"}
        fontWeight={"bold"}
        color={"#3e3d39"}
        className={riseFont.className}
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
        {[...sites]
          .filter(
            (site) => !realEstate.sites.map((s) => s.id).includes(site.id)
          )
          .sort((a, b) => b.featured - a.featured)
          .map((site) => (
            <ProjectCard
              key={site.id}
              realEstateName={site.realEstate.name}
              link={site.realEstate.link + "/" + site.link}
              siteName={site.name}
              imgUrls={site.images}
              location={site.location}
              progress={site.stage}
              price={getPrice(site?.price).withOutDecimal}
              deliveryTime={site?.deliveryTime}
              currency={getCurrency(site.realEstate.currency)}
              featured={site.featured}
            />
          ))}
      </Grid>
    </Section>
  );
}

export default Projects;
