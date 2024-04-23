import { useStore } from "@/Context/store";
import Footer from "@/components/Home/Footer";
import ResponsiveAppBar from "@/components/Home/Menubar";
import TopAddressBar from "@/components/Home/TopAddress";
import { Box, Grid, Typography, Button } from "@mui/material";
import Head from "next/head";
import { riseFont } from "../_app";
import { Kufam } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import ContactUs from "@/components/ContactUs";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import Payments from "./components/Payments";
import ProjectInfo from "./components/ProjectInfo";
import Apartments from "./components/Appartments";
import { ExpandLess, ExpandMore, ReadMore } from "@mui/icons-material";

const kufam = Kufam({ subsets: ["arabic"] });

function Project() {
  const { user, project, setProject } = useStore();
  const [start, setStart] = useState(false);

  useEffect(() => {
    axios
      .post("../api/project", {
        id: 0,
      })
      .then((res) => {
        console.log(res.data);
        setProject(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Rise Addis Realestate</title>
        <meta
          name="description"
          content="The best Realestate Agency to buy appartments"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo1.png" />
      </Head>
      <main>
        <TopAddressBar />
        <ResponsiveAppBar user={user} type={"/project"} />
        <ProjectInfo start={start} setStart={setStart} />
        <Box
          p={{ xs: "1rem 1rem", md: "4rem 8rem" }}
          className={riseFont.className}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <Box display={"flex"} flexDirection={"column"} gap={2}>
                <Typography
                  className={kufam.className}
                  fontSize={{ xs: "1.5rem", md: "2rem" }}
                  color={"rise.dark"}
                  fontWeight={"bold"}
                >
                  About the property
                </Typography>
                <Typography
                  fontFamily={"sans-serif"}
                  fontSize={{ xs: "1rem", md: "1.1rem" }}
                  color={"rise.light"}
                >
                  Laminate flooring is a more affordable option in place of
                  hardwood flooring that can cost almost ten times the cost of
                  laminate flooring. Laminate flooring is light, durable and can
                  be made to resemble.
                </Typography>
                <Typography
                  fontFamily={"sans-serif"}
                  fontSize={{ xs: "1rem", md: "1.1rem" }}
                  color={"rise.light"}
                >
                  Appropriately empower dynamic leadership skills after business
                  portals. Globally my cardinate interactive supply chains with
                  distinctive quality vectors global sources services. Uniquely
                  matrix economically sound value through cooperative
                  technology. Competently parallel task fully researched data
                  and enterprise process improvements.
                </Typography>
                <Button
                  id="more-button"
                  variant="outlined"
                  size="small"
                  color="rise"
                  sx={{ display: { xs: "flex", sm: "none" }, margin: "auto" }}
                  endIcon={<ExpandMore />}
                  onClick={() => {
                    document.getElementById("more-text").style.display =
                      "block";
                    document.getElementById("more-button").style.display =
                      "none";
                    document.getElementById("less-button").style.display =
                      "flex";
                  }}
                >
                  Read More
                </Button>
                <Typography
                  id="more-text"
                  fontFamily={"sans-serif"}
                  fontSize={{ xs: "1rem", md: "1.1rem" }}
                  display={{ xs: "none", sm: "block" }}
                  color={"rise.light"}
                >
                  Uniquely matrix economically sound value through cooperative
                  technology. Competently parallel task fully researched data
                  and enterprise process improvements. Collaboratively expedite
                  quality manufactured products via client-focused results
                  quickly communicate enabled technology and turnkey leadership
                  skills. Uniquely enable accurate supply chains rather than
                  friction technology.
                </Typography>
                <Button
                  id="less-button"
                  variant="outlined"
                  size="small"
                  color="rise"
                  sx={{ display: { xs: "none", sm: "none" }, margin: "auto" }}
                  endIcon={<ExpandLess />}
                  onClick={() => {
                    document.getElementById("more-text").style.display = "none";
                    document.getElementById("less-button").style.display =
                      "none";
                    document.getElementById("more-button").style.display =
                      "flex";
                  }}
                >
                  Read Less
                </Button>
                <Apartments />
                {/* <Gallery /> */}
                <Amenities />
                <Payments />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <ContactUs />
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </main>
    </>
  );
}

export default Project;
