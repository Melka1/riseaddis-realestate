import { Box, Grid, Typography, Stack, Divider } from "@mui/material";
import { useRouter } from "next/router";
function ProjectListing({ imgUrl, name, floors, apartments, area, href }) {
  const router = useRouter();
  return (
    <Box
      component={"a"}
      href={href || "/real-estate/abay-homes-real-estate/gotera-kera-area"}
      m={"1rem 0"}
      border={"1px solid transparent"}
      sx={{
        transition: "all 0.3s",
        borderRadius: { xs: "0.5rem", md: "2rem" },
        cursor: "pointer",
        "&:hover": {
          transform: { xs: "none", md: "translateX(50px)" },
          borderColor: "rise.light",
          boxShadow: "-5px 5px 10px 10px rgba(0, 0, 0, 0.25)",
        },
      }}
      onClick={() =>
        router.push(
          href || "/real-estate/abay-homes-real-estate/gotera-kera-area"
        )
      }
    >
      <Grid
        container
        bgcolor={"action.hover"}
        borderRadius={{ xs: "1rem", md: "2rem" }}
        direction={{ xs: "column", sm: "row" }}
      >
        <Grid item xs={5.5}>
          <Box
            width={1}
            height={1}
            component={"img"}
            src={imgUrl || "/images/project6.jpg"}
            sx={{
              aspectRatio: "16/9",
              objectFit: "cover",
              borderRadius: { xs: "0.5rem", md: "2rem" },
            }}
          />
        </Grid>
        <Grid
          item
          md={1}
          alignSelf={"center"}
          display={{ xs: "none", md: "flex" }}
        >
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
          />
        </Grid>
        <Grid item xs={5.5} sm={6.5} md={5.5}>
          <Box
            flex={1}
            display={"flex"}
            height={1}
            flexDirection={{ xs: "column", md: "column" }}
            p={{ xs: "1rem", md: "3rem" }}
            justifyContent={"space-around"}
          >
            <Box flex={1}>
              <Typography
                fontSize={{ xs: "1.2rem", md: "2rem" }}
                color={"rise.dark"}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                {name || "Gotera-Keta Project"}
              </Typography>
              <Typography
                fontFamily={"sans-serif"}
                fontSize={{ xs: "0.95rem", md: "1.1rem" }}
                color={"rise.light"}
                textAlign={{ xs: "left", md: "center" }}
              >
                Laminate flooring is a more affordable option in place of
                hardwood flooring that can cost almost ten times the cost of
                laminate flooring.
              </Typography>
            </Box>
            <Box display={"flex"} width={1} mt={2} flex={1}>
              <Grid container rowSpacing={0}>
                <Grid
                  item
                  // ml={"auto"}
                  width={1}
                  md={12}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={0}
                >
                  <Stack
                    direction={"row"}
                    bgcolor={"action.hover"}
                    alignItems={"center"}
                    className="project-desc"
                    pl={"1rem"}
                  >
                    <Typography
                      flex={{ xs: 4, sm: 6 }}
                      fontWeight={{ xs: 400, md: "bolder" }}
                      fontSize={{ xs: "0.9rem", md: "1rem" }}
                      pl={"0.5rem"}
                      pb={{ xs: "0.125rem", sm: "0.25rem" }}
                      pt={{ xs: "0.25rem", sm: "0.5rem" }}
                    >
                      Building footprint
                    </Typography>
                    <Divider
                      className="desc-divider"
                      orientation="vertical"
                      flexItem
                      sx={{ m: "0 0.5rem", borderColor: "rise.light" }}
                    />
                    <Typography
                      pb={{ xs: "0.125rem", sm: "0.25rem" }}
                      pt={{ xs: "0.25rem", sm: "0.5rem" }}
                      flex={2}
                      textAlign={"left"}
                      noWrap
                      fontSize={{ xs: "0.85rem", md: "1rem" }}
                    >
                      {area}
                      {" sqms"}
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    bgcolor={"darkHover"}
                    alignItems={"center"}
                    className="project-desc"
                    pl={"1rem"}
                  >
                    <Typography
                      flex={{ xs: 4, sm: 6 }}
                      fontWeight={{ xs: 400, md: "bolder" }}
                      fontSize={{ xs: "0.9rem", md: "1rem" }}
                      pl={"0.5rem"}
                      pb={{ xs: "0.125rem", sm: "0.25rem" }}
                      pt={{ xs: "0.25rem", sm: "0.5rem" }}
                    >
                      Number of floors
                    </Typography>
                    <Divider
                      className="desc-divider"
                      orientation="vertical"
                      flexItem
                      sx={{ m: "0 0.5rem", borderColor: "rise.light" }}
                    />
                    <Typography
                      pb={{ xs: "0.125rem", sm: "0.25rem" }}
                      pt={{ xs: "0.25rem", sm: "0.5rem" }}
                      flex={2}
                      textAlign={"left"}
                      fontSize={{ xs: "0.85rem", md: "1rem" }}
                      noWrap
                    >
                      {floors || 22}
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    bgcolor={"action.hover"}
                    alignItems={"center"}
                    className="project-desc"
                    pl={"1rem"}
                  >
                    <Typography
                      flex={{ xs: 4, sm: 6 }}
                      fontWeight={{ xs: 400, md: "bolder" }}
                      fontSize={{ xs: "0.85rem", md: "1rem" }}
                      pl={"0.5rem"}
                      pb={{ xs: "0.125rem", sm: "0.25rem" }}
                      pt={{ xs: "0.25rem", sm: "0.5rem" }}
                    >
                      Total number of apartments
                    </Typography>
                    <Divider
                      className="desc-divider"
                      orientation="vertical"
                      flexItem
                      sx={{ m: "0 0.5rem", borderColor: "rise.light" }}
                    />
                    <Typography
                      pb={{ xs: "0.125rem", sm: "0.25rem" }}
                      pt={{ xs: "0.25rem", sm: "0.5rem" }}
                      flex={2}
                      textAlign={"left"}
                      fontSize={{ xs: "0.85rem", md: "1rem" }}
                      noWrap
                    >
                      {apartments}
                    </Typography>
                  </Stack>
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
