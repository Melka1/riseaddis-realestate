import CarouselContainer from "@/components/Carousel";
import { getCurrency } from "@/data/currency";
import ProjectDescList from "@/features/Project/ProjectDescList";
import { addisFont } from "@/pages/_app";
import getPrice from "@/utils/getPrice";
import { Box, Divider, Grid, Typography } from "@mui/material";

function ProjectInfo({ site }) {
  return (
    <Box
      width={1}
      mt={{ xs: 3, md: 0 }}
      p={{ xs: "0.5rem 1rem", sm: "2rem 4rem", md: "3rem 6rem" }}
      sx={{
        backgroundSize: "cover",
        backgroundImage: "url(/images/image7.png)",
        backgroundPositionY: "100%",
      }}
    >
      <Grid container spacing={8}>
        <Grid
          item
          xs={12}
          md={5}
          flex={3}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography
            className={addisFont.className}
            fontSize={{ xs: "1.5rem", md: "2rem" }}
            color={"rise.dark"}
            fontWeight={"bold"}
            textTransform={"uppercase"}
          >
            General Information
          </Typography>
          <Divider flexItem />
          <Box
            display={"flex"}
            width={1}
            flexDirection={"column"}
            sx={{
              "&>.project-desc:nth-of-type(2n+1)": { bgcolor: "lightHover" },
              "&>.project-desc:nth-of-type(2n+1) .desc-divider": {
                visibility: "hidden",
              },
            }}
          >
            {site.name && <ProjectDescList name={"Name"} value={site.name} />}
            {site.location && (
              <ProjectDescList name={"Location"} value={site.location} />
            )}
            {site.footPrintArea && (
              <ProjectDescList
                name={"Building footprint"}
                value={site.footPrintArea}
                area
              />
            )}
            {site.builtUpArea && (
              <ProjectDescList
                name={"Total built up area"}
                value={site.builtUpArea}
                area
              />
            )}

            {site.floors && (
              <ProjectDescList name={"Number of floors"} value={site.floors} />
            )}

            {site.apartmentSizes && (
              <ProjectDescList
                name={"Apartment sizes"}
                value={site.apartmentSizes}
              />
            )}

            {site.basementCount && (
              <ProjectDescList
                name={"Number of basements"}
                value={site.basementCount || "0"}
              />
            )}

            {site.numberOfUnits && (
              <ProjectDescList
                name={"Total apartment units"}
                value={site.numberOfUnits}
              />
            )}
            {site.oneBedrooms && (
              <ProjectDescList
                name={"Number of 1 bedroom units"}
                value={site.oneBedrooms}
              />
            )}
            {site.twoBedrooms && (
              <ProjectDescList
                name={"Number of 2 bedroom units"}
                value={site.twoBedrooms}
              />
            )}
            {site.threeBedrooms && (
              <ProjectDescList
                name={"Number of 3 bedroom units"}
                value={site.threeBedrooms}
              />
            )}
            {site.parkingLots && (
              <ProjectDescList
                name={"Parking provision"}
                value={site.parkingLots}
              />
            )}
            {site.deliveryTime && (
              <ProjectDescList
                name={"Delivery time"}
                value={site.deliveryTime}
              />
            )}
            {site.buildingType && (
              <ProjectDescList
                name={"Building type"}
                value={site.buildingType}
              />
            )}
            {site.stage && (
              <ProjectDescList name={"Status"} value={site.stage} />
            )}
            {site.price && (
              <ProjectDescList
                name={"Price"}
                value={
                  getCurrency(site.realEstate.currency).abbr +
                  " " +
                  getPrice(site.price).withOutDecimal +
                  "/sqm"
                }
                price
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={7} display={"flex"} alignItems={"baseline"}>
          {site?.images && (
            <Box
              width={1}
              height={1}
              display={"flex"}
              alignItems={"center"}
              className="carousel--container"
            >
              <Box width={1}>
                <CarouselContainer
                  type={"small"}
                  infinite={true}
                  autoplay={true}
                >
                  {site.images.map((image, index) => (
                    <Box
                      key={index}
                      component={"img"}
                      src={image}
                      width={1}
                      height={1}
                      loading="lazy"
                      sx={{
                        aspectRatio: "16/9",
                        objectFit: "contain",
                        userSelect: "none",
                        bgcolor: "action.focus",
                      }}
                      alt="site image"
                    />
                  ))}
                </CarouselContainer>
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectInfo;
