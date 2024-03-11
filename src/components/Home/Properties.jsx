import {
  Apartment,
  ApartmentSharp,
  Home,
  ShoppingCart,
} from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PropertyListing from "../PropertyListing";
import Section from "../../containers/section";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

const font = Montserrat({ subsets: ["cyrillic"] });

function Properties() {
  const router = useRouter();
  const [props, setProps] = useState([]);
  console.log(props, "properties");

  useEffect(() => {
    axios.get("http://localhost:3000/api/search").then((res) => {
      setProps(res.data.slice(0, 8));
    });
  }, []);

  return (
    <Section>
      <Typography
        variant="h3"
        textAlign={"center"}
        fontWeight={"bold"}
        color={"#3e3d39"}
        className={font.className}
        fontSize={"3rem"}
        letterSpacing={"0.4px"}
      >
        Our Properties
      </Typography>
      <Typography
        variant="h5"
        textAlign={"center"}
        color={"gray.main"}
        m={"1.5rem 0"}
        className={font.className}
        fontSize={"1rem"}
      >
        Navigate Your Ideal Neighborhood: Explore Homes Carefully Curated for
        Specific Lifestyles
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          m: "1rem 0",
          maxWidth: { lg: "unset" },
        }}
      >
        <Button
          variant="contained"
          sx={{
            color: "white",
            bgcolor: "gray",
            boxShadow: "none",
            padding: "0.5rem 1.5rem",
            fontSize: "0.75rem",
          }}
          startIcon={<Apartment />}
        >
          Luxury Apartments
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "white",
            bgcolor: "gray",
            boxShadow: "none",
            padding: "0.5rem 1.5rem",
            fontSize: "0.75rem",
          }}
          startIcon={<ShoppingCart />}
        >
          Shops
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "white",
            bgcolor: "gray",
            boxShadow: "none",
            padding: "0.5rem 1.5rem",
            fontSize: "0.75rem",
          }}
          startIcon={<Home />}
        >
          Villas
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "white",
            bgcolor: "gray",
            boxShadow: "none",
            padding: "0.5rem 1.5rem",
            fontSize: "0.75rem",
          }}
          startIcon={<ApartmentSharp />}
        >
          Standard Apartments
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "white",
            bgcolor: "gray",
            boxShadow: "none",
            padding: "0.5rem 1.5rem",
            fontSize: "0.75rem",
          }}
          startIcon={<Apartment />}
        >
          Roha Apartments
        </Button>
      </Container>

      <Grid container spacing={4} mt={"2rem"}>
        {props.length > 0 &&
          props.map((prop) => {
            return (
              <Grid key={prop.id} item md={3}>
                <PropertyListing
                  id={prop.id}
                  imgSrc={prop.images[0]}
                  name={prop.name}
                  bedroom={prop.bedroom}
                  bathroom={prop.bathroom}
                  area={prop.area}
                  location={prop.location}
                  count={prop.images.length}
                />
              </Grid>
            );
          })}
        {/* <Grid item md={3}>
          <PropertyListing id={1} imgSrc={"/images/1.jpg"} />
        </Grid>
        <Grid item md={3}>
          <PropertyListing id={2} imgSrc={"/images/2.jpg"} />
        </Grid>
        <Grid item md={3}>
          <PropertyListing id={3} imgSrc={"/images/3.jpg"} />
        </Grid>
        <Grid item md={3}>
          <PropertyListing id={4} imgSrc={"/images/4.jpg"} />
        </Grid>
        <Grid item md={3}>
          <PropertyListing id={5} imgSrc={"/images/5.jpg"} />
        </Grid>
        <Grid item md={3}>
          <PropertyListing id={6} imgSrc={"/images/6.jpg"} />
        </Grid>
        <Grid item md={3}>
          <PropertyListing id={7} imgSrc={"/images/7.jpg"} />
        </Grid>
        <Grid item md={3}>
          <PropertyListing id={8} imgSrc={"/images/8.jpg"} />
        </Grid> */}
      </Grid>
      <Box display={"flex"} justifyContent={"center"} mt={"1.5rem"}>
        <Button
          variant="contained"
          onClick={() => router.push("/property")}
          sx={{ p: "0.75rem 2rem", bgcolor: "rise.main" }}
        >
          See More Properties
        </Button>
      </Box>
    </Section>
  );
}

export default Properties;
