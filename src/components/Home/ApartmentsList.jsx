import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import PropertyListing from "../PropertyListing";
import Section from "@/containers/section";
import {
  Apartment,
  ApartmentSharp,
  Home,
  ShoppingCart,
} from "@mui/icons-material";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["cyrillic"] });

function ApartmentsList({ properties }) {
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
        Apartments
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
        <Button
          href="/real-estate/abay-homes-real-estate"
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
          <Typography fontSize={"inherit"}>Dalol Real Estate</Typography>
        </Button>
        <Button
          href="/real-estate/abay-homes-real-estate"
          variant="contained"
          color="rise"
          sx={{
            boxShadow: "none",
            padding: "0.5rem 1.5rem",
            fontSize: "0.75rem",
            textWrap: "nowrap",
            minWidth: "max-content",
          }}
          startIcon={<ShoppingCart />}
        >
          <Typography fontSize={"inherit"}>Noah Real Estate</Typography>
        </Button>
        <Button
          href="/real-estate/abay-homes-real-estate"
          variant="contained"
          color="rise"
          sx={{
            boxShadow: "none",
            padding: "0.5rem 1.5rem",
            fontSize: "0.75rem",
            textWrap: "nowrap",
            minWidth: "max-content",
          }}
          startIcon={<Home />}
        >
          <Typography fontSize={"inherit"}>Dalol Real Estate</Typography>
        </Button>
        <Button
          href="/real-estate/abay-homes-real-estate"
          variant="contained"
          color="rise"
          sx={{
            boxShadow: "none",
            padding: "0.5rem 1.5rem",
            fontSize: "0.75rem",
            textWrap: "nowrap",
            minWidth: "max-content",
          }}
          startIcon={<ApartmentSharp />}
        >
          <Typography fontSize={"inherit"}>Abay Homes Real Estate</Typography>
        </Button>
        <Button
          href="/real-estate/abay-homes-real-estate"
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
          <Typography fontSize={"inherit"}>Roha Apartments</Typography>
        </Button>
      </Box>
      <Grid container spacing={2}>
        {properties.apartments?.list.slice(0, 8)?.map((property, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <PropertyListing
              imgSrc={property.images}
              id={property.id - 1}
              name={properties.name}
              bedroom={property.bedroom}
              bathroom={property.bathroom}
              area={property.totalArea}
              location={property.location}
              count={property.images.length}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

export default ApartmentsList;
