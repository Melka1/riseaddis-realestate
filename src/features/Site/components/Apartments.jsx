import CarouselContainer from "@/components/Carousel";
import { getCurrency } from "@/data/currency";
import ProjectDescList from "@/features/Project/ProjectDescList";
import { addisFont, riseFont } from "@/pages/_app";
import { usePropertyStore } from "@/stores/propertyStore";
import getPrice from "@/utils/getPrice";
import { Box, Divider, Grid, Typography } from "@mui/material";

function Apartments({ apartments, site }) {
  return (
    <Box>
      <Typography
        className={addisFont.className}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        color={"rise.dark"}
        fontWeight={"bold"}
        mb={1.5}
      >
        Apartment units
      </Typography>
      <CarouselContainer showdots={false} removeArrow={false}>
        {apartments?.map((apartment, index) => (
          <Grid
            container
            key={apartment.title + index}
            className={apartment.title}
            bgcolor={"riseLight.light"}
            p={"1rem"}
            spacing={{ xs: 2, md: 0 }}
          >
            <Grid
              item
              xs={12}
              md={6}
              pr={"1rem"}
              sx={{
                "&>.project-desc:nth-of-type(2n+1)": { bgcolor: "lightHover" },
                "&>.project-desc:nth-of-type(2n+1) .desc-divider": {
                  visibility: "hidden",
                },
              }}
            >
              <Typography
                className={riseFont.className}
                fontSize={{ xs: "1.2rem", md: "1.5rem" }}
                color={"rise.dark"}
                fontWeight={"bold"}
                textAlign={"center"}
                mb={"1rem"}
              >
                {apartment.name || `Type ${index + 1}`}
              </Typography>
              <ProjectDescList
                type={"small"}
                name={"No of Bedroom"}
                value={apartment.bedroom}
              />
              <ProjectDescList
                type={"small"}
                name={"No of Bathroom"}
                value={apartment.bathroom}
              />
              <ProjectDescList
                type={"small"}
                name={"Balcony"}
                value={apartment.balcony ? "Yes" : "No"}
              />
              <ProjectDescList
                type={"small"}
                name={"Net Area"}
                value={apartment.netArea}
                area
              />
              {apartment.commonArea && (
                <ProjectDescList
                  type={"small"}
                  name={"Common Area"}
                  value={apartment.commonArea}
                  area
                />
              )}
              {apartment.totalArea && (
                <ProjectDescList
                  type={"small"}
                  name={"Total Area"}
                  value={apartment.totalArea}
                  area
                />
              )}
              <Divider flexItem sx={{ m: "0.5rem 0" }} />
              {apartment.available && (
                <ProjectDescList
                  type={"small"}
                  name={"Available Apartments"}
                  value={apartment.available}
                />
              )}
              {apartment.total && (
                <ProjectDescList
                  type={"small"}
                  name={"Total units"}
                  value={apartment.total}
                />
              )}
              {apartment.price ? (
                <ProjectDescList
                  type={"small"}
                  name={"Price"}
                  value={
                    getCurrency(site.realEstate.currency).abbr +
                    " " +
                    apartment.price
                  }
                />
              ) : site?.price && apartment.totalArea ? (
                <ProjectDescList
                  type={"small"}
                  name={"Price"}
                  value={
                    getCurrency(site.realEstate.currency).abbr +
                    " " +
                    getPrice(site.price * apartment.totalArea).withOutDecimal
                  }
                />
              ) : (
                <></>
              )}
            </Grid>
            <Grid item xs={12} md={6} display={"flex"} alignItems={"flex-end"}>
              <Box width={1}>
                <CarouselContainer
                  showdots={true}
                  autoplay={true}
                  infinite={apartment.images > 1}
                  removeArrow={true}
                >
                  {apartment.images.map((img, ind) => (
                    <Box
                      key={ind}
                      component={"img"}
                      width={1}
                      src={img}
                      loading="lazy"
                      aria-label="apartment image"
                      alt="apartment image"
                      sx={{ objectFit: "contain", aspectRatio: "4/3" }}
                    />
                  ))}
                </CarouselContainer>
              </Box>
            </Grid>
          </Grid>
        ))}
      </CarouselContainer>
    </Box>
  );
}

export default Apartments;
