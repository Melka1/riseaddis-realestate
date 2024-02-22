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
    <Box sx={{ p: { md: "3rem", lg: "5rem" } }} width={1}>
      <Stack direction="row" spacing={3}>
        <Item>
          <Typography
            component={"h1"}
            p={1}
            fontWeight="600"
            textAlign={"left"}
            sx={{
              fontSize: { md: "1.5rem", lg: "2rem" },
            }}
          >
            RISE ADDIS REAL ESTATE IN ETHIOPIA
          </Typography>
          <Typography
            component={"h2"}
            p={1}
            sx={{
              fontSize: { md: "1.2rem", lg: "1.5rem" },
            }}
          >
            Luxury apartments - Homes for Sale
          </Typography>
          <Typography
            p={1}
            sx={{
              fontSize: { md: "1rem", lg: "1.2rem" },
            }}
          >
            Offering a real estate in Ethiopia with luxury apartments is what we
            are known for!
          </Typography>
          <Typography
            p={1}
            sx={{
              fontSize: { md: "1rem", lg: "1.2rem" },
            }}
          >
            Rise Addis real estate in Ethiopia, raises the bar with our upscale,
            luxury apartments. Our mission is to provide professional real
            estate development services to our valued clients and Streamline the
            process of homes for sale.
          </Typography>
          <Button
            variant="contained"
            color="success"
            style={{ padding: "0.5rem 1.5rem", marginTop: "1rem" }}
            endIcon={<ReadMore />}
          >
            Read More
          </Button>
        </Item>
        <Item sx={{ p: "0" }}>
          <Box
            component={"img"}
            width={1}
            // src="https://res.cloudinary.com/dov9kdlci/image/upload/v1708298574/pexels-curtis-adams-3288103_owdhcz.jpg"
            src="/images/5.jpg"
            sx={{ objectFit: "cover", height: "100%" }}
          ></Box>
        </Item>
      </Stack>
    </Box>
  );
}

export default AboutUsSection;
