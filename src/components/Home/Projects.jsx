import Section from "@/containers/section";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import ProjectCard from "../Project/ProjectCard";
import { useRouter } from "next/router";
import {
  Apartment,
  ApartmentSharp,
  Home,
  ShoppingCart,
} from "@mui/icons-material";

const font = Montserrat({ subsets: ["cyrillic"] });

const projects = [
  {
    name: "Abay Homes Real Estate",
    siteName: "Gotera-Kera Luxury Apartments",
    url: "/real-estate/abay-homes-real-estate/gotera-kera-area",
    imageUrl: "/images/project15.jpg",
  },
  {
    name: "Noah Real Estate",
    siteName: "Piassa-Arada Luxury Apartments",
    url: "/real-estate/noah-real-estate",
    imageUrl: "/images/project13.jpg",
    desc: "Congratulations on your new home! Now comes the exciting task of turning your empty space into a warm and inviting haven.",
  },
  {
    name: "Dalol Real Estate",
    siteName: "Gotera-Kera Luxury Apartments",
    url: "/real-estate/dalol-real-estate",
    imageUrl: "/images/project5.jpg",
  },
  {
    name: "Tsehay Real Estate",
    siteName: "Ayat Luxury Apartments",
    url: "/real-estate/tsehay-real-estate",
    imageUrl: "/images/project8.jpg",
  },
  {
    name: "Abay Homes Real Estate",
    siteName: "Gotera-Kera Luxury Apartments",
    url: "/real-estate/abay-homes-real-estate",
    imageUrl: "/images/project15.jpg",
  },
  {
    name: "Abay Homes Real Estate",
    siteName: "Gotera-Kera Luxury Apartments",
    url: "/real-estate/abay-homes-real-estate",
    imageUrl: "/images/project14.jpg",
  },
];

function Projects({ title }) {
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
      <Grid container spacing={{ xs: 1, sm: 4 }} mt={{ xs: 1, sm: 4 }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name + index}
            name={project.name}
            url={project.url}
            siteName={project.siteName}
            imgUrl={project.imageUrl}
            desc={project.desc}
          />
        ))}
      </Grid>
      <Box display={"flex"} justifyContent={"center"} mt={"1.5rem"}>
        <Button
          color="rise"
          variant="contained"
          onClick={() => router.push("/project")}
          sx={{ p: "0.75rem 2rem" }}
        >
          See More Projects
        </Button>
      </Box>
    </Section>
  );
}

export default Projects;
