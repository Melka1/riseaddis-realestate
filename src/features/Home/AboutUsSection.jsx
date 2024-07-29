import { riseFont } from "@/pages/_app";
import { ReadMore } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  width: "100%",
  boxShadow: "none",
  borderRadius: "1rem",
  overflow: "hidden",
}));

function AboutUsSection() {
  return (
    <Box
      sx={{ p: { xs: "1rem", sm: "3rem", md: "5rem 8rem" } }}
      width={1}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack direction="row" spacing={{ sm: 2, md: 5 }}>
        <Item sx={{ width: "200%" }}>
          <Typography
            component={"h1"}
            p={{ xs: "0.25rem 0", md: "0.5rem 0" }}
            fontWeight="600"
            textAlign={"left"}
            className={riseFont.className}
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem", lg: "2rem" },
            }}
          >
            RISE ADDIS PROPERTIES
          </Typography>
          <Typography
            component={"h2"}
            p={{ xs: "0.25rem 0", md: "0.5rem 0" }}
            sx={{
              fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem" },
            }}
            className={riseFont.className}
          >
            Luxury apartments - Homes for Sale
          </Typography>
          <Typography
            p={{ xs: "0.25rem 0", md: "0.5rem 0" }}
            sx={{
              fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
            }}
            className={riseFont.className}
          >
            Offering a real estate in Ethiopia with luxury apartments is what we
            are known for!
          </Typography>
          <Typography
            p={{ xs: "0.25rem 0", md: "0.5rem 0" }}
            sx={{
              fontSize: { xs: "0.85rem", md: "1rem" },
            }}
            lineHeight={{ sm: "1.2rem", md: "1.5" }}
            className={riseFont.className}
          >
            Rise Addis real estate in Ethiopia, raises the bar with our upscale,
            luxury apartments. Our mission is to provide professional real
            estate development services to our valued clients and Streamline the
            process of homes for sale.
          </Typography>
          <Button
            variant="contained"
            color="rise"
            sx={{
              padding: "0.75rem 2rem",
              marginTop: { xs: "0.5rem", md: "1rem" },
            }}
            endIcon={<ReadMore />}
          >
            Read More
          </Button>
        </Item>
        <Item sx={{ p: "0", display: { xs: "none", sm: "block" } }}>
          <Box
            component={"img"}
            width={1}
            src="https://res.cloudinary.com/dchmblw88/image/upload/v1716270876/photo_2024-05-21_08-53-54_btnxnm.jpg"
            sx={{ objectFit: "cover", height: "100%" }}
            alt="rise addis properties image"
          ></Box>
        </Item>
      </Stack>
    </Box>
  );
}

export default AboutUsSection;
