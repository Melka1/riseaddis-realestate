import { ExpandMore } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import PropertyListing from "../PropertyListing";
import Map from "./Map";
import { useState } from "react";

const font = Montserrat({ subsets: ["cyrillic"] });

function PropertyBody({ openDetail, properties }) {
  const [sortType, setSortType] = useState("Home for You");
  const [openSort, setOpenSort] = useState(false);
  // console.log(properties);
  const handleSortType = (type) => {
    setSortType(type);
    setOpenSort(false);
  };
  return (
    <Box width={1} display={"flex"} flexGrow={1} flex={1} overflow={"hidden"}>
      <Grid container height={1}>
        <Grid item md={6} height={1}>
          <Map type={"main"} />
        </Grid>
        <Grid item md={6} height={1} sx={{ overflow: "hidden scroll" }}>
          <Box p={"1.25rem"}>
            <Typography
              fontSize={"1.25rem"}
              lineHeight={"26px"}
              fontWeight={"500"}
              className={font.className}
            >
              Addis Ababa Real Estate & Homes For Sale
            </Typography>
            <Box display={"flex"} width={1} mt={"0.5rem"} alignItems={"center"}>
              <Typography
                flex={1}
                fontSize={"0.875rem"}
                lineHeight={"1.25rem"}
                className={font.className}
                fontWeight={600}
              >
                {properties?.length} results
              </Typography>

              <Box
                position={"relative"}
                minWidth={200}
                display={"flex"}
                justifyContent={"flex-end"}
              >
                <Button
                  endIcon={<ExpandMore />}
                  sx={{
                    textTransform: "capitalize",
                    justifyContent: "flex-end",
                  }}
                  onClick={() => setOpenSort((s) => !s)}
                  // fullWidth
                >
                  Sort: {sortType}
                </Button>
                {openSort && (
                  <Box
                    position={"absolute"}
                    top={"120%"}
                    right={0}
                    zIndex={1000}
                    bgcolor={"white"}
                    border={"1px solid gray"}
                    borderRadius={"0.5rem"}
                  >
                    <Button
                      variant="text"
                      fullWidth
                      size={"large"}
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "capitalize",
                      }}
                      onClick={() => handleSortType("Home for You")}
                    >
                      Home for You
                    </Button>
                    <Button
                      variant="text"
                      fullWidth
                      size={"large"}
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "capitalize",
                      }}
                      onClick={() => handleSortType("Price (Hign to Low)")}
                    >
                      Price (Hign to Low)
                    </Button>
                    <Button
                      variant="text"
                      fullWidth
                      size={"large"}
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "capitalize",
                      }}
                      onClick={() => handleSortType("Price (Low to High)")}
                    >
                      Price (Low to High)
                    </Button>
                    <Button
                      variant="text"
                      fullWidth
                      size={"large"}
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "capitalize",
                      }}
                      onClick={() => handleSortType("Newest")}
                    >
                      Newest
                    </Button>
                    <Button
                      variant="text"
                      fullWidth
                      size={"large"}
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "capitalize",
                      }}
                      onClick={() => handleSortType("Bedrooms")}
                    >
                      Bedrooms
                    </Button>
                    <Button
                      variant="text"
                      fullWidth
                      size={"large"}
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "capitalize",
                      }}
                      onClick={() => handleSortType("Bathrooms")}
                    >
                      Bathrooms
                    </Button>
                    <Button
                      variant="text"
                      fullWidth
                      size={"large"}
                      sx={{
                        justifyContent: "flex-start",
                        textTransform: "capitalize",
                      }}
                      onClick={() => handleSortType("Area")}
                    >
                      Area
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
          <Grid container>
            {properties?.map((property) => (
              <Grid key={property.id} item sm={6} p={"1rem"}>
                <PropertyListing
                  openDetail={openDetail}
                  imgSrc={property.images[0]}
                  id={property.id - 1}
                  name={property.name}
                  bedroom={property.bedroom}
                  bathroom={property.bathroom}
                  area={property.area}
                  location={property.location}
                  count={property.images.length}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PropertyBody;
