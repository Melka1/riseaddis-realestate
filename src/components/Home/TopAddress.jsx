import {
  Facebook,
  Google,
  Instagram,
  LocationOn,
  Phone,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { Montserrat } from "next/font/google";
import { BiLogoTiktok } from "react-icons/bi";

const font = Montserrat({ subsets: ["cyrillic"] });

function TopAddressBar() {
  return (
    <Box
      // position="sticky"
      // mb={"100%"}
      // top={0}
      // left={0}
      width={1}
      zIndex={1}
      minHeight={30}
      bgcolor={"riseLight.light"}
      display={"flex"}
      alignItems={"center"}
      p={{ xs: "0.5rem 1rem", sm: "0.5rem 3rem", md: "0.75rem 6rem" }}
      justifyContent={"space-between"}
      fontSize={"0.8rem"}
    >
      <Box display={"flex"} gap={{ xs: "0.5rem", md: "1rem" }}>
        <Link
          href="https://www.facebook.com/Luxuryhomeinaddis"
          color={"rise.main"}
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
          />
        </Link>
        <Link
          href="#youtube"
          color={"rise.main"}
          sx={{ "&:hover": { transform: "scale(1.05)" }, display: "flex" }}
        >
          <Box
            component={"img"}
            src="/social/youtube.png"
            width={{ xs: 15, sm: 20 }}
            height={{ xs: 15, sm: 20 }}
          />
        </Link>
        <Link
          href="https://www.tiktok.com/@rise_addis_property"
          color={"rise.main"}
          sx={{ "&:hover": { transform: "scale(1.05)" }, display: "flex" }}
        >
          <Box
            component={"img"}
            src="/social/tiktok.png"
            width={{ xs: 15, sm: 20 }}
            height={{ xs: 15, sm: 20 }}
          />
        </Link>
        <Link
          href="https://www.instagram.com/rise_addis_property"
          color={"rise.main"}
          sx={{ "&:hover": { transform: "scale(1.05)" }, display: "flex" }}
        >
          <Box
            component={"img"}
            src="/social/instagram.png"
            width={{ xs: 15, sm: 20 }}
            height={{ xs: 15, sm: 20 }}
          />
        </Link>
        <Link
          href="#google"
          color={"rise.main"}
          sx={{ "&:hover": { transform: "scale(1.05)" }, display: "flex" }}
        >
          <Box
            component={"img"}
            src="/social/google.png"
            width={{ xs: 15, sm: 20 }}
            height={{ xs: 15, sm: 20 }}
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
            // display={{ xs: "none", sm: "inline" }}
            color={"rise"}
            className={font.className}
            fontSize={"0.8rem"}
          >
            24/7
          </Typography>
        </Box>
        <Link
          href="tel:+251921739456"
          underline={"none"}
          color={"inherit"}
          className={font.className}
          fontSize={{ xs: "0.75rem", sm: "0.8rem" }}
        >
          +251 92 173 9456
        </Link>
        <Link
          // display={{ xs: "none", sm: "inline" }}
          href="tel:+251919385608"
          underline={"none"}
          color={"inherit"}
          className={font.className}
          fontSize={{ xs: "0.75rem", sm: "0.8rem" }}
        >
          +251 91 938 5608
        </Link>
      </Box>
    </Box>
  );
}

export default TopAddressBar;
