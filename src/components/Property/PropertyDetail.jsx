"use client";

import {
  ArrowBack,
  Circle,
  Construction,
  Favorite,
  FavoriteBorder,
  Grid4x4,
  GridView,
  HideSource,
  LocationCity,
  MoreHoriz,
  RoomPreferences,
  ShareSharp,
  SquareFoot,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import Map from "./Map";
import ForYouCarousel from "./ForYouCarousel";
import { useRouter } from "next/router";
import { useStore } from "@/Context/store";
import axios from "axios";

const font = Montserrat({ subsets: ["cyrillic"] });

function PropertyDetail({ openDetail, property }) {
  const { nearbyHomes, similarHomes, setNearbyHomes, setSimilarHomes } =
    useStore();
  console.log("Property Deatil", similarHomes, nearbyHomes);
  const router = useRouter();
  console.log(property);
  const [saved, setSaved] = useState(false);
  const [openImage, setOpenImage] = useState(false);

  useEffect(() => {
    axios
      .get("https://riseaddis-realestate.vercel.app/api/search")
      .then((res) => {
        console.log(res.data);
        setNearbyHomes(res.data.slice(0, 5));
        setSimilarHomes(res.data.splice(5));
      });
  }, [openDetail]);

  return (
    <Box
      position={"absolute"}
      top={0}
      left={0}
      width={"100vw"}
      height={"100vh"}
      zIndex={2000}
      bgcolor={"rgba(0,0,0,0.4)"}
      display={"flex"}
      justifyContent={"center"}
      component={"div"}
    >
      <Box
        id="property-detail"
        width={"80%"}
        p={"0 1.5rem"}
        minHeight={1}
        bgcolor={"white"}
        position={"relative"}
        overflow={"hidden scroll"}
      >
        <Grid
          position={"sticky"}
          top={0}
          container
          zIndex={5000}
          bgcolor={"white"}
          p={"1rem 0"}
        >
          <Grid item md={4}>
            {!openImage ? (
              <Button
                startIcon={<ArrowBack />}
                size="small"
                color="rise"
                onClick={() => {
                  openDetail(false);
                  router.push("/property");
                }}
              >
                Back to Search
              </Button>
            ) : (
              <Button
                startIcon={<ArrowBack />}
                size="small"
                color="rise"
                onClick={() => setOpenImage(false)}
              >
                Back to Properties
              </Button>
            )}
          </Grid>
          <Grid item md={4}>
            {!openImage && (
              <Box
                display={"flex"}
                // flexDirection={"row"}
                alignItems={"center"}
                gap={"1rem"}
                sx={{ userSelect: "none" }}
              >
                <Image src={"/Logo.png"} width={40} height={40} alt="logo" />
                <Typography
                  variant="h5"
                  className={font.className}
                  fontWeight={"bold"}
                  color={"rise"}
                >
                  RISE ADDIS PROPERTIES
                </Typography>
              </Box>
            )}
          </Grid>
          <Grid item md={4}>
            <Box
              display={"flex"}
              height={1}
              justifyContent={"flex-end"}
              alignItems={"center"}
              gap={"0.5rem"}
            >
              <Button
                variant="text"
                startIcon={saved ? <FavoriteBorder /> : <Favorite />}
                size="small"
                color="rise"
                onClick={() => setSaved((p) => !p)}
              >
                {saved ? "Save" : "Saved"}
              </Button>
              <Button
                variant="text"
                startIcon={<ShareSharp />}
                size="small"
                color="rise"
              >
                Share
              </Button>
              <Button
                variant="text"
                startIcon={<HideSource />}
                size="small"
                color="rise"
              >
                Hide
              </Button>
              <IconButton color="rise" size="small">
                <MoreHoriz />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box>
          {!openImage ? (
            <>
              <Box position={"relative"}>
                <Grid container spacing={"0.5rem"}>
                  <Grid item md={6}>
                    <Box
                      borderRadius={"1rem 0 0 1rem"}
                      component={"img"}
                      src={
                        !property?.images
                          ? "/images/2.jpg"
                          : property?.images[0]
                      }
                      width={"100%"}
                      height={"100%"}
                      alt="property"
                      sx={{ cursor: "pointer" }}
                      onClick={() => setOpenImage(true)}
                    ></Box>
                  </Grid>
                  <Grid item md={6}>
                    <Grid container spacing={"0.5rem"} p={0}>
                      <Grid item md={6}>
                        <Box
                          component={"img"}
                          onClick={() => setOpenImage(true)}
                          src={
                            !property?.images
                              ? "/images/4.jpg"
                              : property?.images[1]
                          }
                          width={"100%"}
                          height={"100%"}
                          alt="property"
                          sx={{ objectFit: "cover", cursor: "pointer" }}
                        ></Box>
                      </Grid>
                      <Grid item md={6}>
                        <Box
                          borderRadius={"0 1rem 0 0"}
                          component={"img"}
                          src={
                            !property?.images
                              ? "/images/5.jpg"
                              : property?.images[2]
                          }
                          width={"100%"}
                          height={"100%"}
                          alt="property"
                          sx={{ objectFit: "cover", cursor: "pointer" }}
                          onClick={() => setOpenImage(true)}
                        ></Box>
                      </Grid>
                      <Grid item md={6}>
                        <Box
                          component={"img"}
                          src={
                            !property?.images
                              ? "/images/6.jpg"
                              : property?.images[3]
                          }
                          width={"100%"}
                          height={"100%"}
                          alt="property"
                          sx={{
                            objectFit: "cover",
                            cursor: "pointer",
                            "&:hover": {
                              bgcolor: "white",
                            },
                          }}
                          onClick={() => setOpenImage(true)}
                        ></Box>
                      </Grid>
                      <Grid item md={6}>
                        <Box
                          component={"img"}
                          src={
                            !property?.images
                              ? "/images/7.jpg"
                              : property?.images[4]
                          }
                          width={"100%"}
                          height={"100%"}
                          alt="property"
                          sx={{ objectFit: "cover", cursor: "pointer" }}
                          borderRadius={"0 0 1rem 0"}
                          onClick={() => setOpenImage(true)}
                        ></Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Button
                  sx={{
                    position: "absolute",
                    right: "1rem",
                    bottom: "1rem",
                    backgroundColor: "rise.light",
                  }}
                  startIcon={<GridView />}
                  variant="contained"
                  onClick={() => setOpenImage(true)}
                >
                  See all {!property?.images ? "0" : property?.images.length}{" "}
                  photos
                </Button>
              </Box>

              <Box mt={"1.5rem"}>
                <Grid container spacing={6}>
                  <Grid item md={9}>
                    <Box
                      display={"flex"}
                      width={"100%"}
                      gap={"2rem"}
                      p={"1rem 0"}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        flex={1}
                        gap={"0.5rem"}
                      >
                        <Typography
                          variant="h2"
                          fontSize={"2rem"}
                          fontWeight={600}
                          className={font.className}
                        >
                          ${property?.price || "300,000"}
                        </Typography>
                        <Typography
                          variant="h4"
                          fontSize={"1.25rem"}
                          className={font.className}
                        >
                          {property?.name + ", " + property?.location ||
                            "LOT 26 Majestic Heights Rd, Sturgis, SD 57785"}
                        </Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        gap={"0.5rem"}
                      >
                        <Typography
                          variant="h2"
                          fontSize={"2rem"}
                          fontWeight={600}
                        >
                          {property?.bedroom || "--"}
                        </Typography>
                        <Typography variant="h4" fontSize={"1.25rem"}>
                          beds
                        </Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        gap={"0.5rem"}
                      >
                        <Typography
                          variant="h2"
                          fontSize={"2rem"}
                          fontWeight={600}
                        >
                          {property?.bathroom || "--"}
                        </Typography>
                        <Typography variant="h4" fontSize={"1.25rem"}>
                          baths
                        </Typography>
                      </Box>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        gap={"0.5rem"}
                      >
                        <Typography
                          variant="h2"
                          fontSize={"2rem"}
                          fontWeight={600}
                        >
                          {property?.area || "--"}
                        </Typography>
                        <Typography variant="h4" fontSize={"1.25rem"}>
                          Acres
                        </Typography>
                      </Box>
                    </Box>
                    <Box m={"2rem 0"}>
                      <Grid container spacing={1}>
                        <Grid item md={4}>
                          <Box
                            p={"1rem"}
                            sx={{
                              backgroundColor: "riseLight.light",
                            }}
                            borderRadius={"0.25rem"}
                            display={"flex"}
                            alignItems={"center"}
                            gap={"0.5rem"}
                            color={"rise.light"}
                          >
                            <LocationCity />
                            <Typography>Acreage</Typography>
                          </Box>
                        </Grid>
                        <Grid item md={4}>
                          <Box
                            p={"1rem"}
                            sx={{
                              backgroundColor: "riseLight.light",
                            }}
                            borderRadius={"0.25rem"}
                            display={"flex"}
                            alignItems={"center"}
                            gap={"0.5rem"}
                            color={"rise.light"}
                          >
                            <Construction />
                            <Typography>Built in ---</Typography>
                          </Box>
                        </Grid>
                        <Grid item md={4}>
                          <Box
                            p={"1rem"}
                            sx={{
                              backgroundColor: "riseLight.light",
                            }}
                            borderRadius={"0.25rem"}
                            display={"flex"}
                            alignItems={"center"}
                            gap={"0.5rem"}
                            color={"rise.light"}
                          >
                            <Grid4x4 />
                            <Typography>-- sqft lot</Typography>
                          </Box>
                        </Grid>
                        <Grid item md={4}>
                          <Box
                            p={"1rem"}
                            sx={{
                              backgroundColor: "riseLight.light",
                            }}
                            borderRadius={"0.25rem"}
                            display={"flex"}
                            alignItems={"center"}
                            gap={"0.5rem"}
                            color={"rise.light"}
                          >
                            <Box
                              component="img"
                              src="/Logo.svg"
                              height={20}
                              alt="icon"
                            ></Box>
                            <Typography>$-- Zestimate®</Typography>
                          </Box>
                        </Grid>
                        <Grid item md={4}>
                          <Box
                            p={"1rem"}
                            sx={{
                              backgroundColor: "riseLight.light",
                            }}
                            borderRadius={"0.25rem"}
                            display={"flex"}
                            alignItems={"center"}
                            gap={"0.5rem"}
                            color={"rise.light"}
                          >
                            <SquareFoot />
                            <Typography>$-- sqft</Typography>
                          </Box>
                        </Grid>
                        <Grid item md={4}>
                          <Box
                            p={"1rem"}
                            sx={{
                              backgroundColor: "riseLight.light",
                            }}
                            borderRadius={"0.25rem"}
                            display={"flex"}
                            alignItems={"center"}
                            gap={"0.5rem"}
                            color={"rise.light"}
                          >
                            <RoomPreferences />
                            <Typography>$-- HOA</Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <Divider sx={{ m: "1rem 0" }} />
                    <Box>
                      <Typography
                        fontSize={"1.5rem"}
                        mb={"1rem"}
                        fontWeight={700}
                        className={font.className}
                      >
                        What&apos;s special
                      </Typography>
                      <Typography fontSize={"1rem"} className={font.className}>
                        POSSIBLY THE BLACK HILLS PREMIER HOMESITE! Own your own
                        mountain, this iconic mountain top on Deadwood’s
                        northeast corner is for sale!! Over 95 acres, with easy
                        access, incredible 360 degree views, partially in City
                        limits, partially in county, borders BLM land. Endless
                        options for your truly one-of-a-kind homesites –
                        overlooks Deadwood, clear views of Orman Dam, Bear
                        Butte, Lead and Terry Peak. Just minutes to downtown
                        Deadwood. A truly rare and unique property to own.
                        Offered by Mike Percevich, 605-645-3210, Real Properties
                        of Lead-Deadwood.
                      </Typography>
                      <Box display={"flex"} m={"1.5rem 0"} gap={"0.5rem"}>
                        <Typography
                          fontWeight={"700"}
                          className={font.className}
                        >
                          10 hours
                        </Typography>
                        <Typography className={font.className}>
                          on RISEADDIS
                        </Typography>
                        <Divider
                          orientation="vertical"
                          sx={{
                            border: "1px solid",
                            borderColor: "rise.light",
                          }}
                          flexItem
                        />
                        <Typography
                          fontWeight={"700"}
                          className={font.className}
                        >
                          70
                        </Typography>
                        <Typography className={font.className}>
                          views
                        </Typography>
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{
                            border: "1px solid",
                            borderColor: "rise.light",
                          }}
                        />
                        <Typography
                          fontWeight={"700"}
                          className={font.className}
                        >
                          7
                        </Typography>
                        <Typography className={font.className}>
                          saves
                        </Typography>
                      </Box>
                      <Box m={"1rem 0"}>
                        <Typography
                          fontSize={"0.875rem"}
                          lineHeight={"1.5rem"}
                          className={font.className}
                        >
                          RiseAddis last checked: 11 hours ago
                        </Typography>
                        <Typography
                          fontSize={"0.875rem"}
                          lineHeight={"1.5rem"}
                          className={font.className}
                        >
                          Listing updated: 21 hours ago
                        </Typography>
                      </Box>

                      <Box m={"1rem 0"} sx={{ aspectRatio: "16/6" }}>
                        <Map type={"property"} />
                      </Box>

                      <Box>
                        <Typography
                          fontSize={"1.5rem"}
                          mb={"1rem"}
                          fontWeight={700}
                          className={font.className}
                        >
                          Facts & features
                        </Typography>
                        <Box>
                          <Typography
                            fontSize={"1.25rem"}
                            p={"0.25rem 0.5rem"}
                            sx={{
                              backgroundColor: "riseLight.light",
                            }}
                            fontWeight={500}
                          >
                            Property
                          </Typography>
                          <Box p={"1.5rem 0"}>
                            <Grid container spacing={2}>
                              <Grid item md={6}>
                                <Typography
                                  fontSize={"1rem"}
                                  fontWeight={700}
                                  className={font.className}
                                >
                                  Property
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    pl: "1.5rem",
                                    gap: "1rem",
                                  }}
                                >
                                  <Circle
                                    sx={{ width: "10px", height: "10px" }}
                                  />
                                  <ListItemText primary="Waterfront features: None" />
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    pl: "1.5rem",
                                    gap: "1rem",
                                  }}
                                >
                                  <Circle
                                    sx={{ width: "10px", height: "10px" }}
                                  />
                                  <ListItemText primary="Topography of land: Sloping,Hilly" />
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    pl: "1.5rem",
                                    gap: "1rem",
                                  }}
                                >
                                  <Circle
                                    sx={{ width: "10px", height: "10px" }}
                                  />
                                  <ListItemText primary="Horses can be raised: Yes" />
                                </Box>
                              </Grid>
                              <Grid item md={6}>
                                <Typography
                                  fontSize={"1rem"}
                                  fontWeight={700}
                                  className={font.className}
                                >
                                  Lot
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    pl: "1.5rem",
                                    gap: "1rem",
                                  }}
                                >
                                  <Circle
                                    sx={{ width: "10px", height: "10px" }}
                                  />
                                  <ListItemText primary="Lot size: 95 Acres" />
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    pl: "1.5rem",
                                    gap: "1rem",
                                  }}
                                >
                                  <Circle
                                    sx={{ width: "10px", height: "10px" }}
                                  />
                                  <ListItemText primary="Lot features: Views" />
                                </Box>

                                <Box m={"1rem 0"}></Box>

                                <Typography
                                  fontSize={"1rem"}
                                  fontWeight={700}
                                  className={font.className}
                                >
                                  Other property information
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    pl: "1.5rem",
                                    gap: "1rem",
                                  }}
                                >
                                  <Circle
                                    sx={{ width: "10px", height: "10px" }}
                                  />
                                  <ListItemText primary="Zoning description: Lawrence County Zoning: Park Forest" />
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    pl: "1.5rem",
                                    gap: "1rem",
                                  }}
                                >
                                  <Circle
                                    sx={{ width: "10px", height: "10px" }}
                                  />
                                  <ListItemText primary="Raise horse: Yes" />
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                        <Box>
                          <Typography
                            fontSize={"1.25rem"}
                            p={"0.25rem 0.5rem"}
                            sx={{
                              backgroundColor: "riseLight.light",
                            }}
                            fontWeight={500}
                          >
                            Utilities & green energy
                          </Typography>
                          <Box p={"1.5rem 0"}>
                            <Grid container spacing={2}>
                              <Grid item md={6}>
                                <Typography
                                  fontSize={"1rem"}
                                  fontWeight={700}
                                  className={font.className}
                                >
                                  Property
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    pl: "1.5rem",
                                    gap: "1rem",
                                  }}
                                >
                                  <Circle
                                    sx={{ width: "10px", height: "10px" }}
                                  />
                                  <ListItemText primary="Gas information: None" />
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    pl: "1.5rem",
                                    gap: "1rem",
                                  }}
                                >
                                  <Circle
                                    sx={{ width: "10px", height: "10px" }}
                                  />
                                  <ListItemText primary="Sewer information: None" />
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    pl: "1.5rem",
                                    gap: "1rem",
                                  }}
                                >
                                  <Circle
                                    sx={{ width: "10px", height: "10px" }}
                                  />
                                  <ListItemText primary="Water information: None" />
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                        <Box>
                          <Typography
                            fontSize={"1.25rem"}
                            p={"0.25rem 0.5rem"}
                            sx={{
                              backgroundColor: "riseLight.light",
                            }}
                            fontWeight={500}
                          >
                            Community & neighborhood
                          </Typography>
                          <Box p={"1.5rem 0"}>
                            <Grid container spacing={2}>
                              <Grid item md={6}>
                                <Typography
                                  fontSize={"1rem"}
                                  fontWeight={700}
                                  className={font.className}
                                >
                                  Location
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    pl: "1.5rem",
                                    gap: "1rem",
                                  }}
                                >
                                  <Circle
                                    sx={{ width: "10px", height: "10px" }}
                                  />
                                  <ListItemText primary="Region: Sturgis" />
                                </Box>
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "baseline",
                                    pl: "1.5rem",
                                    gap: "1rem",
                                  }}
                                >
                                  <Circle
                                    sx={{ width: "10px", height: "10px" }}
                                  />
                                  <ListItemText primary="Subdivision: Majestic Estates Subdivision" />
                                </Box>
                              </Grid>
                            </Grid>
                          </Box>
                        </Box>
                      </Box>
                      <Divider sx={{ m: "1rem 0" }} />
                      <Box>
                        <Typography
                          fontSize={"1.5rem"}
                          mb={"1rem"}
                          fontWeight={700}
                          className={font.className}
                        >
                          Contact agent
                        </Typography>
                        <Box>
                          <Grid container spacing={2} rowGap={1}>
                            <Grid item md={12}>
                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                gap={"0.5rem"}
                              >
                                <Typography
                                  fontSize={"0.875rem"}
                                  fontWeight={700}
                                  className={font.className}
                                >
                                  Name
                                </Typography>
                                <TextField
                                  variant={"outlined"}
                                  color="rise"
                                  size="small"
                                  sx={{ backgroundColor: "riseLight.light" }}
                                />
                              </Box>
                            </Grid>
                            <Grid item md={6}>
                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                gap={"0.5rem"}
                              >
                                <Typography
                                  fontSize={"0.875rem"}
                                  fontWeight={700}
                                  className={font.className}
                                >
                                  Phone
                                </Typography>
                                <TextField
                                  variant={"outlined"}
                                  color="rise"
                                  size="small"
                                  sx={{ backgroundColor: "riseLight.light" }}
                                />
                              </Box>
                            </Grid>
                            <Grid item md={6}>
                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                gap={"0.5rem"}
                              >
                                <Typography
                                  fontSize={"0.875rem"}
                                  fontWeight={700}
                                  className={font.className}
                                >
                                  Email
                                </Typography>
                                <TextField
                                  variant={"outlined"}
                                  color="rise"
                                  size="small"
                                  sx={{ backgroundColor: "riseLight.light" }}
                                />
                              </Box>
                            </Grid>
                            <Grid item md={12} minHeight={"3rem"}>
                              <Box
                                display={"flex"}
                                flexDirection={"column"}
                                gap={"0.5rem"}
                              >
                                <Typography
                                  fontSize={"0.875rem"}
                                  fontWeight={700}
                                  className={font.className}
                                >
                                  Message
                                </Typography>
                                <TextField
                                  variant={"outlined"}
                                  color="rise"
                                  size="large"
                                  multiline
                                  sx={{
                                    backgroundColor: "riseLight.light",
                                    // height: "4rem",
                                  }}
                                />
                              </Box>
                            </Grid>
                          </Grid>
                          <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ m: "1rem 0 0.5rem 0" }}
                          >
                            Contact agent
                          </Button>
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="I want financing information"
                          />
                          <Typography
                            fontSize={"0.625rem"}
                            className={font.className}
                            color={"rise"}
                            m={"0.5rem 0"}
                          >
                            By pressing Contact agent, you agree that RiseAddis
                            Group and its affiliates, and real estate
                            professionals may call/text you about your inquiry,
                            which may involve use of automated means and
                            prerecorded/artificial voices. You don&apos;t need
                            to consent as a condition of buying any property,
                            goods or services. Message/data rates may apply. You
                            also agree to our Terms of Use. RiseAddis does not
                            endorse any real estate professionals. We may share
                            information about your recent and future site
                            activity with your agent to help them understand
                            what you&apos;re looking for in a home.
                          </Typography>
                        </Box>
                      </Box>
                      <Divider sx={{ m: "2rem 0" }} />
                      {nearbyHomes.length && (
                        <Box>
                          <Typography
                            fontSize={"1.5rem"}
                            mb={"1rem"}
                            fontWeight={700}
                            className={font.className}
                          >
                            Nearby homes
                          </Typography>
                          <ForYouCarousel
                            openDetail={openDetail}
                            lists={nearbyHomes}
                          />
                        </Box>
                      )}
                      <Divider sx={{ m: "2rem 0" }} />
                      {similarHomes.length && (
                        <Box>
                          <Typography
                            fontSize={"1.5rem"}
                            mb={"1rem"}
                            fontWeight={700}
                            className={font.className}
                          >
                            Similar homes
                          </Typography>
                          <ForYouCarousel
                            openDetail={openDetail}
                            lists={similarHomes}
                          />
                        </Box>
                      )}
                      <Divider sx={{ m: "2rem 0" }} />
                    </Box>
                  </Grid>
                  <Grid item md={3}>
                    <Box
                      p={"1.5rem"}
                      borderRadius={"1rem"}
                      border={"1px solid"}
                      borderColor={"rise.light"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{ textTransform: "capitalize" }}
                      >
                        Contact Agent
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </>
          ) : (
            <>
              <Box>
                <Grid container spacing={4}>
                  <Grid item md={9}>
                    <Grid container spacing={2}>
                      {property.images.map((image, index) => {
                        if (index % 3 == 0) {
                          return (
                            <Grid item md={12} key={index}>
                              <Box
                                component={"img"}
                                src={image}
                                alt="image"
                                width={1}
                              />
                            </Grid>
                          );
                        } else {
                          return (
                            <Grid item md={6} key={index}>
                              <Box
                                component={"img"}
                                src={image}
                                alt="image"
                                width={1}
                              />
                            </Grid>
                          );
                        }
                      })}
                    </Grid>
                  </Grid>
                  <Grid item md={3}>
                    <Box position={"fixed"} width={"15%"}>
                      <Typography
                        fontSize={"1.25rem"}
                        className={font.className}
                        fontWeight={700}
                      >
                        $950,000
                      </Typography>
                      <Typography className={font.className} fontWeight={700}>
                        95 Acres
                      </Typography>
                      <Typography
                        className={font.className}
                        fontWeight={400}
                        m={"0.5rem 0 1.5rem 0"}
                      >
                        LOT 26 Majestic Heights Rd Sturgis, SD 57785
                      </Typography>
                      <Button fullWidth variant="contained">
                        Contact Agent
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default PropertyDetail;
