import { LocationOn, Phone } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["cyrillic"] });

function TopAddressBar() {
  return (
    <Box
      width={1}
      zIndex={1}
      minHeight={30}
      bgcolor={"riseLight.main"}
      display={"flex"}
      alignItems={"center"}
      p={{ xs: "0.5rem 1rem", sm: "1rem 3rem", md: "1rem 6rem" }}
      borderBottom={"1px solid lightgray"}
      justifyContent={"space-between"}
      fontSize={"0.8rem"}
    >
      <Box display={"flex"} gap={{ xs: "1rem", md: "1rem" }}>
        <Link
          href="https://www.facebook.com/Luxuryhomeinaddis"
          color={"rise.main"}
          target="_blank"
          aria-label="social media link for facebook"
          sx={{
            "&:hover": { transform: "scale(1.05)" },
            display: "flex",
          }}
        >
          <Box
            component={"img"}
            src="/social/facebook.png"
            width={{ xs: 15, sm: 20 }}
            height={{ xs: 15, sm: 20 }}
            alt="facebook link"
          />
        </Link>
        <Link
          href="https://www.youtube.com/@RiseAddisProperties"
          target="_blank"
          color={"rise.main"}
          sx={{ "&:hover": { transform: "scale(1.05)" }, display: "flex" }}
          aria-label="social media link for youtube"
        >
          <Box
            component={"img"}
            src="/social/youtube.png"
            width={{ xs: 15, sm: 20 }}
            height={{ xs: 15, sm: 20 }}
            alt="youtube link"
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.tiktok.com/@rise_addis_property"
          color={"rise.main"}
          sx={{ "&:hover": { transform: "scale(1.05)" }, display: "flex" }}
          aria-label="social media link for tik tok"
        >
          <Box
            component={"img"}
            src="/social/tiktok.png"
            width={{ xs: 15, sm: 20 }}
            height={{ xs: 15, sm: 20 }}
            alt="tik-tok link"
          />
        </Link>
        <Link
          href="https://www.instagram.com/rise_addis_property"
          target="_blank"
          color={"rise.main"}
          sx={{ "&:hover": { transform: "scale(1.05)" }, display: "flex" }}
          aria-label="social media link for instagram"
        >
          <Box
            component={"img"}
            src="/social/instagram.png"
            width={{ xs: 15, sm: 20 }}
            height={{ xs: 15, sm: 20 }}
            alt="instagram link"
          />
        </Link>
        <Link
          href="mailto:riseaddis1@gmail.com"
          target="_blank"
          color={"rise.main"}
          sx={{ "&:hover": { transform: "scale(1.05)" }, display: "flex" }}
          aria-label="social media link for email"
        >
          <Box
            component={"img"}
            src="/social/google.png"
            width={{ xs: 15, sm: 20 }}
            height={{ xs: 15, sm: 20 }}
            alt="email link"
          />
        </Link>
      </Box>
      <Box
        display={"flex"}
        gap={{ xs: "0.125rem", sm: "1rem" }}
        color={"riseLight.contrastText"}
        alignItems={"center"}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Link
          display={{ xs: "none", sm: "flex" }}
          href="map:location"
          underline={"none"}
          alignItems={"center"}
          color={"inherit"}
          className={font.className}
        >
          <LocationOn
            color={"rise"}
            sx={{ width: { xs: 15, sm: 20 }, height: { xs: 15, sm: 20 } }}
          />
          <Typography
            color={"rise"}
            className={font.className}
            // fontSize={"0.8rem"}
            fontSize={{ xs: "0.75rem", sm: "0.8rem" }}
          >
            Bole, Shewa-dabo, Rayumma mall
          </Typography>
        </Link>

        <Box alignItems={"center"} display={{ xs: "none", sm: "flex" }}>
          <Phone color={"rise"} sx={{ width: 20, height: 20 }} />
          <Typography
            color={"rise"}
            className={font.className}
            fontSize={"0.8rem"}
          >
            24/7
          </Typography>
        </Box>
        <Link
          href="tel:+251931044444"
          underline={"none"}
          color={"inherit"}
          className={font.className}
          fontSize={{ xs: "0.75rem", sm: "0.8rem" }}
          lineHeight={2}
        >
          0931044444
        </Link>
        <Link
          href="tel:+251931115566"
          underline={"none"}
          color={"inherit"}
          className={font.className}
          fontSize={{ xs: "0.75rem", sm: "0.8rem" }}
          lineHeight={2}
        >
          0931115566
        </Link>
      </Box>
    </Box>
  );
}

export default TopAddressBar;
