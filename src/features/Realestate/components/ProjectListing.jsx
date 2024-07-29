import MeterSquared from "@/components/MeterSquared";
import SiteDescList from "@/features/Project/SiteDescList";
import { Box, Grid, Typography, Stack, Divider } from "@mui/material";

function ProjectListing({
  imgUrl,
  name,
  floors,
  apartments,
  area,
  href,
  description,
  status,
  builtUpArea,
  buildingType,
  location,
}) {
  return (
    <Box
      component={"a"}
      href={href || "#"}
      m={"1rem 0"}
      p={2}
      border={"1px solid transparent"}
      sx={{
        transition: "all 0.3s",
        borderRadius: { xs: "0.5rem", md: "2rem" },
        bgcolor: "action.hover",
        cursor: "pointer",
        "&:hover": {
          transform: { xs: "none", md: "translateX(50px)" },
          borderColor: "rise.light",
          boxShadow: "-5px 5px 10px 10px rgba(0, 0, 0, 0.25)",
        },
      }}
    >
      <Grid
        container
        borderRadius={{ xs: "1rem", md: "2rem" }}
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
      >
        <Grid item xs={5.5}>
          <Stack>
            <Box
              width={1}
              height={1}
              component={"img"}
              src={imgUrl || "/images/project6.jpg"}
              sx={{
                aspectRatio: "16/9",
                objectFit: "contain",
                borderRadius: { xs: "0.5rem", md: "2rem" },
              }}
              alt="site image"
            />
          </Stack>
        </Grid>
        <Grid
          item
          md={1}
          alignSelf={"center"}
          display={{ xs: "none", md: "flex" }}
        >
          <Stack>
            <Box
              width={1}
              component={"img"}
              src="/Logo.png"
              sx={{
                transform: "scale(2)",
                borderRadius: "50%",
                boxShadow: "0 0 5px 5px gray",
                opacity: 0.4,
              }}
              alt="logo"
            />
          </Stack>
        </Grid>
        <Grid item xs={5.5} sm={6.5} md={5.5}>
          <Box
            flex={1}
            display={"flex"}
            height={1}
            flexDirection={{ xs: "column", md: "column" }}
            p={{ xs: "rem", md: "3rem" }}
            justifyContent={"space-around"}
          >
            <Box
              flex={1}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography
                fontSize={{ xs: "1.2rem", md: "2rem" }}
                color={"rise.dark"}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                {name}
              </Typography>
              {description && (
                <Typography
                  fontFamily={"sans-serif"}
                  fontSize={{ xs: "0.95rem", md: "1.1rem" }}
                  color={"rise.light"}
                  textAlign={{ xs: "left", md: "center" }}
                >
                  {description}
                </Typography>
              )}
            </Box>
            <Box display={"flex"} width={1} mt={2} flex={1}>
              <Grid container rowSpacing={0}>
                <Grid
                  item
                  width={1}
                  md={12}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={0}
                  sx={{
                    "&>div:nth-of-type(2n)": {
                      bgcolor: "action.hover",
                    },
                    "&>div:nth-of-type(2n+1)": {
                      bgcolor: "action.focus",
                    },
                  }}
                >
                  {buildingType && (
                    <SiteDescList name="Building Type" value={buildingType} />
                  )}

                  {area && (
                    <SiteDescList name="Building footprint" value={area} area />
                  )}

                  {builtUpArea && (
                    <SiteDescList
                      name={"Built-up Area"}
                      value={builtUpArea}
                      area
                    />
                  )}

                  {floors && <SiteDescList name={"Floors"} value={floors} />}

                  {apartments && (
                    <SiteDescList
                      name={"Total number of apartments"}
                      value={apartments}
                    />
                  )}

                  {location && (
                    <SiteDescList name={"Location"} value={location} />
                  )}

                  {status && <SiteDescList name={"Status"} value={status} />}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectListing;
